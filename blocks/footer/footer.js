import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Footer (M10, oneAZ footer, light tone) — template-slotted from the reskin page's
 * `[data-canon=footer]`.
 * Authoring (/footer): section 1 = brand (logo image + address/acknowledgement paragraphs),
 * section 2 = link list (ul > li > a). Extra sections are appended to the link column.
 * Decode: .site-footer > .container.chrome-footer > div.footer-brand + ul.footer-links.
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);
  const sections = fragment ? [...fragment.querySelectorAll(':scope > .section')] : [];

  const root = document.createElement('div');
  root.className = 'site-footer';
  const container = document.createElement('div');
  container.className = 'container chrome-footer';

  const brand = document.createElement('div');
  brand.className = 'footer-brand';
  const links = document.createElement('ul');
  links.className = 'footer-links';

  sections.forEach((section, i) => {
    const wrapper = section.querySelector('.default-content-wrapper') || section;
    [...wrapper.children].forEach((el) => {
      if (el.tagName === 'UL' || el.tagName === 'OL') {
        links.append(...el.children);
      } else if (i === 0) {
        const picture = el.tagName === 'P' && !el.textContent.trim() ? el.querySelector('picture, img') : null;
        if (picture) {
          (picture.tagName === 'IMG' ? picture : picture.querySelector('img'))?.classList.add('logo');
          brand.append(picture);
        } else {
          brand.append(el);
        }
      } else {
        const li = document.createElement('li');
        li.append(...el.childNodes);
        links.append(li);
      }
    });
  });

  container.append(brand);
  if (links.children.length) container.append(links);
  root.append(container);
  block.replaceChildren(root);
}
