/**
 * Site tree for the breadcrumb and section-nav blocks, read from the authored `/section-nav`
 * document: one nested list of links (title + path), maintained by authors in DA.
 */
const SOURCE = '/section-nav';
let treePromise;

function readList(ul, parent) {
  return [...ul.querySelectorAll(':scope > li')].map((li) => {
    const a = li.querySelector(':scope > a, :scope > p > a');
    if (!a) return null;
    const node = {
      title: a.textContent.trim(),
      path: new URL(a.href, window.location.href).pathname.replace(/\/$/, '') || '/',
      parent,
    };
    const sub = li.querySelector(':scope > ul');
    node.children = sub ? readList(sub, node) : [];
    return node;
  }).filter(Boolean);
}

/**
 * @returns {Promise<Array>} top-level nodes ({ title, path, parent, children })
 */
export function getSiteTree() {
  if (!treePromise) {
    treePromise = fetch(`${SOURCE}.plain.html`)
      .then((resp) => (resp.ok ? resp.text() : ''))
      .then((text) => {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const ul = doc.querySelector('ul');
        return ul ? readList(ul, null) : [];
      })
      .catch(() => []);
  }
  return treePromise;
}

/**
 * @param {Array} tree top-level nodes
 * @param {string} path page path
 * @returns {Array} nodes from the top-level section down to the page (empty if not found)
 */
export function findTrail(tree, path) {
  const target = path.replace(/\/$/, '') || '/';
  const walk = (nodes) => {
    let found = null;
    nodes.some((node) => {
      if (node.path === target) found = [node];
      else if (target.startsWith(`${node.path}/`)) {
        const rest = walk(node.children);
        if (rest) found = [node, ...rest];
      }
      return found;
    });
    return found;
  };
  return walk(tree) || [];
}
