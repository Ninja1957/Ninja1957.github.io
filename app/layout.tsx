export const dynamic = 'force-static';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {icons:{icon:'/favicon.svg'},title: {default:'求知手记 · 个人学习与实验记录',template:'%s · 求知手记'},description:'各学科学习笔记、数学推导、实验图片与视频记录。'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
