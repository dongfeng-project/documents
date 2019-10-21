# 快速上手

## Docker 环境快速体验

利用 [Docker Compose](https://docs.docker.com/compose/) 搭建了一套测试环境，包括控制面板 Spaceport、通信组件 Overwatch、探测组件 Scout、扫描组件 Missile。

执行如下命令，即可启动环境。

```bash
git clone https://github.com/dongfeng-project/documents.git
cd documents/docker
docker-compose up -d
```

访问 [http://localhost:8080/](http://localhost:8080/) 进入控制面板。

## 手动安装单机体验版

前置依赖

- MySQL
- Redis
- Python >= 3.7
- 不支持 Windows，因为 Celery 从 4.0 版本开始不再支持 Windows

### Web 控制面板 Spaceport

执行如下命令。

```bash
git clone https://github.com/dongfeng-project/spaceport.git
cp .envs/env.example .envs/prod.env
vim .envs/prod.env  # 编辑各类配置
pip install -r requirements.txt
python manage.py runserver
```

### 通信组件 Overwatch

执行如下命令。

```bash
git clone https://github.com/dongfeng-project/overwatch.git
cp .envs/env.example .envs/prod.env
vim .envs/prod.env  # 编辑各类配置
pip install -r requirements.txt
python manage.py runserver
```

### 探测组件 Scout

执行如下命令。

```bash
git clone https://github.com/dongfeng-project/scout.git
cp .envs/env.example .envs/prod.env
vim .envs/prod.env  # 编辑各类配置
pip install -r requirements.txt
python manage.py runserver
```

### 扫描组件 Missile

执行如下命令。

```bash
git clone https://github.com/dongfeng-project/overwatch.git
cp .envs/env.example .envs/prod.env
vim .envs/prod.env  # 编辑各类配置
pip install -r requirements.txt
python manage.py runserver
```