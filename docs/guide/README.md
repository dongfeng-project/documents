# 介绍

[东风](/) 是一个以 [Celery](http://www.celeryproject.org/) 为基础的分布式黑盒漏洞自动化扫描系统，旨在提供一个支持分布式部署、各个组件松耦合、尽可能覆盖渗透测试全流程的平台，它诞生的初衷是将安全开发工程师从繁杂的任务调度系统开发中解放出来，投入更多精力专注于扫描能力的提升。

[东风](/) 由多个相对独立的功能组件组成，包括

- [Web 控制面板 Spaceport](https://github.com/dongfeng-project/spaceport) 及其 [前端工程 Spaceport-FE](https://github.com/dongfeng-project/spaceport-fe)
- [基础组件 Base](https://github.com/dongfeng-project/base)，提供共用的常量及常用工具类
- [通信组件 Overwatch](https://github.com/dongfeng-project/overwatch)，在整个项目中起到类似分布式 Server 的功能，用于上报扫描任务结果、监控 Worker 运行状态、下发命令等
- [探测组件 Scout](https://github.com/dongfeng-project/scout)，包含常见的子域名收集、主机存活扫描、端口探测、爬虫等功能
- [扫描组件 Missile](https://github.com/dongfeng-project/missile)，包含各类主机、Web 漏洞插件

## 如何工作

每一个扫描任务，如端口探测、MySQL 弱口令检测等，都是一个独立的 Celery 任务，可以通过 [Canvas Workflow](https://docs.celeryproject.org/en/latest/userguide/canvas.html) 将多个扫描任务组装成任意的扫描流程，最后将结果提交给 Web 控制面板。

同时，借助 Celery 的 [Worker Monitoring](https://docs.celeryproject.org/en/latest/userguide/monitoring.html) 功能，可以对所有执行任务的 Worker 进行近实时的状态监控和指令下发。

## 特性

### 良好的分布式支持

支持 「控制中心 - Server - Worker」 形式的三级部署，适应跨机房跨网段的复杂网络环境。

### 无须过多考虑并发实现

Celery 自身支持多进程和 gevent/eventlet 协程 [并发](https://docs.celeryproject.org/en/latest/userguide/workers.html#concurrency)，在大部分场景下可满足性能需要。

### 可灵活组装任务流程

轻松实现串行、并行等多种任务链路。

### 易于横向扩展

各个组件代码相对独立，耦合较少，可以很方便的进行横向扩展与负载均衡。

### 全流程覆盖

尽可能多地覆盖渗透测试中的各个流程，包括子域名收集、端口探测、漏洞产出等。