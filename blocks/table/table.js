/**
 * Table (no Figma module; composed from donor tokens) — source block `table`, variants
 * `no-header` and `bordered`; reskin slots learning-and-support-wellbeing s03, s05.
 * Authoring: one row per table row, one cell per column. The first row is the header row
 * unless the block carries `no-header`.
 * Decode: .table-scroll > table > thead/tbody > tr > th/td, each cell's authored content moved in.
 */
export default function decorate(block) {
  const rows = [...block.children];
  const table = document.createElement('table');
  const hasHeader = !block.classList.contains('no-header') && rows.length > 1;
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  rows.forEach((row, i) => {
    const tr = document.createElement('tr');
    const header = hasHeader && i === 0;
    [...row.children].forEach((cell) => {
      const td = document.createElement(header ? 'th' : 'td');
      if (header) td.scope = 'col';
      td.append(...cell.childNodes);
      tr.append(td);
    });
    (header ? thead : tbody).append(tr);
  });

  if (thead.children.length) table.append(thead);
  table.append(tbody);
  const scroll = document.createElement('div');
  scroll.className = 'table-scroll';
  scroll.append(table);
  block.replaceChildren(scroll);
}
