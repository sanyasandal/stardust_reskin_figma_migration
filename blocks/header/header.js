import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Header (Figma One-AZ M9, node 12387:11725).
 * Authoring (/nav):
 *   section 1 = brand: logo picture (optionally linked)
 *   section 2 = primary nav: ul > li > a
 *   section 3 = tools: skip links, utility links, plain text lines (1st = site name,
 *               2nd = tagline), a search link; a link to #main-nav is the source's menu toggle.
 * Output: skip links + .nav-utility row + .nav-bar (brand | nav | search + menu toggle).
 */

// Material Symbols ligature names carried over from the source as plain text.
const LIGATURE = /\s*\b(keyboard_arrow_(right|down|left|up)|expand_more|expand_less|chevron_right|arrow_forward)\s*$/i;
const MOBILE = window.matchMedia('(width < 1024px)');

const clean = (text) => text.replace(/\s+/g, ' ').trim().replace(LIGATURE, '');

function parseTools(section) {
  const out = {
    skip: [], utility: [], text: [], search: null,
  };
  section?.querySelectorAll('p, li').forEach((el) => {
    if (el.tagName === 'LI' && el.querySelector('p')) return;
    const label = clean(el.textContent);
    const link = el.querySelector('a[href]');
    if (!link) {
      if (label) out.text.push(label);
      return;
    }
    const href = link.getAttribute('href');
    if (/^skip\b/i.test(label)) out.skip.push({ label, href: href.replace(/^\/(?=#)/, '') });
    else if (/search/i.test(href) || /^search$/i.test(link.textContent.trim())) {
      // prefer a real search page over an in-page anchor
      if (!out.search || (out.search.startsWith('#') && !href.startsWith('#'))) out.search = href;
    } else if (/#main-nav$/.test(href)) {
      // source menu toggle ("Show"): replaced by the built-in toggle
    } else if (label) out.utility.push({ label, href });
  });
  return out;
}

function buildBrand(section, tools) {
  const brand = document.createElement('a');
  brand.className = 'nav-brand';
  brand.href = section?.querySelector('a[href]')?.getAttribute('href') || '/';
  const picture = section?.querySelector('picture');
  if (picture) {
    const img = picture.querySelector('img');
    if (img) {
      img.loading = 'eager';
      img.alt = '';
    }
    picture.classList.add('nav-logo');
    brand.append(picture);
  }
  const [name, tagline] = tools.text;
  if (name) {
    const text = document.createElement('span');
    text.className = 'nav-brand-text';
    const n = document.createElement('span');
    n.className = 'nav-brand-name';
    n.textContent = name;
    text.append(n);
    if (tagline) {
      const t = document.createElement('span');
      t.className = 'nav-brand-tagline';
      t.textContent = tagline;
      text.append(t);
    }
    brand.append(text);
    brand.setAttribute('aria-label', `${name} home`);
  } else {
    brand.setAttribute('aria-label', 'Home');
  }
  return brand;
}

function buildNav(section) {
  const nav = document.createElement('nav');
  nav.id = 'main-nav';
  nav.className = 'nav-sections';
  nav.setAttribute('aria-label', 'Main');
  const ul = document.createElement('ul');
  section?.querySelectorAll('li').forEach((li) => {
    const link = li.querySelector(':scope > a, :scope > p > a');
    if (!link) return;
    const item = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.getAttribute('href');
    a.textContent = clean(link.textContent);
    const here = new URL(a.href, window.location).pathname.replace(/\/$/, '');
    const path = window.location.pathname.replace(/\/$/, '');
    if (here && (path === here || path.startsWith(`${here}/`))) a.setAttribute('aria-current', path === here ? 'page' : 'true');
    item.append(a);
    ul.append(item);
  });
  nav.append(ul);
  return nav;
}

function linkList(className, links) {
  const ul = document.createElement('ul');
  ul.className = className;
  links.forEach(({ label, href }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;
    li.append(a);
    ul.append(li);
  });
  return ul;
}

function setOpen(header, toggle, open) {
  header.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);
  const sections = fragment ? [...fragment.querySelectorAll(':scope > .section')] : [];
  const tools = parseTools(sections[2]);

  const root = document.createElement('div');
  root.className = 'site-header';

  if (tools.skip.length) root.append(linkList('nav-skip', tools.skip));

  if (tools.utility.length) {
    const utility = document.createElement('div');
    utility.className = 'nav-utility';
    const inner = document.createElement('div');
    inner.className = 'nav-container';
    inner.append(linkList('nav-utility-links', tools.utility));
    utility.append(inner);
    root.append(utility);
  }

  const bar = document.createElement('div');
  bar.className = 'nav-bar';
  const container = document.createElement('div');
  container.className = 'nav-container';
  const nav = buildNav(sections[1]);

  const actions = document.createElement('div');
  actions.className = 'nav-actions';
  if (tools.search) {
    const search = document.createElement('a');
    search.className = 'nav-search';
    search.href = tools.search;
    search.setAttribute('aria-label', 'Search');
    search.innerHTML = '<span class="icon icon-search"><img src="/icons/search.svg" alt="" width="24" height="24"></span>';
    actions.append(search);
  }
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-controls', 'main-nav');
  toggle.innerHTML = '<span class="nav-toggle-icon" aria-hidden="true"></span>';
  actions.append(toggle);

  container.append(buildBrand(sections[0], tools), nav, actions);
  bar.append(container);
  root.append(bar);

  // utility links repeat inside the mobile panel
  if (tools.utility.length) nav.append(linkList('nav-utility-links nav-panel-utility', tools.utility));

  block.replaceChildren(root);
  setOpen(root, toggle, false);

  toggle.addEventListener('click', () => setOpen(root, toggle, !root.classList.contains('is-open')));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('is-open')) {
      setOpen(root, toggle, false);
      toggle.focus();
    }
  });
  MOBILE.addEventListener('change', () => setOpen(root, toggle, false));

  const main = document.querySelector('main');
  if (main && !main.id) main.id = 'main';
}
