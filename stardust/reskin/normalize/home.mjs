// stardust/reskin/normalize/home.mjs — executable normalization ledger for the home archetype.
// Passed verbatim to capture-content.mjs and every gate (--normalize).
import { DEFAULT_NORMALIZE, DEFAULT_LEDGER } from '../../scripts/reskin/source-normalize.mjs';

export const LEDGER = [
  ...DEFAULT_LEDGER,
  {
    id: 'N1',
    what: 'remove main .facebook-feed (live Facebook posts rendered client-side as a desktop grid + a duplicate mobile carousel); the section heading "Stay connected on our socials" stays in scope',
    why: 'third-party runtime data, not authored page content: post text and images change between loads, so byte equality cannot hold; carried as a dynamic surface (dynamics disposition: embed/defer) rather than as static content',
  },
  {
    id: 'N2',
    what: 'remove main .back-to-top (floating back-to-top control)',
    why: 'UI chrome injected by the source theme, no content bytes; donor kit has its own Back to Top module',
  },
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N1 — live Facebook feed (dynamic surface)
  document.querySelectorAll('main .facebook-feed, main .facebook-feed-wrapper').forEach((e) => e.remove());
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
})()`;
