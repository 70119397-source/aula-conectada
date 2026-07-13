import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Reemplaza 'aula-conectada' por el nombre exacto que le pondrás a tu repositorio en el Paso 3
export default defineConfig({
  plugins: [react()],
  base: '/aula-conectada/', 
})