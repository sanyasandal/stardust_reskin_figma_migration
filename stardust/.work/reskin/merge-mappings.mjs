import fs from 'node:fs';
const dir='stardust/reskin/mappings';
const slugs=fs.readFileSync('stardust/.work/inventory/siblings.txt','utf8').split(/\s+/).filter(Boolean);
const m=JSON.parse(fs.readFileSync('stardust/reskin/mapping.json','utf8'));
let md=fs.readFileSync('stardust/reskin/mapping.md','utf8');
const lines=md.split('\n');
// end of the first slot table (home brief)
const hdr=lines.findIndex(l=>l.startsWith('| Page | # |'));
let end=hdr+2; while(end<lines.length&&lines[end].startsWith('|')) end++;
const rows=[], briefs=[];
for(const s of slugs){
  const j=JSON.parse(fs.readFileSync(`${dir}/${s}.json`,'utf8'));
  if(JSON.stringify(j.chrome)!==JSON.stringify(m.chrome)) throw new Error('chrome differs '+s);
  if(!j.pages[s]) throw new Error('no page '+s);
  m.pages[s]=j.pages[s];
  const b=fs.readFileSync(`${dir}/${s}.md`,'utf8').split('\n');
  const t=b.filter(l=>l.startsWith(`| ${s} |`));
  if(!t.length) throw new Error('no rows '+s);
  rows.push(...t);
  briefs.push(b.filter(l=>!l.startsWith('|')||!/^\| (Page|---|[a-z0-9-]+ \|)/.test(l)).join('\n')
    .replace(/^# Mapping brief — (.+)$/m,'# Mapping brief — $1 (sibling; slot rows are in the multi-page table above)'));
}
lines.splice(end,0,...rows);
md=lines.join('\n').trimEnd()+'\n\n'+briefs.join('\n\n').trim()+'\n';
fs.writeFileSync('stardust/reskin/mapping.json',JSON.stringify(m,null,2)+'\n');
fs.writeFileSync('stardust/reskin/mapping.md',md);
console.log('pages',Object.keys(m.pages).length,'rows added',rows.length);
