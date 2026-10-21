/**
 * Columns (M3 teaser text+image, M4 CTA banner as the `light` variant) —
 * prototype slots s03, s04, s05, s07, s08.
 * Schema: stardust/eds-schema/home.json sections[2,3,4,6,7] (heading, body, cta + 1 image).
 * Authoring: one row, two cells — a text cell (heading, paragraphs, link/button) and an image cell.
 * Cell order is the layout: image cell first = media-first.
 * Decode: .columns-panel (2-column split) > .columns-text (+ .actions for buttons) + picture.
 */
export default function decorate(block) {
  const cells = [...block.querySelectorAll(':scope > div > div')];
  const picture = block.querySelector('picture');
  const mediaCell = picture ? cells.find((cell) => cell.contains(picture)) : null;
  const textCells = cells.filter((cell) => cell !== mediaCell || cell.textContent.trim());

  const panel = document.createElement('div');
  panel.className = 'columns-panel';
  const text = document.createElement('div');
  text.className = 'columns-text';

  textCells.forEach((cell) => {
    [...cell.childNodes].forEach((node) => {
      if (node === picture) return;
      if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
      if (node.nodeType === Node.ELEMENT_NODE && node.contains(picture)) {
        if (!node.textContent.trim()) return;
        picture.remove();
      }
      text.append(node);
    });
  });

  const buttons = [...text.querySelectorAll(':scope > p.button-wrapper')];
  if (buttons.length) {
    const actions = document.createElement('div');
    actions.className = 'actions';
    buttons.forEach((p) => actions.append(...p.children));
    buttons[0].replaceWith(actions);
    buttons.slice(1).forEach((p) => p.remove());
  }

  panel.append(text);
  if (picture) {
    picture.classList.add('columns-media');
    if (cells.indexOf(mediaCell) === 0) block.classList.add('media-first');
    panel.append(picture);
  }
  block.replaceChildren(panel);
}
