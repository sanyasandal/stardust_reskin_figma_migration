/**
 * Hero (M1, home hero branded) — prototype slot s01.
 * Schema: stardust/eds-schema/home.json sections[0] (heading, body, cta + 1 image).
 * Authoring: row 1 = image, row 2 = heading + text + optional link (either order).
 * Decode: .hero-panel (2-column split) > .hero-text + picture (media column).
 */
export default function decorate(block) {
  const panel = document.createElement('div');
  panel.className = 'hero-panel';
  const text = document.createElement('div');
  text.className = 'hero-text';

  const picture = block.querySelector('picture');
  [...block.querySelectorAll(':scope > div > div')].forEach((cell) => {
    [...cell.childNodes].forEach((node) => {
      if (node === picture) return;
      if (node.nodeType === Node.ELEMENT_NODE && node.contains(picture)) return;
      if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
      text.append(node);
    });
  });

  panel.append(text);
  if (picture) {
    const img = picture.querySelector('img');
    if (img) {
      img.loading = 'eager';
      img.fetchPriority = 'high';
    }
    picture.classList.add('hero-media');
    panel.append(picture);
  }
  block.replaceChildren(panel);
}
