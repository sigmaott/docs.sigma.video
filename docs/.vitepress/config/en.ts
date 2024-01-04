import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import SidebarBuilder from '@sigmaott/vitepress-sidebar-builder'

const ogUrl = 'https://sigmaott.com'
const ogDescription = 'Sigma Streaming Platform Document site'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: ogDescription,
  head: [
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    // editLink: {
    //   pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
    //   text: 'Suggest changes to this page'
    // },

    nav: [
      {
        text: 'Guides',
        link: '/en/sigma-streaming-platform/01-get-started/1-introduction.md'
      },
      {
        text: 'Components',
        items: [
          { text: 'Sigma Media Live', link: '/en/sigma-media-live/' },
          { text: 'Sigma Livestream', link: '/en/sigma-livestream/' },
          { text: 'Sigma Interactive', link: '/en/sigma-interactive/' },
          { text: 'Sigma Linear Right Management', link: '/en/sigma-lrm/' },
          { text: 'Sigma Dynamic Ads Insert', link: '/en/sigma-dai/' },
          { text: 'Sigma Engine Server', link: '/en/sigma-engine-server/' }
        ]
      },
      {
        text: 'APIs',
        items: [
          {
            text: 'Sigma Interactive Apis',
            link: '/en/apis/sigma-interactive'
          },
          {
            text: 'Sigma Linear Right Management Apis',
            link: '/en/apis/sigma-lrm'
          },
          {
            text: 'Sigma Media Live Apis',
            link: '/en/apis/sigma-media-live'
          },
          { text: 'Sigma Dynamic Ads Insert Apis', link: '/en/apis/sigma-dai' },
          { text: 'Sigma Livestream', link: '/apis/sigma-livestream' }
        ]
      },
      { text: 'Teams', link: '/en/teams/', activeMatch: '/en/teams/' },
      {
        text: 'Links',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/SigmaOTT'
          }
        ]
      }
    ],

    sidebar: {
      '/en/sigma-streaming-platform/': [
        ...SidebarBuilder.get.foldersAndOrder(
          './docs/en/sigma-streaming-platform',
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ['_partial']
          }
        )
      ],
      '/en/sigma-media-live/': [
        ...SidebarBuilder.get.foldersAndOrder(
          './docs/en/sigma-media-live',
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ['_partial']
          }
        )
      ],
      '/en/sigma-engine-server/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/en/sigma-engine-server', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/en/sigma-lrm/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/en/sigma-lrm', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/en/sigma-dai/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/en/sigma-dai', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/en/sigma-livestream/': [
          ...SidebarBuilder.get.foldersAndOrder('./docs/en/sigma-livestream', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/en/sigma-interactive/': [
        {
          text: 'Get Started',
          items: [
            {
              text: 'Introduction',
              link: '/en/sigma-interactive/1.get-started/1.introduction'
            },
            {
              text: 'Get Started',
              link: '/en/sigma-interactive/1.get-started/2.get-started'
            }
          ]
        }
      ]
    }
  }
}
