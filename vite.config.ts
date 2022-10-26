import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import mdx from 'vite-plugin-mdx'
import pages, { PageStrategy, FileHandler, File, extractStaticData } from 'vite-plugin-react-pages'

const any: string = '**/*.{md,mdx,js,jsx,ts,tsx}'

export default defineConfig({
  plugins: [
    react(),
    mdx(),
    pages({
      pagesDir: path.join(__dirname, 'src/pages'),
      pageStrategy: new PageStrategy(function findPages(pagesDir, helpers) {
        helpers.watchFiles(
          pagesDir,
          any,
          fileHandler
        )
      }),
    }),
  ],
  server: {
    host: true,
    port: 3001
  },
  preview: {
    host: true,
    port: 3001
  }
})

const fileHandler: FileHandler = async (file: File, fileHandlerAPI) => {
  const pagePublicPath = getPagePublicPath(file.relative)

  if (pagePublicPath === '/_theme') {
    return null
  }

  fileHandlerAPI.addPageData({
    pageId: pagePublicPath,
    dataPath: file.path,
    staticData: await extractStaticData(file),
  })
}

const getPagePublicPath = (relativePageFilePath: string) => {
  var pagePublicPath: string;

  const regex: RegExp = /\.(md|mdx|js|jsx|ts|tsx)$/;
  const indexRegex: RegExp = /index\.(md|mdx|js|jsx|ts|tsx)$/;

  if (relativePageFilePath.match(regex)) {
    pagePublicPath = relativePageFilePath.replace(regex, '')

  }
  if (relativePageFilePath.match(indexRegex)) {
    pagePublicPath = relativePageFilePath.replace(indexRegex, '')
  }

  pagePublicPath = pagePublicPath.replace(/\/$/, '')
  pagePublicPath = `/${pagePublicPath}`
  return pagePublicPath
}