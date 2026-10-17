# Sai Manikanta — Personal Portfolio Website

A responsive, production-quality personal portfolio website built for **Sai Manikanta**, Computer Science Student and Developer.

---

## 🌟 Key Features

1. **Continuous Shooting Stars Background**
   - High-performance, lightweight HTML5 Canvas rendering.
   - Continuous star spawn with random velocity, angle, trailing alpha gradients, and head glow.
   - Colors dynamically harmonize with active theme (Midnight violet `#22223B`, Muted indigo `#4A4E69`, and Dusty rose `#C9ADA7`).
   - Completely independent from character state — never restarts or stutters during interactions.
   - Reduced-motion compliant (`prefers-reduced-motion`).

2. **Articulated Walking & Talking Character**
   - Procedurally rigged 2D vector character accurately reflecting Sai Manikanta (stylish dark pompadour hair, modern rectangular eyeglasses, well-groomed beard, midnight-violet jacket, ivory shirt, and white sneakers).
   - Natural kinematic stride: alternating thighs, knee bend, coordinated counter arm swings, and pelvis bobbing.
   - Decelerates smoothly to a natural standing stance beside the hero copy without obstructing content.
   - Speech bubble with smooth spring entry, typewriter reveal, and auto-fade.
   - Articulated mouth movement during speech and periodic eye blinks.
   - **"Meet Me Again" button**: replays the entrance walk and greeting safely without restarting background stars.
   - **Photo Asset Mode**: switchable toggle to display studio photographic reference.

3. **Audio Narration Engine**
   - Browser Web Speech API (`SpeechSynthesis`) with natural English voice synthesis.
   - Explicit user-triggered audio control (no obnoxious autoplay).
   - Real-time animated audio wave indicator.

4. **Multi-Theme Design System**
   - **Student White (Default)**: Crisp white (`#FFFFFF`), midnight violet (`#22223B`), muted indigo (`#4A4E69`), dusty rose (`#C9ADA7`), and warm ivory (`#F2E9E4`).
   - **Graphite Gallery**: Deep charcoal (`#121214`), zinc (`#F3F4F6`), and warm metallic rose accents.
   - **Soft Lavender**: Clean lavender background (`#FAF8FD`), deep purple (`#251838`), and plum accents.
   - Instant theme switching with `localStorage` persistence.

5. **Custom SM Monogram Logo**
   - Geometric SVG mark combining 'S' and 'M' with a terminal prompt and pulsing code cursor dot.
   - Works seamlessly on light and dark backgrounds.

6. **Interactive 3D Geometry Lab**
   - Three.js WebGL Geodesic Polyhedron with glowing vertex lattice and dynamic orbital technology rings.
   - Mouse-tracking interactive rotation, damping, and solid/lattice wireframe mode toggle.
   - Zero initial load penalty on hero section.

7. **Projects Showcase & Architecture Details**
   - Gallery-inspired layout with interactive filtering (All, Full Stack, Backend & Systems, Creative & AI).
   - Project cards with tech chips, GitHub repository links, and live previews.
   - In-depth project architectural modal breakdown.

8. **Dual-Mode Contact System**
   - Full client-side input validation and honeypot spam protection.
   - Connects to optional Node/Express backend (`/api/contact`).
   - Graceful fallback: opens pre-composed message in client's default email client with confetti celebration.

---

## 🛠️ Technology Stack

- **Frontend**: React.js 18, Vite 6, Tailwind CSS 3
- **Animations**: Framer Motion, HTML5 Canvas, CSS Transforms & SVG Kinematics
- **3D Graphics**: Three.js WebGL
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti
- **Backend (Optional)**: Node.js, Express.js, MongoDB (configurable via environment variables)

---

## 🚀 Getting Started (Windows & VS Code)

### Prerequisites
- Node.js (v18 or higher recommended; v24 tested)
- npm (v9 or higher)

### Installation
1. Open terminal in the project directory:
   ```powershell
   cd "Portfolio Website"
   npm install
   ```

### Running Locally
To launch the Vite development server:
```powershell
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### (Optional) Running the Express Backend Server
To start the Node.js / Express contact API server:
```powershell
npm run server
```
The server will listen on `http://localhost:5000`.

To configure MongoDB, copy `server/.env.example` to `server/.env` and provide your connection URI:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/portfolio
```

### Production Build
To create an optimized production build:
```powershell
npm run build
```
To preview the production build locally:
```powershell
npm run preview
```

---

## 📦 Deployment Guide

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in `Portfolio Website/` and follow the prompts.
3. Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📁 Project Structure

```
Portfolio Website/
├── public/
│   └── assets/
│       ├── sai-portrait.jpg        # Character reference asset
│       ├── devsync-mockup.jpg      # Project thumbnail
│       └── cloudpulse-mockup.jpg   # Project thumbnail
├── src/
│   ├── components/
│   │   ├── Logo.jsx                # Custom SM Monogram SVG
│   │   ├── Navbar.jsx              # Responsive navigation & active spy
│   │   ├── ThemeSwitcher.jsx       # 3-Theme palette switcher
│   │   ├── ShootingStars.jsx       # Canvas continuous star effect
│   │   ├── HeroSection.jsx         # Hero layout & introductory copy
│   │   ├── WalkingCharacter.jsx    # Rigged 2D character kinematics
│   │   ├── SpeechBubble.jsx        # Typewriter message bubble
│   │   ├── VoiceControls.jsx       # Web Speech API voice toggle
│   │   ├── AboutSection.jsx        # Bento grid bio & education
│   │   ├── SkillsSection.jsx       # Verified technical capabilities
│   │   ├── ProjectsSection.jsx     # Gallery showcase & filters
│   │   ├── ProjectCard.jsx         # Project preview card
│   │   ├── ProjectModal.jsx        # Deep architecture modal
│   │   ├── Showcase3D.jsx          # Interactive Three.js WebGL lab
│   │   ├── ContactSection.jsx      # Validated dual-mode contact form
│   │   └── Footer.jsx              # Footer & back-to-top control
│   ├── context/
│   │   └── ThemeContext.jsx        # Theme state & localStorage
│   ├── data/
│   │   └── portfolioData.js        # Content & profile configuration
│   ├── App.jsx                     # Root application
│   ├── index.css                   # Tailwind & theme variables
│   └── main.jsx                    # Entry point
├── server/
│   ├── index.js                    # Express API server
│   └── .env.example                # Backend environment template
├── index.html                      # SEO metadata, fonts & favicon
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```
