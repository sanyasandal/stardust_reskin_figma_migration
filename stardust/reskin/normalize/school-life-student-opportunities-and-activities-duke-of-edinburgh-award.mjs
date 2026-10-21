// stardust/reskin/normalize/school-life-student-opportunities-and-activities-duke-of-edinburgh-award.mjs — executable normalization ledger for school-life-student-opportunities-and-activities-duke-of-edinburgh-award (page type content; from the learning-and-support-wellbeing archetype + N5 NSW carousel).
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
    id: 'N5',
    what: 'de-carousel the NSW gallery carousel (main .nsw-carousel): force every slide visible and static (drop aria-hidden, visibility:visible on each slide subtree, list transform none + wrap), drop the prev/next controls, the numbered dot navigation and the aria-live region',
    why: 'same rule as the default de-carousel N-D2, which covers slick/swiper/splide/glide but not the NSW design-system carousel: off-page slides hide their image and caption (visibility:hidden), so the byte reference would depend on the carousel position, and the "1 2 3 …" dot numbers are carousel UI chrome, not content; the reskin renders all slides statically in DOM order',
  },
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
  // N3 — accordions all-open
  document.querySelectorAll('main .nsw-accordion__content').forEach((e) => { e.removeAttribute('hidden'); e.hidden = false; });
  document.querySelectorAll('main .nsw-accordion__button').forEach((e) => e.setAttribute('aria-expanded', 'true'));
  // N5 — de-carousel NSW gallery carousel
  document.querySelectorAll('main .nsw-carousel__list').forEach((l) => { l.style.transform = 'none'; l.style.flexWrap = 'wrap'; });
  document.querySelectorAll('main .nsw-carousel__item').forEach((s) => {
    s.removeAttribute('aria-hidden'); s.removeAttribute('tabindex');
    [s, ...s.querySelectorAll('*')].forEach((e) => { e.style.visibility = 'visible'; });
  });
  document.querySelectorAll('main .nsw-carousel__control, main .nsw-carousel__navigation, main .nsw-carousel nav, main .js-carousel__aria-live').forEach((e) => e.remove());
})()`;
