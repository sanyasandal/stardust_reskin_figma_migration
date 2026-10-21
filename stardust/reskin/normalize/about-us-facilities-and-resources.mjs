// stardust/reskin/normalize/about-us-facilities-and-resources.mjs — executable normalization ledger for about-us-facilities-and-resources (page type content; archetype learning-and-support-wellbeing).
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
    id: 'N6',
    what: 'de-carousel the NSW gallery carousel (main .nsw-carousel, not covered by the default N-D2 list): every .nsw-carousel__item made visible and static (aria-hidden dropped, visibility forced visible on the slide and its descendants, list transform cleared and wrapped, container overflow visible); prev/next controls, dot navigation (sr-only "1".."N" buttons) and the aria-live status removed',
    why: 'the carousel hides off-screen slides with visibility:hidden on a timer after init, so innerText and visible images vary between loads (captures of the same page gave 1500 and 3135 gallery chars) — rotating carousels break byte determinism; same rule as the default N-D2: the reskin renders all slides statically in DOM order. Controls and dots are carousel UI, not content',
  },
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
  // N3 — accordions all-open
  document.querySelectorAll('main .nsw-accordion__content').forEach((e) => { e.removeAttribute('hidden'); e.hidden = false; });
  document.querySelectorAll('main .nsw-accordion__button').forEach((e) => e.setAttribute('aria-expanded', 'true'));
  // N6 — de-carousel the NSW gallery carousel
  document.querySelectorAll('main .nsw-carousel__control, main .nsw-carousel__navigation, main .js-carousel__aria-live').forEach((e) => e.remove());
  document.querySelectorAll('main .nsw-carousel-container').forEach((e) => e.style.setProperty('overflow', 'visible', 'important'));
  document.querySelectorAll('main .nsw-carousel__list').forEach((e) => { e.style.setProperty('transform', 'none', 'important'); e.style.setProperty('flex-wrap', 'wrap', 'important'); });
  document.querySelectorAll('main .nsw-carousel__item').forEach((li) => { li.removeAttribute('aria-hidden'); [li, ...li.querySelectorAll('*')].forEach((e) => e.style.setProperty('visibility', 'visible', 'important')); });
})()`;
