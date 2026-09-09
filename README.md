# 学习笔记

以文章阅读为中心的个人学科博客，支持 Markdown、LaTeX 数学公式、图片与视频链接。网站名称可以修改。

## 发布一篇笔记

在 GitHub 仓库的 **content** 文件夹选择 **Add file → Create new file**，用英文小写与连字符命名，例如 `probability-notes.md`，复制以下内容后提交到 main：

```markdown
---
title: 我的第一篇概率笔记
category: 数学
date: 2026-09-09
tags: 概率, 学习笔记
summary: 一句话介绍本篇内容。
---
## 从一个问题开始

在这里写正文，行内公式写成 $E=mc^2$。

$$
P(A|B)=\frac{P(A\cap B)}{P(B)}
$$

![实验装置](/images/setup.jpg)

[观看实验视频](https://www.bilibili.com/)
```

支持的分类：数学、物理、计算机、随笔。新增分类时需同步首页与分类页面。元信息每行使用“字段: 值”，不要添加引号；正文遵循常规 Markdown。在元信息加入 `draft: true` 可以暂不生成网页，但公共仓库内的草稿源码仍然公开。私密笔记不要提交到这个仓库。

## 图片、视频与公式

- 图片上传到 `public/images/`，文章中路径写作 `/images/文件名.jpg`。
- 视频上传到视频平台，在文章中放链接即可。
- 公式使用单美元符号或独占行的双美元符号，KaTeX 与字体随网站一起发布。
- 正文支持列表、表格、引用、代码块与 HTML。只提交自己信任的内容。

## 编辑网站

首页与名字：`app/page.tsx`；页面信息：`app/layout.tsx`；样式：`app/globals.css`。文章页布局：`app/article.tsx`。

## 自动发布

仓库 Settings → Pages → Source 选择 GitHub Actions。每次提交到 main 自动生成网页并发布。可在 Actions 查看进度。

本地：`npm ci` 后运行 `npm run dev`；修改 Markdown 后重新启动预览。生成静态站点：`npm run build`，输出在 `dist/client/`。

初始内容包含开篇示例和两篇排版示例，均可修改或删除。项目不包含原有笔记仓库的内容。

## 访问统计

首页显示不蒜子的全站累计访问量（PV，浏览次数而非独立人数）。在正式域名 ninja1957.github.io 的各页面加载统计脚本；本地预览不计数。统计从接入后开始，无法追溯接入前的访问。第三方服务可能受网络或拦截插件影响，12 秒后仍无结果会显示“暂时无法加载”，不会用虚构数字替代。
