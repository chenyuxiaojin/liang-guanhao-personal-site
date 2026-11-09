import type { Metadata } from "next";
import "./globals.css";
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const metadata: Metadata={
 metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://liang-guanhao-manual-1109.earnest-pace.chatgpt.site"),
 title:"梁冠豪｜让想法发生，让现场有光",
 description:"你好，我是梁冠豪。创意策划、舞台与活动执行、复杂问题梳理。期待和有意思的人，一起把想法变成现实。个人使用说明书 v31.0。",
 openGraph:{title:"梁冠豪｜让想法发生，让现场有光",description:"一个喜欢把创意变成现实的人。认识我的功能配置与合作方式，一起做成有意思的事。",locale:"zh_CN",type:"website",images:[{url:`${assetBase}/portrait.jpg`}]},
 icons:{icon:`${assetBase}/favicon.svg`}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>;}
