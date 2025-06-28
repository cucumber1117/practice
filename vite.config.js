//@fix:jsonconfig.jsonファイルを作成し、そして既存のvite.config.js内を
//下記のようなコードに書き変えると、@でパス指定が可能になる
//@はLevel3.jsxやLevel4.jsxなどで活用している
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Vite config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),  // Use __dirname to resolve the path
    },
  },
})
