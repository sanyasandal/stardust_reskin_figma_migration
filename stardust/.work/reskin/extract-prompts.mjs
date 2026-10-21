// Extract the exact user / sub-agent prompts of this Copilot session into a markdown artifact.
// Usage: node extract-prompts.mjs <events.jsonl> <out.md>
import { readFileSync, writeFileSync } from 'node:fs';

const [src, out] = process.argv.slice(2);
const redact = (s) => String(s)
  .replace(/figd(\\?_)[A-Za-z0-9_\\-]+/g, 'figd_[REDACTED]')
  .replace(/eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g, '[REDACTED_JWT]');
const rows = [];
for (const line of readFileSync(src, 'utf8').split('\n')) {
  if (!line) continue;
  let e; try { e = JSON.parse(line); } catch { continue; }
  if (e.type === 'user.message') {
    const c = e.data?.content ?? e.data?.text ?? '';
    rows.push({ ts: e.timestamp, kind: /^You are executing Phase 5/.test(c) || e.data?.agentId ? 'sub-agent kickoff' : 'user', text: c });
  } else if (e.type === 'tool.execution_start' && e.data?.toolName === 'task') {
    const a = e.data.arguments || {};
    rows.push({ ts: e.timestamp, kind: `sub-agent prompt (task: ${a.name || '?'}, ${a.agent_type || '?'}${a.mode ? `, ${a.mode}` : ''})`, text: a.prompt || '' });
  } else if (e.type === 'subagent.started') {
    rows.push({ ts: e.timestamp, kind: 'sub-agent started', text: JSON.stringify({ name: e.data?.name ?? e.data?.agentName, type: e.data?.agentType ?? e.data?.agent_type }) });
  }
}
// Sub-agent kickoff copies arrive as user.message — mark them instead of repeating the text.
const taskIdx = rows.map((r, i) => (r.kind.startsWith('sub-agent prompt') ? i : -1)).filter((i) => i >= 0);
rows.forEach((r) => {
  if (r.kind === 'sub-agent prompt' || r.kind.startsWith('sub-agent prompt')) return;
  if (r.kind !== 'user' && r.kind !== 'sub-agent kickoff') return;
  const t = r.text.trim();
  const hit = t.length > 200 && taskIdx.find((i) => { const q = rows[i].text.trim(); return t.includes(q.slice(0, 300)) || q.includes(t.slice(0, 300)); });
  if (hit !== undefined && hit !== false) { r.kind = 'sub-agent kickoff (delivered copy)'; r.text = `(same text as entry ${hit + 1} — the task prompt as delivered to the sub-agent)`; }
});
let md = '# Prompts used — exact, in order\n\n';
md += 'Source: the session event log (`events.jsonl`, `user.message` events). Secrets are redacted (`figd_[REDACTED]`).\n';
md += 'The system prompt and tool definitions are **withheld**: they are confidential to the agent runtime and cannot be reproduced.\n';
md += 'Empty user messages are UI actions (e.g. mode toggles) that carried no text.\n\n';
rows.forEach((r, i) => {
  md += `## ${i + 1}. ${r.kind} — ${r.ts}\n\n`;
  md += r.text.trim() ? '```text\n' + redact(r.text).replace(/```/g, "'''") + '\n```\n\n' : '_(empty message)_\n\n';
});
writeFileSync(out, md);
console.log(`prompts: ${rows.length} entries → ${out}`);
