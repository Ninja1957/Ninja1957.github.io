export const dynamic = 'force-static';
import Article from '../../article';
import posts from '../../../lib/posts.json';
export const metadata={title:"熵以及一维高斯分布的熵",description:"一般含义是指：结果越难预测，熵越大；结果越确定，熵越小。"};
export default function Page(){return <Article post={posts.find(p=>p.slug==="entropy")!}/>;}
