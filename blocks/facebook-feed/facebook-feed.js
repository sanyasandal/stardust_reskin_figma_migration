/**
 * Facebook feed (no Figma module; composed from donor tokens) — source block `facebook-feed`.
 * The source block embeds the live third-party Facebook timeline (dynamic, not authorable);
 * here it renders only authored content: a link to the school's Facebook page (and any other
 * authored text).
 * Authoring: one cell — a paragraph holding the link to the Facebook page.
 * Decode: .facebook-feed-panel (light band) > moved paragraphs; a link-only paragraph becomes
 * the action.
 */
export default function decorate(block) {
  const panel = document.createElement('div');
  panel.className = 'facebook-feed-panel';
  [...block.querySelectorAll(':scope > div > div')].forEach((cell) => {
    [...cell.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
      panel.append(node);
    });
  });
  panel.querySelectorAll('a[href*="facebook.com"]').forEach((a) => {
    const p = a.closest('p');
    if (p && p.textContent.trim() === a.textContent.trim()) p.classList.add('facebook-feed-action');
  });
  block.replaceChildren(panel);
}
