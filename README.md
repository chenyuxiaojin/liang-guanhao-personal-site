# 梁冠豪 · 个人使用说明书

基于梁冠豪提供的飞书个人介绍制作的响应式个人网站。内容包括四项能力、工作方式、合作小贴士，以及完整自我介绍视频。

## 本地运行

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5187
```

## 构建

```sh
npm run build
```

- `app/page.tsx`：正文、导航、视频弹窗、折叠说明与合作沟通提纲。
- `app/globals.css`：桌面与移动端样式，支持减少动画偏好。
- `app/layout.tsx`：页面标题、描述与社交分享元数据。
- `public/portrait.jpg`：由原视频提取的封面。
- `public/introduction.mp4`：原视频转码为 H.264 / AAC，按需加载。
- `.openai/hosting.json`：Sites 项目标识。

## 内容来源与边界

资料来源： https://my.feishu.cn/wiki/Bkd8wGNNYivjbBkVkLMcADm86Td

2026-11-09 读取正文（revision 53）、内嵌「已知问题」表格（revision 6）与用户自我介绍视频。文案根据原文整理；未添加无来源的履历、案例、客户或数字成绩。

原文没有微信、邮箱或社交主页，因此交流入口目前链接到个人说明书，另有可复制的合作沟通提纲。没有表单提交、邮件发送或数据收集功能。

当前项目使用独立目录，避免与同工作区另一个 `personal-site` 页面的并行修改相互覆盖。
