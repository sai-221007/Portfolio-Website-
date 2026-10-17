import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '../node_modules/@designcodeio/threeui/lib-dist/assets/landing-pages');
const destDir = path.resolve(__dirname, '../public/landing-pages');

console.log('Source:', srcDir);
console.log('Destination:', destDir);

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.cpSync(srcDir, destDir, { recursive: true });
console.log('Successfully copied landing-pages assets to public/landing-pages!');
