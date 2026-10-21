/**
 * Gallery (no Figma module; composed from donor tokens, M2 card spacing) — source `gallery`.
 * Authoring: one row per image — cell 1 = picture, cell 2 = optional caption.
 * Decode: ul.gallery-grid > li.gallery-item > .gallery-media (moved picture) +
 * .gallery-caption (moved caption).
 */
export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.className = 'gallery-grid';
  [...block.children].forEach((row) => {
    const picture = row.querySelector('picture');
    const li = document.createElement('li');
    li.className = 'gallery-item';
    if (picture) {
      const media = document.createElement('div');
      media.className = 'gallery-media';
      media.append(picture.closest('p') && !picture.closest('p').textContent.trim() ? picture.closest('p') : picture);
      li.append(media);
    }
    const caption = document.createElement('div');
    caption.className = 'gallery-caption';
    [...row.children].forEach((cell) => {
      [...cell.childNodes].forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
        if (node.nodeType === Node.ELEMENT_NODE && !node.textContent.trim() && !node.querySelector('img')) return;
        caption.append(node);
      });
    });
    if (caption.childNodes.length) li.append(caption);
    if (li.childNodes.length) ul.append(li);
  });
  block.replaceChildren(ul);
}
