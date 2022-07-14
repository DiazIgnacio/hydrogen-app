import { defineConfig } from 'vite'
import hydrogen from '@shopify/hydrogen/plugin'
import netlifyPlugin from '@netlify/hydrogen-platform/plugin'

export default defineConfig({
  plugins: [hydrogen(), netlifyPlugin()],
  server: {
    host: '0.0.0.0'
  }
})
