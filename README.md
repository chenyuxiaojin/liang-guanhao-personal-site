# 梁冠豪 · 个人使用说明书

基于梁冠豪提供的飞书个人介绍制作的响应式个人网站。内容包括四项能力、工作方式、合作小贴士，以及完整自我介绍视频。

## 本地运行

需要 Node.js 22.13 或更新版本。

```sh
gh repo clone chenyuxiaojin/liang-guanhao-personal-site
cd liang-guanhao-personal-site
npm ci
npm run dev -- --host 127.0.0.1 --port 5187
```

打开 http://127.0.0.1:5187/ 查看本地网站。

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

## 当前版本

当前设计采用米白纸感、钴蓝网格与超大黑字，结合黑底影像展示。四项能力支持点击切换，桌面与手机布局均已适配。

已发布网站：https://liang-guanhao-manual-1109.earnest-pace.chatgpt.site/

## GitHub 保存与恢复

私有仓库：https://github.com/chenyuxiaojin/liang-guanhao-personal-site

仓库保存完整网站源代码、所有实际使用的图片和视频、依赖版本锁定文件、构建脚本与 Git 版本历史。初版和网格改版均可从提交记录找回。

`node_modules/`、构建产物和本机缓存不加入 Git；克隆后通过 `npm ci` 和 `npm run build` 重新生成。环境密钥、登录状态和本机运行数据也不加入仓库。Sites 上的网站发布和 GitHub 源码保存是独立的操作。

当前工作目录的 GitHub 远程名为 `github`。后续修改后，在该目录执行以下命令保存新版本：

```sh
git status
git add app public README.md
git commit -m "Update personal website"
git push github main
```

如还修改了其他源码或配置文件，应一起加入提交。GitHub 只会保存已经提交并推送的内容。

恢复任意历史版本时，先查看 `git log --oneline`，再使用 `git switch -c restore-version <提交编号>` 创建恢复分支。
