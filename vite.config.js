import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-Website-/',
  plugins: [
    react(),
    {
      name: 'serve-root-landing-pages',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/landing-pages/')) {
            req.url = '/Portfolio-Website-' + req.url;
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    host: true
  }
});
