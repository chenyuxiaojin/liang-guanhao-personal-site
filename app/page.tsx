"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowRight, Play, X, Menu, Lightbulb, Theater, Workflow, Sparkles, Plus, Check, Copy } from "lucide-react";
const sourceUrl="https://my.feishu.cn/wiki/Bkd8wGNNYivjbBkVkLMcADm86Td";
const skills=[
 {n:"01",title:"创意策划",en:"CREATIVE PLANNING",Icon:Lightbulb,text:"节目创意、活动构思、视频内容。从一个闪念开始，一起推敲成可以实施的方案。",tags:["节目创意","活动构思","视频内容"]},
 {n:"02",title:"舞台与活动执行",en:"LIVE EXPERIENCES",Icon:Theater,text:"关注舞台呈现，也关心现场的每一个环节。让节目结构、活动流程与现场组织相互配合。",tags:["舞台呈现","节目结构","现场组织"]},
 {n:"03",title:"梳理复杂问题",en:"MAKE IT CLEAR",Icon:Workflow,text:"把纷繁的信息摆出来，找到真正的目标。再把大问题拆小，一步一步找到可行的解法。",tags:["信息梳理","目标拆解","问题解决"]},
 {n:"04",title:"一起研究新问题",en:"EXPLORE TOGETHER",Icon:Sparkles,text:"不保证什么都会。但遇到值得研究的实际问题，我愿意一起找方法、做尝试。",tags:["保持好奇","共同探索","动手尝试"]}
];
const steps=[
 ["接收任务","先问清楚，再出发。","要做什么，为什么做，以及希望达到什么效果。"],
 ["构思思考","给想法一点酝酿时间。","构思、查资料、寻找参考，把方向慢慢想清楚。"],
 ["分步执行","边做，边调整。","分阶段推进，做一部分、调整一下，再继续完善。"],
 ["看见成果","让想法真正落地。","比起停留在讨论里，我更希望最后能看到实际成果。"]
];
const notes=[
 ["消息回复可能不及时","如果是急事，请直接说明。清楚的优先级能帮我更好地安排回应。"],
 ["思考时间有时会长一点","给我一点整理思路的时间。构思需要酝酿，我也在练习更有效率地做决定。"],
 ["偶尔会陷入细节","欢迎提醒我关注重点，让我们一起把注意力拉回真正的目标。"],
 ["不一定主动开启话题","有事直接找我就好。不需要刻意找话题，也不用担心打扰。"],
 ["有时会拖延","请提前说明时间要求，尽量给出明确的截止时间，方便我规划进度。"]
];
export default function Home(){
 const [menuOpen,setMenuOpen]=useState(false);
 const [openNote,setOpenNote]=useState<number|null>(0);
 const [copied,setCopied]=useState(false);
 const [copyError,setCopyError]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);
 const video=useRef<HTMLVideoElement>(null);
 useEffect(()=>{const el=dialog.current;const close=()=>{video.current?.pause();document.body.style.overflow="";};el?.addEventListener("close",close);return()=>{el?.removeEventListener("close",close);document.body.style.overflow="";};},[]);
 function playVideo(){dialog.current?.showModal();document.body.style.overflow="hidden";video.current?.play().catch(()=>{});}
 async function copyOutline(){try{await navigator.clipboard.writeText("冠豪你好，我想和你聊一个合作想法：\n\n1. 想做什么：\n2. 为什么做 / 希望达到的效果：\n3. 时间要求 / 截止日期：\n4. 现有资料与需要一起解决的问题：");setCopied(true);setCopyError(false);setTimeout(()=>setCopied(false),3000);}catch{setCopyError(true);}}
 return <>
 <a className="skip-link" href="#main">跳到正文</a>
 <header className="header"><a className="brand" href="#" aria-label="梁冠豪，回到首页"><span className="brand-icon">L<span>G.</span></span><span>梁冠豪<span className="brand-sub">LIANG GUANHAO</span></span></a><nav className={menuOpen?"nav open":"nav"} aria-label="主导航"><a href="#about" onClick={()=>setMenuOpen(false)}>关于我</a><a href="#capabilities" onClick={()=>setMenuOpen(false)}>我能做什么</a><a href="#working" onClick={()=>setMenuOpen(false)}>合作方式</a><a className="nav-contact" href="#connect" onClick={()=>setMenuOpen(false)}>一起聊聊<ArrowUpRight size={17}/></a></nav><button className="menu-toggle" aria-label={menuOpen?"关闭导航":"打开导航"} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button></header>
 <main id="main">
 <section id="about" className="hero wrap"><div className="hero-copy"><div className="eyebrow"><span className="small-star">✳</span>你好，我是梁冠豪<span className="hello">HELLO, I'M GUANHAO</span></div><h1>让想法发生，<br/>让现场<span className="highlight">有光<svg viewBox="0 0 220 20" aria-hidden="true"><path d="M4 13 Q96 0 215 8 M25 19 Q130 8 200 13"/></svg></span>。</h1><p className="hero-description">一个喜欢把创意变成现实的人。<br/>从节目构思到舞台现场，从复杂问题到具体行动，<br className="desktop-break"/>我期待和有意思的人，一起做成有意思的事。</p><div className="hero-actions"><a className="button dark" href="#capabilities">认识一下我的「功能」<ArrowUpRight size={19}/></a><button className="text-button" onClick={playVideo}><span className="tiny-play"><Play size={11} fill="currentColor"/></span>听我自我介绍</button></div><div className="status"><span className="status-dot"/>正常运行，持续更新中<span className="status-divider"/>个人版本 v31.0</div></div><div className="hero-visual"><div className="portrait-frame"><img className="portrait" src="/portrait.jpg" alt="梁冠豪的自我介绍视频画面" fetchPriority="high"/><div className="portrait-shade"/><div className="frame-top"><span>PERSONAL MANUAL</span><span>VOL. 31</span></div><div className="portrait-caption"><span>想法很多，<br/>更想把它们做出来。</span><button className="play-button" aria-label="播放梁冠豪的自我介绍视频" onClick={playVideo}><Play size={26} fill="currentColor"/></button></div><div className="portrait-bottom">梁冠豪<span>CREATIVE MIND. HANDS-ON SPIRIT.</span></div></div><div className="floating-note"><span className="note-star">✳</span><span>保持好奇<br/><b>认真发生</b></span></div><span className="photo-footnote">使用前请阅读，熟悉之后可自由发挥。</span></div><a className="scroll-hint" href="#capabilities"><ArrowDown size={14}/>往下翻，了解更多<span>SCROLL TO EXPLORE</span></a></section>
 <div className="ticker" aria-label="创意策划 · 舞台现场 · 共同探索"><div><span>CREATIVE PLANNING</span><b>✳</b><span>LIVE EXPERIENCES</span><b>✳</b><span>MAKE IDEAS HAPPEN</span><b>✳</b><span>EXPLORE TOGETHER</span><b>✳</b></div></div>
 <section id="capabilities" className="capabilities wrap section-pad"><div className="section-heading"><div><div className="eyebrow section-label">01 / WHAT I DO</div><h2>我的功能配置<span className="yellow-dot">.</span></h2></div><p>你可以在这些事情上想到我。<br/>从一个想法开始，到一个真实的结果。</p></div><div className="skill-grid">{skills.map(({n,title,en,Icon,text,tags})=><article className="skill" key={n}><div className="skill-top"><Icon size={34} strokeWidth={1.4}/><span>{n}</span></div><h3>{title}</h3><div className="skill-en">{en}</div><p>{text}</p><div className="tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></section>
 <section id="working" className="working section-pad"><div className="wrap"><div className="section-heading"><div><div className="eyebrow section-label">02 / HOW I WORK</div><h2>好想法，需要一步步发生。</h2></div><span className="work-stamp">THINK.<br/>MAKE.<br/><i>REFINE.</i></span></div><div className="steps">{steps.map(([title,lead,text],i)=><article className="step" key={title}><div className="step-num"><span>0{i+1}</span>{i<3?<ArrowRight size={21}/>:<Check size={22}/>}</div><h3>{title}</h3><h4>{lead}</h4><p>{text}</p></article>)}</div><div className="working-note"><span>↳</span>有时候思考得太久，也会影响效率。<span>这项功能，仍在优化中。</span></div></div></section>
 <section className="collaboration wrap section-pad"><div className="collab-intro"><div className="eyebrow section-label">03 / BETTER TOGETHER</div><h2>合作不用客套，<br/>真诚就很好。</h2><p>有想法可以直接提，不同意见可以直接说。<br/>把目标和问题说清楚，我们就可以开始讨论。</p><div className="quote-mark">“</div><blockquote>一个人想不明白的事情，<br/>换几种思路，也许就有答案了。</blockquote><div className="signature">梁冠豪<span> / 一起探索的搭档</span></div></div><div className="manual-notes"><div className="notes-header"><span className="notes-tag">使用小贴士</span><span>KNOWN BUGS & FRIENDLY TIPS</span></div>{notes.map(([title,text],i)=><div className={openNote===i?"note-row expanded":"note-row"} key={title}><button onClick={()=>setOpenNote(openNote===i?null:i)} aria-expanded={openNote===i} aria-controls={`note-${i}`}><span className="note-index">0{i+1}</span><span>{title}</span><Plus size={18}/></button><div id={`note-${i}`} hidden={openNote!==i}><p>{text}</p></div></div>)}<p className="notes-footer"><span/>暂未完全修复，正在持续优化。</p></div></section>
 <section id="connect" className="connect"><div className="wrap connect-inner"><div className="eyebrow section-label">04 / LET'S MAKE SOMETHING</div><span className="connect-star" aria-hidden="true">✳</span><h2>下一件有意思的事，<br/>我们一起。</h2><p>学习上的问题、项目想法，或是单纯想交流一下。<br/>不需要刻意找话题，也不用担心打扰。</p><div className="connect-actions"><a className="button dark" href={sourceUrl} target="_blank" rel="noreferrer">打开我的个人说明书<ArrowUpRight size={20}/></a><button className="text-button outline-copy" onClick={copyOutline}>{copied?<Check size={17}/>:<Copy size={17}/>} {copied?"合作提纲已复制":"复制一份合作沟通提纲"}</button></div><div role="status" className="copy-status">{copied?"把你的想法填进提纲，方便我们开始交流。":copyError?"浏览器未能复制。可以按「做什么、预期效果、截止时间、现有资料」整理你的想法。":""}</div></div></section>
 </main>
 <footer className="footer wrap"><a className="footer-name" href="#">梁冠豪<span>LIANG GUANHAO</span></a><p>说明书仅供参考，实际体验以本人为准。</p><a className="back-top" href="#">回到顶部<ArrowUpRight size={16}/></a></footer>
 <dialog ref={dialog} className="video-dialog" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}} aria-labelledby="video-title"><div className="video-panel"><div className="video-heading"><h2 id="video-title">你好，我是梁冠豪。</h2><button aria-label="关闭视频" onClick={()=>dialog.current?.close()}><X size={24}/></button></div><video ref={video} src="/introduction.mp4" poster="/portrait.jpg" controls playsInline preload="none">你的浏览器暂不支持视频播放。<a href="/introduction.mp4">下载自我介绍视频</a></video><p>自我介绍 · 让我们从认识彼此开始</p></div></dialog>
 </>;
}
