import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Footer — Figma One-AZ M10 (node 12406:12683): logo + statement column, link columns,
 * then a social icon row with an optional legal line.
 *
 * Authoring (/footer), one section per group, any order:
 * - a section with an image is the brand: the image is the logo (a link-only paragraph in the
 *   same section becomes the logo's link), the first text paragraph the name, the rest the
 *   statement;
 * - a list whose links all go to social networks is the social row (a paragraph before it is
 *   its label);
 * - any other list is a link column (a paragraph before it is the column's first line);
 * - any other paragraph is the legal line.
 */

const SOCIAL = {
  facebook: 'M12 2a10 10 0 0 0-1.56 19.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v7A10 10 0 0 0 12 2Z',
  instagram: 'M12 7.38a4.62 4.62 0 1 0 0 9.24 4.62 4.62 0 0 0 0-9.24Zm0 7.62a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.88-7.81a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0ZM12 3.62c2.73 0 3.05.01 4.13.06 2.77.13 4.06 1.44 4.19 4.19.05 1.08.06 1.4.06 4.13s-.01 3.05-.06 4.13c-.13 2.75-1.42 4.06-4.19 4.19-1.08.05-1.4.06-4.13.06s-3.05-.01-4.13-.06c-2.78-.13-4.06-1.45-4.19-4.19-.05-1.08-.06-1.4-.06-4.13s.01-3.05.06-4.13c.13-2.75 1.42-4.06 4.19-4.19 1.08-.05 1.4-.06 4.13-.06ZM12 2c-2.72 0-3.06.01-4.12.06C4.24 2.23 2.23 4.24 2.06 7.88 2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.17 3.64 2.18 5.65 5.82 5.82 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c3.63-.17 5.66-2.18 5.82-5.82.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.16-3.63-2.18-5.65-5.82-5.82C15.06 2.01 14.72 2 12 2Z',
  linkedin: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79ZM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z',
  youtube: 'M21.58 7.19a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42a2.5 2.5 0 0 0-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.5 2.5 0 0 0 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81ZM10 15V9l5.2 3-5.2 3Z',
  x: 'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.73H5.58l11.09 14.44Z',
};
const SOCIAL_HOST = /(^|\.)(facebook|instagram|linkedin|youtube|twitter|x)\.com$/;

function socialKind(a) {
  let host = '';
  try { host = new URL(a.href, window.location.href).hostname; } catch { return null; }
  const m = host.match(SOCIAL_HOST);
  if (!m) return null;
  return m[2] === 'twitter' ? 'x' : m[2];
}

function svgIcon(path) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const p = document.createElementNS(ns, 'path');
  p.setAttribute('d', path);
  svg.append(p);
  return svg;
}

const pictureIn = (el) => (el.matches('picture, img') ? el : el.querySelector('picture, img'));
const isLinkOnly = (el) => el.tagName === 'P' && el.children.length === 1
  && el.firstElementChild.tagName === 'A' && el.textContent.trim() === el.firstElementChild.textContent.trim();
const isSocialList = (list) => {
  const links = [...list.querySelectorAll('a[href]')];
  return links.length > 0 && links.every(socialKind);
};

function buildBrand(nodes, brand) {
  let logo = null;
  let logoLink = null;
  const texts = [];
  nodes.forEach((el) => {
    const pic = pictureIn(el);
    if (!logo && pic && !el.textContent.trim()) {
      logo = pic;
      (pic.tagName === 'IMG' ? pic : pic.querySelector('img'))?.classList.add('logo');
    } else if (!logoLink && isLinkOnly(el)) {
      logoLink = el.firstElementChild;
    } else if (el.textContent.trim()) {
      texts.push(el);
    }
  });
  if (logo) {
    if (logoLink) {
      const label = logoLink.textContent.trim();
      logoLink.replaceChildren(logo);
      if (label) logoLink.setAttribute('aria-label', label);
      logoLink.className = 'footer-logo';
      brand.append(logoLink);
    } else {
      const span = document.createElement('span');
      span.className = 'footer-logo';
      span.append(logo);
      brand.append(span);
    }
  } else if (logoLink) {
    texts.unshift(logoLink.parentElement);
  }
  texts.forEach((el, i) => {
    const p = document.createElement('p');
    p.className = i === 0 ? 'footer-name' : 'footer-statement';
    p.append(...el.childNodes);
    brand.append(p);
  });
}

function buildSocial(list, label, row) {
  const wrap = document.createElement('div');
  wrap.className = 'footer-social';
  const ul = document.createElement('ul');
  ul.className = 'icon-links';
  if (label) {
    const p = document.createElement('p');
    p.className = 'footer-social-label';
    p.id = 'footer-social-label';
    p.append(...label.childNodes);
    wrap.append(p);
    ul.setAttribute('aria-labelledby', p.id);
  }
  list.querySelectorAll('a[href]').forEach((a) => {
    const kind = socialKind(a);
    const hinted = !!a.querySelector('.link-hint');
    a.querySelectorAll('.link-hint').forEach((h) => h.remove());
    const name = a.textContent.trim() || kind;
    const link = document.createElement('a');
    link.href = a.href;
    link.setAttribute('aria-label', hinted ? `${name} (opens in new window)` : name);
    link.title = name;
    if (a.target) link.target = a.target;
    if (a.rel) link.rel = a.rel;
    link.append(svgIcon(SOCIAL[kind]));
    const li = document.createElement('li');
    li.append(link);
    ul.append(li);
  });
  wrap.append(ul);
  row.prepend(wrap);
}

export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);
  const sections = fragment ? [...fragment.querySelectorAll(':scope > .section')] : [];

  const root = document.createElement('div');
  root.className = 'site-footer';
  const container = document.createElement('div');
  container.className = 'container chrome-footer';
  const main = document.createElement('div');
  main.className = 'footer-main';
  const brand = document.createElement('div');
  brand.className = 'footer-brand';
  const row = document.createElement('div');
  row.className = 'footer-bottom';
  const legal = document.createElement('div');
  legal.className = 'footer-legal';

  sections.forEach((section) => {
    const wrapper = section.querySelector('.default-content-wrapper') || section;
    const nodes = [...wrapper.children];
    if (nodes.some(pictureIn)) {
      buildBrand(nodes, brand);
      return;
    }
    let pending = null;
    const flush = () => { if (pending) { legal.append(pending); pending = null; } };
    nodes.forEach((el) => {
      if (el.tagName === 'UL' || el.tagName === 'OL') {
        if (isSocialList(el)) {
          buildSocial(el, pending, row);
          pending = null;
          return;
        }
        const col = document.createElement('ul');
        col.className = 'footer-links';
        if (pending) {
          const li = document.createElement('li');
          li.className = 'footer-links-title';
          li.append(...pending.childNodes);
          col.append(li);
          pending = null;
        }
        col.append(...el.children);
        main.append(col);
      } else if (el.textContent.trim()) {
        flush();
        pending = el;
      }
    });
    flush();
  });

  main.prepend(brand);
  container.append(main);
  if (legal.children.length) row.append(legal);
  if (row.children.length) container.append(row);
  root.append(container);
  block.replaceChildren(root);
}
