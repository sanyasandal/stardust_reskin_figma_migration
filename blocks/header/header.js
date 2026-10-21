import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Header (M9, oneAZ header) — template-slotted from the reskin page's `[data-canon=header]`.
 * Authoring (/nav): section 1 = brand (logo image), section 2 = nav link list (ul > li > a),
 * section 3 = tools (skip links, text lines, and button links: strong = primary, em = secondary).
 * Decode: .site-header > .chrome-row.nav-align-center > .container >
 *   img.logo + nav.nav-sections (links) + .nav-actions.nav-tools (links, .nav-text, buttons).
 */

function linkOf(el) {
  const links = el.querySelectorAll('a[href]');
  if (links.length !== 1) return null;
  return links[0].textContent.trim() === el.textContent.trim() ? links[0] : null;
}

function buildBrand(section, container) {
  const picture = section?.querySelector('picture');
  if (picture) {
    picture.classList.add('nav-brand');
    const img = picture.querySelector('img');
    if (img) {
      img.classList.add('logo');
      img.loading = 'eager';
    }
    const link = section.querySelector('a[href]');
    if (link && link.contains(picture)) {
      link.classList.add('nav-brand-link');
      link.setAttribute('aria-label', img?.alt || 'Home');
      link.replaceChildren(picture);
      container.append(link);
    } else {
      container.append(picture);
    }
  }
}

function buildNav(section, container) {
  const nav = document.createElement('nav');
  nav.id = 'main-nav';
  nav.className = 'nav-sections';
  nav.setAttribute('aria-label', 'Main');
  if (section) {
    section.querySelectorAll('li').forEach((li) => {
      const link = li.querySelector(':scope > a, :scope > p > a');
      if (link) nav.append(link);
    });
  }
  container.append(nav);
}

function buildTools(section, container) {
  const tools = document.createElement('div');
  tools.className = 'nav-actions nav-tools';
  if (section) {
    section.querySelectorAll('p, li').forEach((el) => {
      if (el.tagName === 'LI' && el.querySelector('p')) return;
      if (!el.textContent.trim()) return;
      const link = linkOf(el);
      if (link) {
        tools.append(link);
      } else {
        const span = document.createElement('span');
        span.className = 'nav-text';
        span.append(...el.childNodes);
        tools.append(span);
      }
    });
  }
  container.append(tools);
}

export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);
  const sections = fragment ? [...fragment.querySelectorAll(':scope > .section')] : [];

  const root = document.createElement('div');
  root.className = 'site-header';
  const row = document.createElement('div');
  row.className = 'chrome-row nav-align-center';
  const container = document.createElement('div');
  container.className = 'container';

  buildBrand(sections[0], container);
  buildNav(sections[1], container);
  buildTools(sections[2], container);

  row.append(container);
  root.append(row);
  block.replaceChildren(root);

  const main = document.querySelector('main');
  if (main && !main.id) main.id = 'main';
}
