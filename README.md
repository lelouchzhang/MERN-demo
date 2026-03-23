# MERN 全栈产品管理系统

这是一个基于 MERN（MongoDB、Express、React、Node.js）技术栈的全栈产品管理系统。该项目是我从头学习 JavaScript 全栈开发的第一个 Demo，旨在帮助我理解和实践全栈开发的核心概念。

## 功能特性

- **产品列表展示**：前端页面展示所有产品。
- **创建产品**：通过表单添加新产品。
- **更新产品**：支持编辑产品信息。
- **删除产品**：支持删除产品。
- **响应式设计**：适配不同设备屏幕。
- **深色/浅色模式切换**：使用 Chakra UI 提供的主题切换功能。

## 技术栈

- **前端**：
  - React 19
  - Vite
  - Zustand（状态管理）
  - Chakra UI（组件库）
- **后端**：
  - Node.js
  - Express.js
  - MongoDB（通过 Mongoose 连接）
- **开发工具**：
  - ESLint（代码规范）
  - Nodemon（后端开发热更新）
  - dotenv（环境变量管理）

## 项目结构

```
my-mern-crash-demo/
├── backend/                # 后端代码
│   ├── config/             # 数据库配置
│   ├── controllers/        # 控制器
│   ├── models/             # 数据模型
│   ├── routes/             # 路由
│   └── server.js           # 后端入口文件
├── frontend/               # 前端代码
│   ├── public/             # 静态资源
│   ├── src/                # React 源代码
│   │   ├── components/     # 可复用组件
│   │   ├── pages/          # 页面组件
│   │   ├── store/          # 状态管理
│   │   ├── App.jsx         # 应用入口
│   │   └── main.jsx        # 渲染入口
│   └── vite.config.js      # Vite 配置
├── .env                    # 环境变量（未上传）
├── .gitignore              # Git 忽略文件
├── package.json            # 项目依赖
└── README.md               # 项目说明
```

## 快速开始

### 环境要求

- Node.js >= 18.x
- MongoDB 数据库

### 安装依赖

1. 克隆项目到本地：

   ```bash
   git clone https://github.com/your-username/my-mern-crash-demo.git
   cd my-mern-crash-demo
   ```

2. 安装后端依赖：

   ```bash
   npm install
   ```

3. 安装前端依赖：
   ```bash
   cd frontend
   npm install
   ```

### 配置环境变量

在项目根目录下创建 `.env` 文件，并添加以下内容：

```
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

### 启动项目

1. 启动后端服务：

   ```bash
   npm run dev:b
   ```

2. 启动前端开发服务器：

   ```bash
   cd frontend
   npm run dev
   ```

3. 打开浏览器访问 `http://localhost:5173`。

### 部署

1. 构建前端：

   ```bash
   npm run build
   ```

2. 启动生产环境：
   ```bash
   npm run start
   ```

## 学习收获

- 理解了前后端分离的开发模式。
- 掌握了 RESTful API 的设计与实现。
- 学会了使用 Zustand 管理前端状态。
- 熟悉了 MongoDB 的基本操作和 Mongoose 的使用。
- 掌握了 Vite 的配置和优化。

## 感谢

感谢所有开源工具和社区的支持！
