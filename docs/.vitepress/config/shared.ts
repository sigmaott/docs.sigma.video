import { defineConfig } from 'vitepress'
// import { search as zhSearch } from './zh'
// import { search as ptSearch } from './pt'
const ogDescription = 'Sigma Streaming Platform Document Site'
const ogImage = 'https://sigmaott.com/og/og-image.png'
const ogTitle = 'Sigma Streaming Platform Docs'
const ogUrl = 'https://sigma.video'
export const shared = defineConfig({
  title: 'Sigma Streaming',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://docs.sigma.video',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'twitter:description', content: ogDescription }],
    ['meta', { property: 'twitter:title', content: ogTitle }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: ogImage }],
    ['meta', { property: 'twitter:url', content: ogUrl }],
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 30, height: 30 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress',
    //     locales: { ...zhSearch, ...ptSearch }
    //   }
    // },

  }
})
