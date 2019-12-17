module.exports = ctx => ({
  head: [["link", {rel: "icon", href: "/logo.png"}]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "东风",
      description: "分布式自动化黑盒漏洞扫描系统",
    },
    "/en/": {
      lang: "en-US",
      title: "Dong Feng",
      description: "Distributed Automated Black Box Vulnerability Scanner",
    },
  },
  themeConfig: {
    repo: "dongfeng-project/documents",
    smoothScroll: true,
    editLinks: true,
    docsDir: "docs",
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: require("./nav/zh"),
        sidebar: {
          "/guide/": getGuideSidebar("指南", "深入"),
        },
      },
      "/en/": {
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: require("./nav/en"),
        sidebar: {
          "/en/guide/": getGuideSidebar("Guide", "Advanced"),
        },
      },
    },
  },
  extraWatchFiles: [".vuepress/nav/en.js", ".vuepress/nav/zh.js"],
  plugins: [
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html",
      },
    ],
    ["vuepress-plugin-mathjax", {target: "svg", macros: {"*": "\\times"}}],
    "vuepress-plugin-nprogress",
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: ".my-wrapper .my-img",
        delay: 1000,
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-150419494-1",
      },
    ],
    ["@vuepress/back-to-top"],
  ],
});

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        "",
        "getting-started",
        "structure",
        // 'basic-config',
        // 'assets',
        // 'markdown',
        // 'using-vue',
        // 'i18n',
        // 'deploy',
      ],
    },
    {
      title: groupB,
      collapsable: false,
      // children: ["frontmatter", "permalinks", "markdown-slot", "global-computed"],
    },
  ];
}