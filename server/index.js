import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json({ limit: '50kb' }));

// Input sanitization helper
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim();
}

// Simple email regex validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Optional MongoDB Connection
let isMongoConnected = false;
const MONGO_URI = process.env.MONGODB_URI;

if (MONGO_URI) {
  // If MongoDB URI is supplied, mongoose can connect here
  console.log('MongoDB URI provided. Attempting connection...');
} else {
  console.log('No MONGODB_URI detected in environment. Running in local file-storage fallback mode.');
}

// Contact messages backup file
const MESSAGES_FILE = path.join(__dirname, 'messages.json');
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([]));
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    mongoConnected: isMongoConnected
  });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanSubject = sanitize(subject);
    const cleanMessage = sanitize(message);

    // Validation
    if (!cleanName || cleanName.length < 2) {
      return res.status(400).json({ error: 'Name must be at least 2 characters.' });
    }
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      return res.status(400).json({ error: 'Valid email is required.' });
    }
    if (!cleanSubject || cleanSubject.length < 3) {
      return res.status(400).json({ error: 'Subject must be at least 3 characters.' });
    }
    if (!cleanMessage || cleanMessage.length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters.' });
    }

    const newMessage = {
      id: Date.now().toString(),
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      receivedAt: new Date().toISOString(),
    };

    // Store in local file fallback
    const rawData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(rawData);
    messages.push(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    console.log(`[Contact Received] From: ${cleanName} (${cleanEmail}) - Subject: ${cleanSubject}`);

    return res.status(200).json({
      success: true,
      message: 'Message delivered and logged successfully.',
      data: { id: newMessage.id, receivedAt: newMessage.receivedAt }
    });
  } catch (err) {
    console.error('Error processing contact message:', err);
    return res.status(500).json({ error: 'Internal server error processing inquiry.' });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio API Server listening on http://localhost:${PORT}`);
});
