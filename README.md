# 夏小夏的博客

基于 [Hugo Theme Stack](https://github.com/CaiJimmy/hugo-theme-stack) 主题的个人博客。

线上地址：[xiaxia.website](https://xiaxia.website/)

## 项目结构

```
├── site/          # 博客站点（内容、配置、静态资源）
├── layouts/       # 主题模板
├── assets/        # 主题样式和脚本
├── i18n/          # 多语言文件
├── .ci/           # Cloudflare Pages 构建脚本
└── wrangler.toml  # Cloudflare 配置
```

## 本地开发

```bash
cd site
hugo server --gc
```

## 部署

推送到 GitHub 后，Cloudflare Pages 会自动构建部署。

## 致谢

Theme Stack designed by [Jimmy](https://github.com/CaiJimmy/hugo-theme-stack)，基于 GNU General Public License v3.0 协议。
