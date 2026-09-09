import posts from '../lib/posts.json';
import { VisitCount } from './visits';
const subjects = [{name:'数学',path:'math',symbol:'01'}, {name:'物理',path:'physics',symbol:'02'}, {name:'计算机',path:'computing',symbol:'03'}, {name:'随笔',path:'essays',symbol:'04'}];
export default function Home() {
  return <>
    <header className="masthead">
      <div className="brand"><a href="/"><span className="brand-mark" aria-hidden="true">学</span><span className="brand-name">学习笔记<small>LEARNING JOURNAL</small></span></a></div>
      <nav aria-label="主导航"><a className="current" href="#notes">文章</a><a href="#subjects">学科</a><a href="#about">关于</a></nav>
    </header>
    <div className="category-bar"><span>探索学科</span>{subjects.map(s=><a key={s.path} href={'/subjects/'+s.path+'/'}>{s.name}<span aria-hidden="true">↗</span></a>)}</div>
    <div className="page-grid">
      <main id="notes">
        <div className="section-title"><div><span className="eyebrow">THE NOTEBOOK</span><h1>最近的记录<span className="article-count">{String(posts.length).padStart(2,'0')}</span></h1></div><span>思考 · 观察 · 实践</span></div>
        <div className="post-list">{posts.map(p=><article className="post" key={p.slug}>
          <div className="date"><b>{p.date.slice(8)}</b><span>{p.date.slice(0,7)}</span></div>
          <div className="post-content"><div className="meta"><a href={'/subjects/'+subjects.find(s=>s.name===p.category)?.path+'/'}>{p.category}</a><span className="meta-dot">·</span><span>{p.demo?'示例内容':'笔记'}</span></div>
            <h2><a href={'/notes/'+p.slug+'/'}>{p.title}</a></h2><p>{p.summary}</p>
            {p.slug==='math-demo'&&<div className="equation">A<b>v</b> = λ<b>v</b><small>变换中的不变方向</small></div>}
            <div className="post-bottom"><span>{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</span><a className="read-link" href={'/notes/'+p.slug+'/'}>阅读全文 <span aria-hidden="true">↗</span></a></div>
          </div>
        </article>)}</div><p className="endnote">写下所学，保留所问。</p>
      </main>
      <aside>
        <section className="about-card" id="about"><span className="eyebrow">A PLACE TO THINK</span><h2>保持好奇，<br/>认真记录。</h2><p>这里是我的个人学习空间。记录各学科的笔记、实验中的发现，以及一些还没有答案的问题。</p><div className="side-rule"/><span className="about-signature">学习笔记 / Learning Journal</span></section>
        <section id="subjects"><h2>按学科翻阅 <span>INDEX</span></h2>{subjects.map(s=><a className="subject" href={'/subjects/'+s.path+'/'} key={s.path}><span><i>{s.symbol}</i>{s.name}</span><span>{String(posts.filter(p=>p.category===s.name).length).padStart(2,'0')} <b aria-hidden="true">↗</b></span></a>)}</section>
        <section className="visit-card"><h2>来访记录 <span>VISITS</span></h2><VisitCount/><p className="small">每一次来访，都是一次交流的开始。</p></section>
      </aside>
    </div>
    <footer><span>学习笔记 © 2026</span><span>文字 · 公式 · 实验 · 观察</span></footer>
  </>;
}
