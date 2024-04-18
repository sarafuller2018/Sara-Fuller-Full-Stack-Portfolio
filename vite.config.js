import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})

// things to ask tutor: 
// body background color whitespace
// override bootstrap text color for nav bar
// error messages on contact form