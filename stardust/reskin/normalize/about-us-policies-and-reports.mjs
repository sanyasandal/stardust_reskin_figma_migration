// stardust/reskin/normalize/about-us-policies-and-reports.mjs — executable normalization ledger for about-us-policies-and-reports (page type content; archetype learning-and-support-wellbeing).
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
    what: 'remove main .planningreporting-wrapper (planningreporting block: authored config only — reporttype report|plan + schoolcode 8504 — rendered client-side as a list of PDF links fetched from reports.sparo.schools.nsw.gov.au); the "Annual school report" / "School excellence plan" headings and paragraphs stay in scope',
    why: 'runtime data from a department reporting API, not authored page content: the report list changes as reports are published, so byte equality cannot hold; carried as a dynamic surface (embed/defer) — the deploy re-renders the widget from the authored config',
  },
];

export const NORMALIZE = `${DEFAULT_NORMALIZE};(() => {
  // N2 — back-to-top control
  document.querySelectorAll('main .back-to-top').forEach((e) => e.remove());
  // N3 — accordions all-open
  document.querySelectorAll('main .nsw-accordion__content').forEach((e) => { e.removeAttribute('hidden'); e.hidden = false; });
  document.querySelectorAll('main .nsw-accordion__button').forEach((e) => e.setAttribute('aria-expanded', 'true'));
  // N5 — planningreporting widget (dynamic surface)
  document.querySelectorAll('main .planningreporting-wrapper').forEach((e) => e.remove());
})()`;
