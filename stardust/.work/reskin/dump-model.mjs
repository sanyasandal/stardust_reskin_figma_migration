import { readFileSync } from 'node:fs';
const m = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const max = Number(process.argv[3] || 70);
const walk = (ns, d) => ns.forEach((n) => { console.log(`${'  '.repeat(d)}${n.kind}${n.level ? ':' + n.level : ''}${n.href ? ' [' + n.href.slice(0, 50) + ']' : ''}${n.parentTag ? ' <' + n.parentTag + '.' + (n.parentClass || '').slice(0, 30) + '>' : ''} sep=${JSON.stringify(n.sep)} ${JSON.stringify((n.text || n.src || n.currentSrc || '').slice(0, max))}`); if (n.children) walk(n.children, d + 1); });
for (const s of m.sections) { console.log(`=== ${s.slot} ${s.rootClass} verified=${s.orderedVerified}`); walk(s.ordered || [], 1); }
console.log('meta', JSON.stringify(m.metadata).slice(0, 600));
