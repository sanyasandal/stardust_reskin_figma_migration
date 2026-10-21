// stardust/reskin/normalize/school-life-travel-to-school.mjs — executable normalization ledger for school-life-travel-to-school (page type content; from the learning-and-support-wellbeing archetype + N4 map embed).
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
    what: 'empty main .embed-wrapper — the client-side Google Maps iframe plus the JS-injected "Skip Google Map" skip link and #after-map anchor (the empty wrapper is kept so sibling nth-child scopes stay stable); the "Location map" heading and the surrounding paragraphs stay in scope',
    why: 'third-party runtime embed, not authored text: the authored cell is only the maps URL, which the block JS replaces with a lazy cross-origin iframe plus a11y chrome for it; the map tiles cannot be byte-compared and the skip link exists only to bypass the iframe. Carried as a dynamic surface (dynamics disposition: embed/defer) — same rule as home N1',
  },
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
  // N3 — accordions all-open
  document.querySelectorAll('main .nsw-accordion__content').forEach((e) => { e.removeAttribute('hidden'); e.hidden = false; });
  document.querySelectorAll('main .nsw-accordion__button').forEach((e) => e.setAttribute('aria-expanded', 'true'));
  // N4 — third-party map embed (dynamic surface)
  document.querySelectorAll('main .embed-wrapper').forEach((e) => e.replaceChildren());
})()`;
