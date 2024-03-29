import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { vi } from './vi'
import { fileURLToPath, URL } from 'node:url'
import imageViewer from './markdown/image-viewer'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  ...shared,
  locales: {
    vi: { label: 'Tiếng Việt', ...vi },
    en: { label: 'English', ...en },
  },
  markdown: {
    config: (md) => {
      md.use(imageViewer)
    }
  },
  vite: {
    plugins: [
      UnoCSS(),
    ],
    ssr: { noExternal: ['@scalar/api-reference'], },
    // resolve: {
    //   alias: [
    //     {
    //       find: /^.*\/VPImage\.vue$/,
    //       replacement: fileURLToPath(
    //         new URL('../theme/components/VPImage.vue', import.meta.url)
    //       )
    //     }
    //   ]
    // }
  },

})
