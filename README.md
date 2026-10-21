# 夏小夏的博客

基于 [AstroPaper](https://github.com/satnaing/astro-paper) (Astro v6 + Tailwind CSS v4) 构建的极简个人技术博客。

线上地址：[xiaxia.website](https://xiaxia.website/)

## 项目结构

```text
├── src/
│   ├── content/
│   │   ├── posts/         # 博客文章（Markdown / MDX）
│   │   └── pages/         # 独立页面（如 about.md）
│   ├── assets/            # 图标与文章插图资源
│   ├── components/        # Astro UI 组件
│   ├── layouts/           # 页面布局模板
│   ├── i18n/              # 多语言文案配置（zh / en）
│   ├── pages/             # 路由页面
│   └── styles/            # 主题配色（theme.css）与排版样式
├── public/                # 静态资源（头像、favicon 等）
├── astro-paper.config.ts  # 博客全局配置文件
├── astro.config.ts        # Astro 构建配置
└── wrangler.toml          # Cloudflare Pages / Workers 部署配置
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动本地开发预览服务器（默认 http://localhost:4321）
npm run dev

# 构建生产静态文件（含 Pagefind 全文搜索索引）
npm run build
```

## 新增文章

在 `src/content/posts/` 目录下新建 `.md` 文件，头部 Frontmatter 格式如下：

```yaml
---
title: 文章标题
pubDatetime: 2026-10-21T08:00:00Z
description: 文章一句话简介
featured: false
tags:
  - Linux
  - 运维
---
```

## 部署

推送到 GitHub 后，Cloudflare Pages / Workers 会自动执行 `npm run build` 并发布 `dist` 目录。
