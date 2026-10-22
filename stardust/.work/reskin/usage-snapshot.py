# Snapshot this session's recorded model usage (Copilot CLI session store) into stardust/reports/usage.json.
import sqlite3, json, os, datetime
SID = '28de25a6-4357-4098-8117-b2287f06f9ba'
db = sqlite3.connect(os.path.expanduser('~/.copilot/session-store.db'))
NAMES = {None: 'main', '00c3558e-d904-4f31-afa9-046ff005f521': 'reskin-deploy', '6f3a1b89-4061-4e1d-a34a-38aa81360451': 'reskin-archetypes',
         '5a6a084b-943d-4dfc-a0f8-269e8d8f5062': 'siblings-school-life-a', '5d58e471-15c8-41fe-b40c-5eebb30fe53d': 'siblings-learning-community',
         '830fc658-1a65-4cbe-9bb8-b1c7b4f8a8c3': 'siblings-school-life-b', '3681042d-20f2-4ec7-b872-82a29553365a': 'siblings-about-us',
         'd6ba2d6f-8525-4d17-87c4-b741c511e21d': 'eds-blocks-content'}
PHASES = [('Migration of 52 pages (setup → Figma capture → reskin → EDS + DA → gates → fidelity → block library)', '', '2026-10-21T15:03:18'),
          ('First report, commit and PR #1', '2026-10-21T15:03:18', '2026-10-21T15:45'),
          ('Fixes after review: header (M9), cards (M2), footer (M10), chrome gate + skill hardening', '2026-10-21T15:45', '2026-10-21T17:57'),
          ('First HTML report (re-measured fidelity, usage snapshot)', '2026-10-21T17:57', '2026-10-21T18:13'),
          ('Accordion rest-state fix + skill 0.39.0', '2026-10-21T18:13', '2026-10-21T18:45'),
          ('Fidelity uplift: breadcrumb, section-nav sidebar, Facebook feed, dark bands', '2026-10-21T18:45', '2026-10-21T19:13'),
          ('Follow-up questions; chrome carried into the stardust targets; fidelity re-measured; this report', '2026-10-21T19:13', '9999')]
COLS = 'COUNT(*), SUM(input_tokens), SUM(cache_read_tokens), SUM(cache_write_tokens), SUM(output_tokens), SUM(reasoning_tokens), SUM(total_nano_aiu)/1e9, SUM(duration_ms)/60000.0, MIN(created_at), MAX(created_at)'
K = ['calls', 'input', 'cacheRead', 'cacheWrite', 'output', 'reasoning', 'aiu', 'modelMinutes', 'first', 'last']
q = lambda where, args=(): dict(zip(K, db.execute(f'SELECT {COLS} FROM assistant_usage_events WHERE session_id=? {where}', (SID, *args)).fetchone()))
total = q('')
agents = []
for (a,) in db.execute('SELECT DISTINCT agent_id FROM assistant_usage_events WHERE session_id=? ORDER BY MIN(created_at) OVER (PARTITION BY agent_id)', (SID,)).fetchall():
    r = q('AND agent_id IS ?', (a,)); r['agent'] = NAMES.get(a, a); r['id'] = a; agents.append(r)
agents = sorted({x['agent']: x for x in agents}.values(), key=lambda x: x['first'])
phases = []
for name, lo, hi in PHASES:
    r = q('AND created_at >= ? AND created_at < ?', (lo, hi)); r['phase'] = name; phases.append(r)
# Active wall-clock: merge call windows separated by < 5 min.
ts = [datetime.datetime.fromisoformat(t.replace('Z', '+00:00')) for (t,) in db.execute('SELECT created_at FROM assistant_usage_events WHERE session_id=? ORDER BY created_at', (SID,))]
active, s, p = 0, ts[0], ts[0]
for t in ts[1:]:
    if (t - p).total_seconds() > 300: active += (p - s).total_seconds(); s = t
    p = t
active += (p - s).total_seconds()
models = [m for (m,) in db.execute('SELECT DISTINCT model FROM assistant_usage_events WHERE session_id=?', (SID,))]
out = {'sessionId': SID, 'source': '~/.copilot/session-store.db → assistant_usage_events', 'snapshotAt': datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ'),
       'models': models, 'total': total, 'agents': agents, 'phases': phases, 'activeMinutes': round(active / 60, 1),
       'sessionStart': '2026-10-21T10:44:05Z', 'blocked': {'from': '10:54', 'to': '12:12', 'minutes': 78, 'why': 'Node execution refused and DA login pending, until the user granted access and logged in'}}
json.dump(out, open('stardust/reports/usage.json', 'w'), indent=1)
print(json.dumps({k: out[k] for k in ('total', 'activeMinutes', 'snapshotAt')}))
