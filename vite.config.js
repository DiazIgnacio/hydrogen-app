import { defineConfig } from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import netlifyPlugin from '@netlify/hydrogen-platform/plugin';
import vitePluginRequire from 'vite-plugin-require';

export default defineConfig({
  plugins: [hydrogen(), netlifyPlugin(), vitePluginRequire()],
});
