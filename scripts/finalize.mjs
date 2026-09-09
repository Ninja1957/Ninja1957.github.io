import fs from 'node:fs';
import path from 'node:path';
function walk(dir){for(const d of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,d.name);if(d.isDirectory())walk(f);else if(d.name.endsWith('.html')&&!['index.html','404.html'].includes(d.name)){const folder=f.slice(0,-5);fs.mkdirSync(folder,{recursive:true});fs.renameSync(f,path.join(folder,'index.html'));}}}
walk('dist/client');
const posts=JSON.parse(fs.readFileSync('lib/posts.json','utf8'));
for(const p of posts){const f='dist/client/notes/'+p.slug+'/index.html';if(!fs.existsSync(f))throw Error('Missing exported article '+p.slug);}
fs.writeFileSync('dist/client/.nojekyll','');
console.log('Verified exported article pages.');
