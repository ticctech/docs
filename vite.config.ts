import { defineConfig } from 'vite'
import * as path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh';
import mdx from 'vite-plugin-mdx'
import pages, { DefaultPageStrategy } from 'vite-plugin-react-pages'

export default defineConfig({
  plugins: [
    reactRefresh(),
    mdx(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
    }),
  ],
  server: {
    host: true,
    port: 3001
  },
  preview: {
    host: true,
    port: 3001
  },
  resolve: {
    // eslint-disable-next-line no-undef
    alias: { '@': path.resolve(__dirname, './src') }
  },
})
