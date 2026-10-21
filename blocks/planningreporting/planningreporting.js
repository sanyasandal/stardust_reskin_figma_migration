/**
 * Planning and reporting (no Figma module; composed from donor tokens) — source block
 * `planningreporting`: the NSW school plan / annual report listing. The list is dynamic
 * third-party data (the department's school-plan-report API, `schoolPlanReportApi` in the
 * da-global config); the authored rows only configure it.
 * Authoring: key | value rows — `reporttype | report` (annual reports) or `plan` (school
 * plans), `schoolcode | 8504`, optional `recentreports | <n>`.
 * Decode: ul.planningreporting-list > li > a (year, name, type, size) from the API; on
 * failure a link to the department's school plans and reports page.
 * @ew-exempt <p> key | value config rows — metadata (hidden config); the list is API data
 */
const API = 'https://teu7j4uno5.execute-api.ap-southeast-2.amazonaws.com/v1/school-plan-report';
const TYPES = { report: 'annual-report', plan: 'plan-report' };
const FALLBACK = 'https://education.nsw.gov.au/about-us/strategies-and-reports/school-excellence-and-accountability';

function readConfig(block) {
  const config = {};
  [...block.children].forEach((row) => {
    const [key, value] = [...row.children].map((cell) => cell.textContent.trim());
    if (key) config[key.toLowerCase()] = value || '';
  });
  return config;
}

function item(href, text) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = href;
  a.textContent = text;
  li.append(a);
  return li;
}

export default async function decorate(block) {
  const config = readConfig(block);
  const configRows = document.createElement('div');
  configRows.className = 'planningreporting-config';
  configRows.hidden = true;
  configRows.append(...block.children);

  const list = document.createElement('ul');
  list.className = 'planningreporting-list';
  block.replaceChildren(configRows, list);

  const type = TYPES[config.reporttype] || config.reporttype;
  const params = new URLSearchParams({ reporttype: type || '', schoolcode: config.schoolcode || '', recentreports: config.recentreports || '' });
  try {
    const resp = await fetch(`${API}?${params}`);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const reports = await resp.json();
    if (!Array.isArray(reports) || !reports.length) throw new Error('no reports');
    reports.forEach((r) => {
      list.append(item(r.path, `${r.year} ${r.name} (${r.type} ${r.size})`));
    });
  } catch {
    list.append(item(FALLBACK, 'School plans and annual reports (NSW Department of Education)'));
  }
}
