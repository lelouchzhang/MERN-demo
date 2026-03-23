MERN-demo
一个基于 MERN 技术栈（MongoDB + Express + React + Node.js）的全栈产品管理系统 Demo 项目，实现了产品的增删改查（CRUD）功能。
✨ 功能特性
📦 产品管理 - 完整的产品增删改查功能
🎨 现代化前端 - React 构建的响应式用户界面
🚀 RESTful API - Express 构建的后端 API 接口
🗄️ 数据持久化 - MongoDB 数据库支持
⚡ 前后端分离 - 清晰的架构设计

🛠️ 技术栈
| 层级      | 技术                                |
| ------- | --------------------------------- |
| **前端**  | React.js, HTML5, CSS3, JavaScript |
| **后端**  | Node.js, Express.js               |
| **数据库** | MongoDB                           |
| **工具**  | npm, Git                          |

📁 项目结构
MERN-demo/
├── client/                 # 前端 React 应用
│   ├── public/
│   └── src/
│       ├── components/     # 可复用组件
│       ├── pages/          # 页面组件
│       ├── services/       # API 服务
│       └── App.js
├── server/                 # 后端 Express 应用
│   ├── config/             # 配置文件
│   ├── controllers/        # 控制器逻辑
│   ├── models/             # 数据模型
│   ├── routes/             # API 路由
│   └── server.js           # 入口文件
├── package.json
└── README.md

🚀 快速开始
环境要求
Node.js (v14 或更高版本)
MongoDB 数据库
npm 或 yarn

安装步骤
1. 克隆项目
git clone https://github.com/lelouchzhang/MERN-demo.git
```bash
cd MERN-demo
cd MERN-demo
```
3. 安装后端依赖
```bash
cd server
npm install
```
4. 配置环境变量
在 server 目录下创建 .env 文件：
```plain
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```
5. 启动后端服务
```bash
npm start
# 或使用 nodemon 进行开发
npm run dev
```
6. 安装前端依赖（新开一个终端）
```bash
cd ../client
npm install
```
7. 启动前端应用
```bash
npm start
```
8. 访问应用
打开浏览器访问 http://localhost:5000
📡 API 接口
| 方法     | 路径                  | 描述     |
| ------ | ------------------- | ------ |
| GET    | `/api/products`     | 获取所有产品 |
| GET    | `/api/products/:id` | 获取单个产品 |
| POST   | `/api/products`     | 创建新产品  |
| PUT    | `/api/products/:id` | 更新产品   |
| DELETE | `/api/products/:id` | 删除产品   |

🤝 贡献指南
欢迎提交 Issue 和 Pull Request！
Fork 本仓库
创建你的特性分支 (git checkout -b feature/AmazingFeature)
提交你的修改 (git commit -m 'Add some AmazingFeature')
推送到分支 (git push origin feature/AmazingFeature)
打开一个 Pull Request
📄 许可证
本项目基于 MIT 许可证开源。
Made with ❤️ by lelouchzhang
