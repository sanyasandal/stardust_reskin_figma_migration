/**
 * Cards (M2, teaser/card list) — prototype slots s02 (`cards (list)`)
 * and s06 (`cards (quick-links)`).
 * Schema: stardust/eds-schema/home.json sections[1] and sections[5]
 * (repeat unit: LI = 1 image + 1 cta + 1 text run).
 * Authoring: one row per item — cell 1 = icon image, cell 2 = linked title (h3 > a) + text.
 * Decode: ul.cards-list > li > span.cards-icon + div.cards-body (inline run, as in the kit list);
 * the quick-links variant splits the items into three .cards-card panels.
 */
function buildItem(row) {
  const li = document.createElement('li');
  const icon = document.createElement('span');
  icon.className = 'cards-icon';
  const body = document.createElement('div');
  body.className = 'cards-body';

  const picture = row.querySelector('picture');
  if (picture) icon.append(picture);

  [...row.querySelectorAll(':scope > div')].forEach((cell) => {
    [...cell.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
      if (node.nodeType === Node.ELEMENT_NODE && !node.textContent.trim() && !node.querySelector('img')) return;
      if (body.lastElementChild) body.append(' ');
      body.append(node);
    });
  });

  if (picture) li.append(icon);
  li.append(body);
  return li;
}

function buildList(items) {
  const ul = document.createElement('ul');
  ul.className = 'cards-list';
  ul.append(...items);
  return ul;
}

export default function decorate(block) {
  const items = [...block.children]
    .filter((row) => row.textContent.trim() || row.querySelector('img'))
    .map(buildItem);

  if (block.classList.contains('quick-links')) {
    const grid = document.createElement('div');
    grid.className = 'cards-grid';
    const columns = 3;
    const size = Math.ceil(items.length / columns) || 1;
    for (let i = 0; i < items.length; i += size) {
      const card = document.createElement('div');
      card.className = 'cards-card';
      card.append(buildList(items.slice(i, i + size)));
      grid.append(card);
    }
    block.replaceChildren(grid);
  } else {
    block.replaceChildren(buildList(items));
  }
}
