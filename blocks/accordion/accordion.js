/**
 * Accordion (M8, stacked disclosure rows: title + chevron, body when open) —
 * source block `accordions`; reskin slots learning-and-support-wellbeing s06, s08, s10.
 * Authoring: one row per item — cell 1 = title (text or a heading), cell 2 = panel
 * (any rich content, including a nested table whose first row is the source's block-name row).
 * Decode: .accordion-item > .accordion-head (div.accordion-title holding the moved title +
 * a chevron-only button.accordion-toggle) + .accordion-panel (the moved panel content).
 * Items start open (EW7: no authored text hidden at rest); the whole head row toggles.
 */

// Same rule as scripts/external-links.js (inlined: the block round-trip harness cannot resolve
// imports): external panel links get the source site's generated " (opens in new window)" hint.
function decorateExternalLinks(root) {
  root.querySelectorAll(':is(li, p, h1, h2, h3, h4, h5, h6) a[href]').forEach((a) => {
    const internal = [window.location.hostname, 'schools.nsw.gov.au', 'education.nsw.gov.au']
      .some((h) => a.hostname === h || a.hostname.endsWith(`.${h}`));
    if (internal || !/^https?:/.test(a.protocol) || /\(opens in new window\)/i.test(a.textContent)) return;
    const hint = document.createElement('span');
    hint.className = 'link-hint';
    hint.textContent = ' (opens in new window)';
    a.append(hint);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
}

function markNestedTables(panel) {
  panel.querySelectorAll('table').forEach((table) => {
    table.classList.add('accordion-table');
    const first = table.querySelector('tr');
    const cells = first ? [...first.children] : [];
    if (cells.length === 1 && cells[0].colSpan > 1 && /^(table)?$/i.test(cells[0].textContent.trim())) {
      first.classList.add('accordion-table-name');
    }
  });
}

export default function decorate(block) {
  const uid = Math.random().toString(36).slice(2, 8);
  const items = [...block.children].map((row, i) => {
    const [titleCell, ...panelCells] = [...row.children];
    const id = `accordion-${uid}-${i}`;

    const item = document.createElement('div');
    item.className = 'accordion-item';

    const head = document.createElement('div');
    head.className = 'accordion-head';
    const title = document.createElement('div');
    title.className = 'accordion-title';
    title.id = `${id}-title`;
    if (titleCell) title.append(...titleCell.childNodes);

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'accordion-toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-controls', `${id}-panel`);
    toggle.setAttribute('aria-labelledby', title.id);

    const panel = document.createElement('div');
    panel.className = 'accordion-panel';
    panel.id = `${id}-panel`;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', title.id);
    panelCells.forEach((cell) => panel.append(...cell.childNodes));
    markNestedTables(panel);
    // panel links stay text links (kit Block Element body), not decorateButtons' lone-link buttons
    panel.querySelectorAll('a.button').forEach((a) => {
      a.classList.remove('button', 'primary', 'secondary', 'accent');
      a.closest('.button-wrapper')?.classList.remove('button-wrapper');
    });

    head.append(title, toggle);
    head.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      item.classList.toggle('is-closed', !open);
    });

    item.append(head, panel);
    return item;
  });
  block.replaceChildren(...items);
  decorateExternalLinks(block);
}
