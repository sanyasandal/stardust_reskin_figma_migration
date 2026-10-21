// stardust/reskin/normalize/contact-us.mjs — executable normalization ledger for contact-us (type content; archetype learning-and-support-wellbeing).
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
    id: 'N5',
    what: 'remove main .embed-wrapper (Google Maps place embed under "Location map"); the section heading and address paragraph stay in scope',
    why: 'third-party runtime embed, not authored page content: the block lazy-loads an iframe on intersection (before that it holds only the embed URL as a hidden placeholder link), so its bytes depend on load timing; carried as a dynamic surface (dynamics disposition: embed) like home N1',
  },
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
  // N5 — Google Maps embed (dynamic surface)
  document.querySelectorAll('main .embed-wrapper').forEach((e) => e.remove());
})()`;
