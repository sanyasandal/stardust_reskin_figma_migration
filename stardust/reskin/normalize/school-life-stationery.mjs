// stardust/reskin/normalize/school-life-stationery.mjs — executable normalization ledger for school-life-stationery (page type content; from the learning-and-support-wellbeing archetype + N4 heading-image unwrap).
// Passed verbatim to capture-content.mjs and every gate (--normalize).
import { DEFAULT_NORMALIZE, DEFAULT_LEDGER } from '../../scripts/reskin/source-normalize.mjs';

export const LEDGER = [
  ...DEFAULT_LEDGER,
  {
    id: 'N2',
    what: 'remove main .back-to-top (floating back-to-top control)',
    why: 'UI chrome injected by the source theme, no content bytes; donor kit has its own Back to Top module',
  },
  {
    id: 'N3',
    what: 'expand every main .nsw-accordion: drop hidden="until-found" from .nsw-accordion__content and set the button aria-expanded="true"',
    why: 'collapsed panels are authored content absent from innerText (hidden); without expansion the byte reference silently drops every accordion body. Same rule as the default de-carousel (N-D2): interactive disclosure is normalized to all-open, and the reskin renders each item title followed by its panel statically in DOM order',
  },
  {
    id: 'N4',
    what: 'unwrap image-only empty headings in main: an h1–h6 with no text whose only content is a <picture>/<img> (authored as <h2 id=""><picture>…</picture></h2>) is replaced by its own child nodes, so the image sits in the flow as a plain image',
    why: 'authoring quirk (image pasted into a heading paragraph): the heading carries 0 text chars, so unwrapping changes no visible text and keeps every image; without it the reskin renders the empty heading as text-only and silently drops the image (stream-render emits heading text only)',
  },
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
  // N3 — accordions all-open
  document.querySelectorAll('main .nsw-accordion__content').forEach((e) => { e.removeAttribute('hidden'); e.hidden = false; });
  document.querySelectorAll('main .nsw-accordion__button').forEach((e) => e.setAttribute('aria-expanded', 'true'));
  // N4 — unwrap image-only empty headings
  document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6').forEach((h) => {
    if (!h.textContent.trim() && h.querySelector('img')) h.replaceWith(...h.childNodes);
  });
})()`;
