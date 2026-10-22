/**
 * Cards — Figma M2 Teaser / Card (canon-source screenshots/teaser-card.png).
 * Authoring: one row per card — cell 1 = image (optional),
 * cell 2 = linked title (h2/h3 > a) + text.
 * Decorate: ul.cards-grid > li.cards-card > div.cards-card-image
 * + div.cards-card-body (title, text, arrow). The title link is stretched over
 * the card so the whole card is the target.
 * Variants: `list` and `quick-links` (home) are 3-up; `dark`, `off-white`,
 * `highlight`, `horizontal` and plain cards (sidebar pages) are 2-up, as in the source.
 */
const THREE_UP = ['list', 'quick-links'];

function arrow() {
  const span = document.createElement('span');
  span.className = 'cards-card-arrow';
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = '<svg viewBox="0 0 24 24" width="28" height="28" focusable="false"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></svg>';
  return span;
}

const HINT = /\s*\(opens in new window\)\s*$/i;

// The source shows a new-window title as an icon and keeps the hint for screen readers only.
function newWindowHint(link) {
  const textNode = [...link.childNodes].reverse()
    .find((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
  const hintEl = link.querySelector('.link-hint');
  if (!hintEl && !(textNode && HINT.test(textNode.textContent))) return;
  if (textNode && HINT.test(textNode.textContent)) {
    textNode.textContent = textNode.textContent.replace(HINT, '');
  }
  hintEl?.remove();
  const sr = document.createElement('span');
  sr.className = 'cards-card-sr';
  sr.textContent = ' (opens in new window)';
  const icon = document.createElement('span');
  icon.className = 'cards-card-external';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" focusable="false"><path d="M14 4h6v6m0-6-9 9M18 14v6H4V6h6" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
  link.append(sr, icon);
}

function buildCard(row) {
  const li = document.createElement('li');
  li.className = 'cards-card';
  const body = document.createElement('div');
  body.className = 'cards-card-body';

  const picture = row.querySelector('picture') || row.querySelector('img');
  if (picture) {
    const media = document.createElement('div');
    media.className = 'cards-card-image';
    media.append(picture);
    li.append(media);
  }

  [...row.querySelectorAll(':scope > div')].forEach((cell) => {
    [...cell.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (!node.textContent.trim()) return;
        const p = document.createElement('p');
        p.textContent = node.textContent.trim();
        body.append(p);
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      if (!node.textContent.trim() && !node.querySelector('img')) return;
      body.append(node);
    });
  });

  const heading = body.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) heading.classList.add('cards-card-title');
  const link = heading?.querySelector('a[href]') || body.querySelector('a[href]');
  if (link) {
    link.classList.add('cards-card-link');
    newWindowHint(link);
    li.classList.add('is-linked');
    body.append(arrow());
  }

  li.append(body);
  return li;
}

export default function decorate(block) {
  const cards = [...block.children]
    .filter((row) => row.textContent.trim() || row.querySelector('img'))
    .map(buildCard);
  const ul = document.createElement('ul');
  ul.className = 'cards-grid';
  ul.append(...cards);
  block.classList.add(THREE_UP.some((v) => block.classList.contains(v)) ? 'cards-3up' : 'cards-2up');
  block.replaceChildren(ul);
}
