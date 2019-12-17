# 东风项目文档 Dong-Feng Documentation

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dongfeng-project/documents/Lint?style=flat-square)
![Netlify](https://img.shields.io/netlify/d938cd1d-452a-4453-8b61-4df7bacaac43?style=flat-square)
![GitHub](https://img.shields.io/github/license/dongfeng-project/documents?style=flat-square)
![Slack](https://img.shields.io/badge/slack-join_chat-brightgreen?style=flat-square&logo=slack&link=https://join.slack.com/t/dong-feng/shared_invite/enQtODI5MjQwNDE5MTQxLWE2YWE5YWM2MDY4NTBhOTI0ODhmY2I1ZDQ1NTQ4YmY1ZmVlNTJkMzNiZjYxODgwYzgwODJhZTA4MDEzNTJmMTA)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdongfeng-project%2Fdocuments.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdongfeng-project%2Fdocuments?ref=badge_small)

东风是一个以 Celery 为基础的分布式黑盒漏洞自动化扫描系统，旨在提供一个支持分布式部署、各个组件松耦合、尽可能覆盖渗透测试全流程的平台，它诞生的初衷是将安全开发工程师从繁杂的任务调度系统开发中解放出来，投入更多精力专注于扫描能力的提升。

---

Dong-Feng is a Celery-based distributed black box vulnerability automatic scanner. It aims to provide a platform that supports distributed deployment, loosely coupled components, and covers the entire process of penetration testing as much as possible. It was born with the intention of bringing security development engineers freed from the development of complicated task scheduling systems and invested more energy to focus on the improvement of scanning capabilities.

## 关于本文档 About Documentation

文档采用 VuePress 生成，通过 Netlify 部署，在线地址 [https://docs.dongfeng.40huo.cn/](https://docs.dongfeng.40huo.cn/)。

## 贡献 Contribution

-   安装依赖

    ```shell script
    npm install
    ```

-   本地测试

    ```shell script
    npm run dev
    ```

-   通过 [lint-md](https://github.com/hustcc/lint-md) 检查文档规范

    ```shell script
    npm run lint
    ```

## 开源许可 License

- [AGPL](https://github.com/dongfeng-project/documents/blob/master/LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdongfeng-project%2Fdocuments.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdongfeng-project%2Fdocuments?ref=badge_large)
