# 介绍

[东风](/) 是一个以 [Celery](http://www.celeryproject.org/) 为基础的分布式黑盒漏洞自动化扫描系统，旨在提供一个支持分布式部署、各个组件松耦合、尽可能覆盖渗透测试全流程的平台，它诞生的初衷是将安全开发工程师从繁杂的任务调度系统开发中解放出来，投入更多精力专注于扫描能力的提升。

## 如何工作？

每一个扫描任务，如端口探测、MySQL 弱口令检测等，都是一个独立的 Celery 任务，可以通过 [Canvas Workflow](https://docs.celeryproject.org/en/latest/userguide/canvas.html) 将多个扫描任务组装成任意的扫描流程，最后将结果提交给 Web 控制面板。

同时，借助 Celery 的 [Worker Monitoring](https://docs.celeryproject.org/en/latest/userguide/monitoring.html) 功能，可以对所有执行任务的 Worker 进行近实时的状态监控和指令下发。

## 特性

- 良好的分布式支持

  支持 控制中心 - Server - Worker 形式的三级部署，适应跨机房跨网段的复杂网络环境。

- 无须过多考虑并发实现

  Celery 自身支持多进程和 gevent/eventlet 协程 [并发](https://docs.celeryproject.org/en/latest/userguide/workers.html#concurrency)，在大部分场景下可满足性能需要。
