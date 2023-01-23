import {hashGen} from './src/utils/hashGen'; 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Pintash/',
  build:{
    rollupOptions:{
      output:{
        entryFileNames: `[name]` + hashGen + `.js`,
        chunkFileNames: `[name]` + hashGen + `.js`,
        assetFileNames: `[name]` + hashGen + `.[ext]`
      }
    }
  }
})
