import fs from 'node:fs';
import path from 'node:path';
import {marked} from 'marked';
import katex from 'katex';
const root=process.cwd();
marked.use({extensions:[{name:'blockMath',level:'block',start:src=>src.indexOf('$$'),tokenizer(src){const m=/^\$\$\s*\n([\s\S]+?)\n\$\$(?:\n|$)/.exec(src);if(m)return {type:'blockMath',raw:m[0],text:m[1]}},renderer(t){return katex.renderToString(t.text,{displayMode:true,throwOnError:true})}},{name:'inlineMath',level:'inline',start:src=>src.indexOf('$'),tokenizer(src){const m=/^\$([^$\n]+?)\$/.exec(src);if(m)return {type:'inlineMath',raw:m[0],text:m[1]}},renderer(t){return katex.renderToString(t.text,{throwOnError:true})}}]});
const posts=[];
for(const file of fs.readdirSync('content').filter(f=>f.endsWith('.md'))){
 const raw=fs.readFileSync('content/'+file,'utf8');const match=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw);if(!match)throw Error('Missing metadata: '+file);
 const meta=Object.fromEntries(match[1].split('\n').map(line=>{const i=line.indexOf(':');if(i<0)throw Error('Invalid metadata');return [line.slice(0,i),line.slice(i+1).trim()]}));
 if(meta.draft==='true')continue;
 for(const k of ['title','date','category'])if(!meta[k])throw Error(file+' needs '+k);
 meta.summary ||= match[2].split('\n').map(l=>l.trim()).find(l=>l && !/^[#>!$`]/.test(l))?.slice(0,140) || meta.title;
 const slug=file.slice(0,-3).toLowerCase();if(!/^[a-z0-9-]+$/.test(slug))throw Error('Use English letters, numbers and hyphens in filenames');
 if(posts.some(p=>p.slug===slug))throw Error('Duplicate article filename (case insensitive): '+file);
 const toc=[];let n=0;
 const renderer={heading({tokens,depth}){const text=this.parser.parseInline(tokens);const id='section-'+(++n);if(depth===2)toc.push({id,text:text.replace(/<[^>]*>/g,'')});return '<h'+depth+' id="'+id+'">'+text+'</h'+depth+'>';}};
 const html=marked.parse(match[2],{renderer:new marked.Renderer()});
 const rendered=marked.parse(match[2],{renderer:Object.assign(new marked.Renderer(),renderer)});
 const post={...meta,slug,tags:(meta.tags||'').split(',').map(t=>t.trim()),demo:meta.demo==='true',html:rendered,toc};posts.push(post);
}
posts.sort((a,b)=>b.date.localeCompare(a.date)||a.slug.localeCompare(b.slug));
fs.mkdirSync('lib',{recursive:true});fs.writeFileSync('lib/posts.json',JSON.stringify(posts,null,2));
fs.mkdirSync('app/notes',{recursive:true});
for(const d of fs.readdirSync('app/notes',{withFileTypes:true}))if(d.isDirectory()&&fs.existsSync('app/notes/'+d.name+'/.generated'))fs.rmSync('app/notes/'+d.name,{recursive:true});
for(const post of posts){const dir='app/notes/'+post.slug;fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(dir+'/.generated','');fs.writeFileSync(dir+'/page.tsx',"export const dynamic = 'force-static';\nimport Article from '../../article';\nimport posts from '../../../lib/posts.json';\nexport const metadata={title:"+JSON.stringify(post.title)+",description:"+JSON.stringify(post.summary)+"};\nexport default function Page(){return <Article post={posts.find(p=>p.slug==="+JSON.stringify(post.slug)+")!}/>;}\n");}
console.log('Generated '+posts.length+' Markdown articles.');
