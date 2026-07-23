# 微恩熵算科技官网

基于 Nuxt 3、Nuxt UI、Tailwind CSS 和 Nuxt Content 构建的企业官网前端项目。

## 环境要求

- Node.js 22 或更高版本
- pnpm 10.33.0

## 本地开发

```bash
pnpm install
pnpm dev
```

默认访问地址：`http://127.0.0.1:3000`。

## 常用命令

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
pnpm preview
```

## 环境变量

复制 `.env.example` 为 `.env`，并配置：

```dotenv
NUXT_PUBLIC_SITE_URL=https://www.example.com
```

生产环境必须替换为官网正式域名，用于 canonical、sitemap 和结构化数据。

## 开发约束

开始开发前必须阅读：

- `AGENTS.md`
- `前端开发规范.md`

页面设计图与素材位于项目上一级的对应中文目录中。
