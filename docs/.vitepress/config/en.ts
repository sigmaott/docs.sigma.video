import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";
import { SidebarBuilder } from "./sidebar/index";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

export const en = defineConfig({
  lang: "en-US",
  description: "Modern Streaming Platform",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/en/sigma-streaming-platform/": [
        ...SidebarBuilder.get.foldersAndOrder(
          "./docs/en/sigma-streaming-platform",
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ["_partial"],
          }
        ),
      ],
      "/en/sigma-media-live/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/en/sigma-media-live", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/en/sigma-media-vod/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/en/sigma-media-vod", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/en/sigma-media-server/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/en/sigma-media-server", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/en/sigma-lrm/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/en/sigma-lrm", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/en/sigma-dai/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/en/sigma-dai", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/en/sigma-livestream/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/en/sigma-livestream", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
      "/en/sigma-interactive/": [
        {
          text: "Get Started",
          items: [
            {
              text: "Introduction",
              link: "/en/sigma-interactive/1.get-started/1.introduction",
            },
            {
              text: "Get Started",
              link: "/en/sigma-interactive/1.get-started/2.get-started",
            },
          ],
        },
      ],
      "/en/sigma-vast-control/": [
        ...SidebarBuilder.get.foldersAndOrder("./docs/en/sigma-vast-control", {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ["_partial"],
        }),
      ],
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    footer: {
      // message: 'Released under the MIT License.',
      copyright: "Copyright © 2023-present Thudo JSC",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Sigma Streaming Platform",
      link: "/en/sigma-streaming-platform/01-get-started/1-introduction.md",
    },
    {
      text: "Sigma Media Server",
      link: "/en/sigma-media-server/",
    },
    {
      text: "Products",
      items: [
        { text: "Sigma Media Live", link: "/en/sigma-media-live/" },
        { text: "Sigma Media VOD", link: "/en/sigma-media-vod/" },
        { text: "Sigma Livestream", link: "/en/sigma-livestream/" },
        { text: "Sigma Interactive", link: "/en/sigma-interactive/" },
        { text: "Sigma Linear Right Management", link: "/en/sigma-lrm/" },
        { text: "Sigma Dynamic Ads Insert", link: "/en/sigma-dai/" },
      ],
    },
        {
      text: "Apps",
      items: [
        { text: "Sigma Vast Control", link: "/en/sigma-vast-control/" },
      ],
    },
    {
      text: "APIs",
      items: [
        { text: "Sigma Media Live", link: "/en/apis/sigma-media-live" },
        { text: "Sigma Media VOD", link: "/en/apis/sigma-media-vod" },
        { text: "Sigma Livestream", link: "/en/apis/sigma-livestream" },
        { text: "Sigma Dynamic Ads Insert", link: "/en/apis/sigma-dai" },
        { text: "Sigma Interactive", link: "/en/apis/sigma-interactive" },
        { text: "Sigma Linear Right Management", link: "/en/apis/sigma-lrm" },
      ],
    },
    { text: "Teams", link: "/en/teams/", activeMatch: "/en/teams/" },
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
