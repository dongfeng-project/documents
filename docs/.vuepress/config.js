module.exports = ctx => ({
  locales: {
    "/": {
      lang: "zh-CN",
      title: "东风",
      description: "分布式黑盒漏洞自动化扫描系统",
    },
    "/en/": {
      lang: "en-US",
      title: "Dong Feng",
      description: "Distributed Automated Black Box Vulnerability Scanner",
    },
  },
  themeConfig: {
    smoothScroll: true,
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: require("./nav/zh"),
        sidebar: {
          "/api/": getApiSidebar(),
          "/guide/": getGuideSidebar("指南", "深入"),
          "/theme/": getThemeSidebar("主题", "介绍"),
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
          "/en/api/": getApiSidebar(),
          "/en/guide/": getGuideSidebar("Guide", "Advanced"),
          "/en/theme/": getThemeSidebar("Theme", "Introduction"),
        },
      },
    },
  },
  extraWatchFiles: [".vuepress/nav/en.js", ".vuepress/nav/zh.js"],
});

function getApiSidebar() {
  return ["cli", "node"];
}

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

function getThemeSidebar(groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      // children: [
      //   ["", introductionA],
      //   "using-a-theme",
      //   "writing-a-theme",
      //   "option-api",
      //   "default-theme-config",
      //   "inheritance",
      // ],
    },
  ];
}
