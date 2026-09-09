"use client";
import { useEffect, useState } from 'react';

// The provider keys the counter by the public site's domain. Local previews do not count.
export function VisitTracker() {
  useEffect(() => {
    if (window.location.hostname !== 'ninja1957.github.io') return;
    if (document.getElementById('visit-counter-script')) return;
    const script = document.createElement('script');
    script.id = 'visit-counter-script';
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return null;
}

export function VisitCount() {
  const [status, setStatus] = useState('加载中…');
  useEffect(() => {
    const value = document.getElementById('busuanzi_value_site_pv');
    if (!value) return;
    if (window.location.hostname !== 'ninja1957.github.io') { setStatus('上线后显示'); return; }
    const update = () => { if (/^\d+$/.test(value.textContent?.trim() || '')) setStatus(''); };
    const observer = new MutationObserver(update);
    observer.observe(value, {childList:true,subtree:true,characterData:true});
    update();
    const timeout = window.setTimeout(() => {
      if (!/^\d+$/.test(value.textContent?.trim() || '')) setStatus('暂时无法加载');
    }, 12000);
    return () => { observer.disconnect(); window.clearTimeout(timeout); };
  }, []);
  return <div className="visit-count" aria-live="polite"><span className="visit-label">全站累计访问量</span><div className="visit-number"><b id="busuanzi_value_site_pv"/><span className="visit-status">{status}</span>{!status&&<span className="visit-unit">次</span>}</div><noscript>请启用 JavaScript 查看访问统计。</noscript><a className="counter-credit" href="https://busuanzi.ibruce.info/" target="_blank" rel="noreferrer">不蒜子统计 ↗</a></div>;
}
