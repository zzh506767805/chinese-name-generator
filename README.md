# Chinese Name Assistant (中文起名助手)

一个基于 AI 的中文起名服务，帮助外国人获取有文化内涵的中文名字。

## 功能特点

- 🤖 基于 OpenAI GPT-4 的智能起名
- 🌏 多语言支持（英语、中文）
- 💳 Stripe 国际支付集成
- 🎨 现代化响应式设计
- 📱 移动端优化
- 🔍 SEO 友好

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **数据库**: PostgreSQL + Prisma ORM
- **AI**: OpenAI GPT-4 API
- **支付**: Stripe API
- **国际化**: next-i18next
- **类型检查**: TypeScript

## 项目结构

```
chinese-name-assistant/
├── app/                # Next.js 应用目录
│   ├── api/           # API 路由
│   ├── components/    # React 组件
│   ├── utils/         # 工具函数
│   └── i18n/          # 国际化配置
├── prisma/            # 数据库模型
├── public/            # 静态资源
│   └── locales/       # 翻译文件
└── types/             # TypeScript 类型定义
```

## 环境要求

- Node.js 18+
- PostgreSQL 12+
- OpenAI API 密钥
- Stripe 账户和 API 密钥

## 安装步骤

1. 克隆仓库
```bash
git clone [repository-url]
cd chinese-name-assistant
```

2. 安装依赖
```bash
npm install
```

3. 环境配置
复制 `.env.example` 到 `.env` 并填写必要的环境变量：
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/chinese_name_db"

# OpenAI
OPENAI_API_KEY="your-openai-api-key"

# Stripe
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"
```

4. 数据库初始化
```bash
npx prisma db push
```

5. 启动开发服务器
```bash
npm run dev
```

6. 启动 Stripe webhook 监听（新终端）
```bash
stripe listen --forward-to localhost:3000/api/webhook
```

## 开发指南

### API 路由

- `/api/generate-name`: 生成中文名字
- `/api/create-checkout-session`: 创建支付会话
- `/api/webhook`: Stripe webhook 处理
- `/api/payment-result`: 获取支付结果

### 数据库模型

- `NamingRequest`: 用户的起名请求
- `NamingResult`: 生成的名字结果
- `Payment`: 支付记录

### 测试支付

使用 Stripe 测试卡号：
- 支付成功: 4242 4242 4242 4242
- 支付失败: 4000 0000 0000 0002

## 部署

1. 数据库部署
   - 推荐使用 Vercel Postgres 或 Railway

2. 应用部署
   - 推荐使用 Vercel
   - 确保设置所有环境变量
   - 配置 Stripe webhook 端点

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情 