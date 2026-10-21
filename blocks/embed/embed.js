/**
 * Embed (no Figma module; composed from donor tokens) — source block `embed` (Brightcove
 * video, Google Maps place). Authored as a plain link paragraph in default content;
 * scripts.js auto-blocks a paragraph holding only a link to a known embed host.
 * Decode: .embed-frame (16:9 light-band placeholder + icon-only load button) + .embed-source
 * (the moved link paragraph, kept visible as the no-JS / privacy fallback). The third-party
 * iframe is created only after the visitor clicks (privacy-friendly, nothing loads at page view).
 */
function kindOf(href) {
  return /google\.[^/]+\/maps/.test(href) ? 'map' : 'video';
}

export default function decorate(block) {
  const link = block.querySelector('a[href]');
  if (!link) return;
  const source = link.closest('p') || link;
  const kind = kindOf(link.href);
  block.classList.add(`embed-${kind}`);

  const frame = document.createElement('div');
  frame.className = 'embed-frame';
  const load = document.createElement('button');
  load.type = 'button';
  load.className = 'embed-load';
  load.setAttribute('aria-label', kind === 'map' ? 'Load the map (Google Maps)' : 'Play the video (Brightcove)');
  frame.append(load);

  load.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = link.href;
    iframe.title = link.textContent;
    iframe.loading = 'lazy';
    iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
    iframe.setAttribute('allowfullscreen', '');
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.replaceChildren(iframe);
    frame.classList.add('is-loaded');
    iframe.focus();
  });

  const caption = document.createElement('div');
  caption.className = 'embed-source';
  caption.append(source);
  block.replaceChildren(frame, caption);
}
