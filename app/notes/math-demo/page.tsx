export const dynamic = 'force-static';
import Article from '../../article';
import posts from '../../../lib/posts.json';
export const metadata={title:"线性代数笔记：从向量到线性变换",description:"把矩阵看作一种变换：从二维空间的伸缩与旋转出发，重新理解特征向量与特征值。"};
export default function Page(){return <Article post={posts.find(p=>p.slug==="math-demo")!}/>;}
