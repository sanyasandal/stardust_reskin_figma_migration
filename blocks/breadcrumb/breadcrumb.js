import { getSiteTree, findTrail } from '../../scripts/site-tree.js';

/**
 * Breadcrumb (auto-built on inner pages): Home > section > … > current page.
 * Renders at once from the URL (sentence-cased segments, the h1 for the current page), then
 * swaps in the titles from the authored `/section-nav` tree when it arrives.
 */
function fromPath(path) {
  const segments = path.replace(/\/$/, '').split('/').filter(Boolean);
  return segments.map((seg, i) => {
    const words = decodeURIComponent(seg).replace(/-/g, ' ');
    return {
      title: words.charAt(0).toUpperCase() + words.slice(1),
      path: `/${segments.slice(0, i + 1).join('/')}`,
    };
  });
}

function render(block, trail) {
  const h1 = document.querySelector('main h1');
  const crumbs = [{ title: 'Home', path: '/' }, ...trail.slice(0, -1)];
  const current = trail.at(-1)?.title || h1?.textContent.trim() || document.title;

  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Breadcrumb');
  const ol = document.createElement('ol');
  crumbs.forEach((crumb) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = crumb.path;
    a.textContent = crumb.title;
    li.append(a);
    ol.append(li);
  });
  const last = document.createElement('li');
  last.setAttribute('aria-current', 'page');
  last.textContent = current;
  ol.append(last);
  nav.append(ol);
  block.replaceChildren(nav);
}

export default function decorate(block) {
  const path = window.location.pathname;
  const guess = fromPath(path);
  const h1 = document.querySelector('main h1')?.textContent.trim();
  if (h1 && guess.length) guess.at(-1).title = h1;
  render(block, guess);
  getSiteTree().then((tree) => {
    const trail = findTrail(tree, path);
    if (trail.length === guess.length) render(block, trail);
  });
}
