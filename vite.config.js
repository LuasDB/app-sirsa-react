import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite"
import svgr from "@svgr/rollup";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),tailwindcss(),svgr()
  ],resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      clientPort: 5173,  
    },
  },
  },
  
  
  
})
