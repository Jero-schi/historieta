import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import outputPlugin from 'vite-plugin-output';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
    // outputPlugin({
    //   outDir: 'dist'
    // })
  ],
  base: '/historieta/',
})
