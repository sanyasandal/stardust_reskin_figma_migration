import { getSiteTree, findTrail } from '../../scripts/site-tree.js';

/**
 * Section navigation (auto-built on inner pages, desktop sidebar), from the authored
 * `/section-nav` tree: the top-level section as a header link, then its pages with the branch
 * holding the current page expanded. Pages outside the tree get no sidebar.
 */
function link(node, path) {
  const a = document.createElement('a');
  a.href = node.path;
  a.textContent = node.title;
  if (node.path === path) a.setAttribute('aria-current', 'page');
  return a;
}

function list(nodes, trail, path) {
  const ul = document.createElement('ul');
  nodes.forEach((node) => {
    const li = document.createElement('li');
    li.append(link(node, path));
    if (trail.includes(node)) {
      li.classList.add('active');
      if (node.children.length) li.append(list(node.children, trail, path));
    }
    ul.append(li);
  });
  return ul;
}

export default async function decorate(block) {
  const tree = await getSiteTree();
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const trail = findTrail(tree, path);
  if (!trail.length) {
    block.closest('.page-aside')?.remove();
    return;
  }

  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Section navigation');
  const header = document.createElement('div');
  header.className = 'section-nav-header';
  header.append(link(trail[0], path));
  nav.append(header);
  if (trail[0].children.length) nav.append(list(trail[0].children, trail.slice(1), path));
  block.replaceChildren(nav);
}
