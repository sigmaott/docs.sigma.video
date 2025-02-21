import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";
import { SidebarBuilder } from "./sidebar/index";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

export const vi = defineConfig({
  lang: "vi-VN",
  description: "Modern Streaming Platform",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/vi/sigma-streaming-platform/": [
        ...SidebarBuilder.get.foldersAndOrder(
          "./docs/vi/sigma-streaming-platform",
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ["_partial"],
          }
        ),
      ],
      "/vi/sigma-media-live/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/vi/sigma-media-live", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/vi/sigma-media-vod/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/vi/sigma-media-vod", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/vi/sigma-media-server/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/vi/sigma-media-server", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/vi/sigma-lrm/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/vi/sigma-lrm", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/vi/sigma-dai/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/vi/sigma-dai", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/vi/sigma-livestream/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/vi/sigma-livestream", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/vi/sigma-interactive/": [
        {
          text: "Get Started",
          items: [
            {
              text: "Introduction",
              link: "/vi/sigma-interactive/1.get-started/1.introduction",
            },
            {
              text: "Get Started",
              link: "/vi/sigma-interactive/1.get-started/2.get-started",
            },
          ],
        },
      ],
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    footer: {
      copyright: "Copyright © 2023-present Thudo JSC",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Sigma Streaming Platform",
      link: "/vi/sigma-streaming-platform/01-get-started/1-introduction.md",
    },
    {
      text: "Sigma Media Server",
      link: "/vi/sigma-media-server/",
    },
    {
      text: "Sản phẩm",
      items: [
        { text: "Sigma Media Live", link: "/vi/sigma-media-live/" },
        { text: "Sigma Media VOD", link: "/vi/sigma-media-vod/" },
        { text: "Sigma Livestream", link: "/vi/sigma-livestream/" },
        { text: "Sigma Interactive", link: "/vi/sigma-interactive/" },
        { text: "Sigma Linear Right Management", link: "/vi/sigma-lrm/" },
        { text: "Sigma Dynamic Ads Insert", link: "/vi/sigma-dai/" },
      ],
    },
    {
      text: "Ứng dụng",
      items: [
        { text: "Sigma Vast Control", link: "/vi/sigma-vast-control/" },
      ],
    },
    {
      text: "APIs",
      items: [
        { text: "Sigma Media Live", link: "/vi/apis/sigma-media-live" },
        { text: "Sigma Media VOD", link: "/vi/apis/sigma-media-vod" },
        { text: "Sigma Livestream", link: "/vi/apis/sigma-livestream" },
        { text: "Sigma Dynamic Ads Insert", link: "/vi/apis/sigma-dai" },
        { text: "Sigma Interactive", link: "/vi/apis/sigma-interactive" },
        { text: "Sigma Linear Right Management", link: "/vi/apis/sigma-lrm" },
      ],
    },
    { text: "Đội ngũ", link: "/vi/teams/", activeMatch: "/vi/teams/" },
    {
      text: "Links",
      items: [
        {
          text: "Github",
          link: "https://github.com/SigmaOTT",
        },
      ],
    },
  ];
}
