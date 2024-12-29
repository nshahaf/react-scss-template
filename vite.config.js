import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/react-scss-template/' : '',
    plugins: [react(), svgr()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern', // or modern-compiler
        },
      },
    },

  }
})
