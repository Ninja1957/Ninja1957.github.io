export const dynamic = 'force-static';
import Article from '../../article';
import posts from '../../../lib/posts.json';
export const metadata={title:"实验记录：观察、测量与误差",description:"为每次实验留下可追溯的记录：实验条件、原始数据、图片、视频与尚未解决的问题。"};
export default function Page(){return <Article post={posts.find(p=>p.slug==="experiment-demo")!}/>;}
