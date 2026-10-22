/**
 * Content container (M2 teaser card anatomy, composed from donor tokens) — source block
 * `content-container` (event and programme teasers).
 * Authoring: one row per item — cell 1 = picture, cell 2 = text (heading, paragraphs, links).
 * Decode: ul.content-container-grid > li.content-container-item >
 * .content-container-media (moved picture) + .content-container-body (moved text).
 */
export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.className = 'content-container-grid';
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'content-container-item';
    const picture = row.querySelector('picture');
    if (picture) {
      const media = document.createElement('div');
      media.className = 'content-container-media';
      const wrap = picture.closest('p');
      media.append(wrap && !wrap.textContent.trim() ? wrap : picture);
      li.append(media);
    }
    const body = document.createElement('div');
    body.className = 'content-container-body';
    [...row.children].forEach((cell) => {
      [...cell.childNodes].forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
        if (node.nodeType === Node.ELEMENT_NODE && !node.textContent.trim() && !node.querySelector('img')) return;
        body.append(node);
      });
    });
    if (body.childNodes.length) li.append(body);
    if (li.childNodes.length) ul.append(li);
  });
  block.replaceChildren(ul);
}
