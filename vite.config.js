// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from 'tailwindcss'  // Add this import
import autoprefixer from 'autoprefixer'  // Add this import

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Smok Gastronomy Explorer',
        short_name: 'Smok Explorer',
        theme_color: '#4CAF50',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),  // Use the imported plugin
        autoprefixer
      ]
    }
  },
  build: {
    sourcemap: true,
  },
})