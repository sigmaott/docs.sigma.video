import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import SidebarBuilder from '@sigmaott/vitepress-sidebar-builder'

const ogUrl = 'https://sigmaott.com/en/'
const ogDescription = 'New Generation Streaming Platform Video System'

export const viConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
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
        text: 'Bắt đầu',
        link: '/vi/sigma-streaming-platform/01-get-started/1-introduction.md'
      },
      {
        text: 'Các thành phần',
        items: [
          { text: 'Sigma Media Live', link: '/vi/sigma-media-live/' },
          { text: 'Sigma Media VOD', link: '/vi/sigma-media-vod/' },
          { text: 'Sigma Livestream', link: '/vi/sigma-livestream/' },
          { text: 'Sigma Interactive', link: '/vi/sigma-interactive/' },
          { text: 'Sigma Linear Right Management', link: '/vi/sigma-lrm/' },
          { text: 'Sigma Dynamic Ads Insert', link: '/vi/sigma-dai/' },
          { text: 'Sigma Media Server', link: '/vi/sigma-media-server/' }
        ]
      },
      {
        text: 'APIs',
        items: [
          {
            text: 'Sigma Interactive Apis',
            link: '/vi/apis/sigma-interactive'
          },
          {
            text: 'Sigma Linear Right Management Apis',
            link: '/vi/apis/sigma-lrm'
          },
          {
            text: 'Sigma Media Live Apis',
            link: '/vi/apis/sigma-media-live'
          },
          { text: 'Sigma Dynamic Ads Insert Apis', link: '/apis/sigma-dai' },
          { text: 'Sigma Livestream', link: '/apis/sigma-livestream' }
        ]
      },
      { text: 'Đội ngũ', link: '/vi/teams/', activeMatch: '/vi/teams/' },
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
      '/vi/sigma-streaming-platform/': [
        ...SidebarBuilder.get.foldersAndOrder(
          './docs/vi/sigma-streaming-platform',
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ['_partial']
          }
        )
      ],
      '/vi/sigma-media-live/': [
        ...SidebarBuilder.get.foldersAndOrder(
          './docs/vi/sigma-media-live',
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ['_partial']
          }
        )
      ],
      '/vi/sigma-media-server/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/vi/sigma-media-server', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/vi/sigma-lrm/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/vi/sigma-lrm', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/vi/sigma-dai/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/vi/sigma-dai', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/vi/sigma-livestream/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/vi/sigma-livestream', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/vi/sigma-interactive/': [
        {
          text: 'Get Started',
          items: [
            {
              text: 'Introduction',
              link: '/vi/sigma-interactive/1.get-started/1.introduction'
            },
            {
              text: 'Get Started',
              link: '/vi/sigma-interactive/1.get-started/2.get-started'
            }
          ]
        }
      ]
    }
  }
}
