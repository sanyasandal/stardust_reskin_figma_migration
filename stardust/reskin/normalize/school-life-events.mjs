// stardust/reskin/normalize/school-life-events.mjs — executable normalization ledger for school-life-events (page type content; from the learning-and-support-wellbeing archetype + home's N1).
// Passed verbatim to capture-content.mjs and every gate (--normalize).
import { DEFAULT_NORMALIZE, DEFAULT_LEDGER } from '../../scripts/reskin/source-normalize.mjs';

export const LEDGER = [
  ...DEFAULT_LEDGER,
  {
    id: 'N1',
    what: 'remove main .facebook-feed (live Facebook posts rendered client-side as a desktop grid + a duplicate mobile carousel); the section heading above the feed stays in scope',
    why: 'third-party runtime data, not authored page content: post text and images change between loads, so byte equality cannot hold; carried as a dynamic surface (dynamics disposition: embed/defer) rather than as static content — same rule as home N1',
  },
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
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N1 — live Facebook feed (dynamic surface)
  document.querySelectorAll('main .facebook-feed, main .facebook-feed-wrapper').forEach((e) => e.remove());
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
  // N3 — accordions all-open
  document.querySelectorAll('main .nsw-accordion__content').forEach((e) => { e.removeAttribute('hidden'); e.hidden = false; });
  document.querySelectorAll('main .nsw-accordion__button').forEach((e) => e.setAttribute('aria-expanded', 'true'));
})()`;
