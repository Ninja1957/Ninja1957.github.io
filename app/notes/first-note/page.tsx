export const dynamic = 'force-static';
import Article from '../../article';
import posts from '../../../lib/posts.json';
export const metadata={title:"从一个问题开始，慢慢建立自己的知识地图",description:"这里将收集各学科的学习笔记、推导过程与实验记录。保留问题，也保留走向答案的过程。"};
export default function Page(){return <Article post={posts.find(p=>p.slug==="first-note")!}/>;}
