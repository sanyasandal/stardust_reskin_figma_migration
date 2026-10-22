// stardust/reskin/normalize/about-us-enrol.mjs — executable normalization ledger for about-us-enrol (page type content; archetype learning-and-support-wellbeing).
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
    what: 'remove main .embed-wrapper (embed block: authored Brightcove video link https://bcove.video/…, swapped client-side for a lazily-injected third-party player iframe; renders 0 text chars and 0 images at capture); the preceding intro text stays in scope',
    why: 'third-party player injected at runtime, no content bytes in the rendered DOM (the authored link is consumed by the block); carried as a dynamic surface (embed/defer) — the deploy re-embeds the video from the authored link',
  },
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
  // N3 — accordions all-open
  document.querySelectorAll('main .nsw-accordion__content').forEach((e) => { e.removeAttribute('hidden'); e.hidden = false; });
  document.querySelectorAll('main .nsw-accordion__button').forEach((e) => e.setAttribute('aria-expanded', 'true'));
  // N4 — third-party video embed (dynamic surface)
  document.querySelectorAll('main .embed-wrapper').forEach((e) => e.remove());
})()`;
