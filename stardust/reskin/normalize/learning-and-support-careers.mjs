// stardust/reskin/normalize/learning-and-support-careers.mjs — executable normalization ledger for learning-and-support-careers (type content; archetype learning-and-support-wellbeing).
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
    id: 'N4',
    what: 'de-carousel the NSW design-system carousel (main .nsw-carousel, the source gallery block): force every .nsw-carousel__item and its figcaption visible and static (drop aria-hidden, reset the list transform, wrap the list), drop the prev/next control nav, the numbered .nsw-carousel__navigation dots and the aria-live region',
    why: 'same rule as the default de-carousel N-D2, which only knows slick/swiper/splide/glide: off-screen slides hide their captions (visibility:hidden via aria-hidden) so they are absent from innerText, and the dot buttons inject "1 2 3 4" pager text that is UI, not content; the reskin renders all slides statically in DOM order',
  },
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
  // N4 — NSW carousel (gallery) de-carousel
  document.querySelectorAll('main .nsw-carousel nav, main .nsw-carousel__navigation, main .nsw-carousel .js-carousel__aria-live').forEach((e) => e.remove());
  document.querySelectorAll('main .nsw-carousel__list').forEach((l) => { l.style.transform = 'none'; l.style.flexWrap = 'wrap'; });
  document.querySelectorAll('main .nsw-carousel__item').forEach((s) => {
    s.removeAttribute('aria-hidden');
    s.style.visibility = 'visible'; s.style.opacity = '1';
    s.querySelectorAll('*').forEach((c) => { c.style.visibility = 'visible'; });
  });
})()`;
