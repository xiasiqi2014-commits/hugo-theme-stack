import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    tags: "标签",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享这篇文章：",
    sharePostOn: "分享到 {{platform}}",
    sharePostViaEmail: "通过邮件分享",
    tagLabel: "标签",
    backToTop: "回到顶部",
    goBack: "返回",
    editPage: "编辑此页",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "第",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选文章",
    recentPosts: "最新文章",
    allPosts: "查看全部文章",
  },
  footer: {
    copyright: "版权所有",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "标签：",
    tagDesc: "包含该标签的所有文章",

    tagsTitle: "标签",
    tagsDesc: "所有文章使用的标签汇总。",

    postsTitle: "文章",
    postsDesc: "我发布的所有技术文章与随笔。",

    archivesTitle: "归档",
    archivesDesc: "按时间线归档的所有文章。",

    searchTitle: "搜索",
    searchDesc: "搜索任意文章标题或正文内容...",
  },
  a11y: {
    skipToContent: "跳转到正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换亮色/暗色主题",
    searchPlaceholder: "输入关键词搜索文章...",
    noResults: "未找到匹配的结果",
    goToPreviousPage: "前往上一页",
    goToNextPage: "前往下一页",
  },
  notFound: {
    title: "404 页面未找到",
    message: "抱歉，你访问的页面不存在",
    goHome: "返回首页",
  },
} satisfies UIStrings;
