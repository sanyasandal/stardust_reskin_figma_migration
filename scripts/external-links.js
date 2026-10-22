// External-link decoration, mirroring the source site's runtime (its `external-link` chunk):
// a link to another host gets a generated " (opens in new window)" hint and opens in a new tab.
// The authored link text is untouched. The hint is visible, as in the reskin prototypes (the
// source hides it); a link whose authored text already says so gets none.
const INTERNAL_HOSTS = ['schools.nsw.gov.au', 'education.nsw.gov.au'];
const HINT = /\(opens in new window\)/i;
const SELECTOR = ':is(li, p, h1, h2, h3, h4, h5, h6) a[href]';

function isExternal(a) {
  let host;
  try {
    host = new URL(a.href, window.location.href).hostname;
  } catch {
    return false;
  }
  if (!/^https?:/.test(a.protocol)) return false;
  return ![window.location.hostname, ...INTERNAL_HOSTS]
    .some((h) => host === h || host.endsWith(`.${h}`));
}

// eslint-disable-next-line import/prefer-default-export
export function decorateExternalLinks(root) {
  root.querySelectorAll(SELECTOR).forEach((a) => {
    if (!isExternal(a) || a.closest('.embed') || HINT.test(a.textContent)) return;
    const hint = document.createElement('span');
    hint.className = 'link-hint';
    hint.textContent = ' (opens in new window)';
    a.append(hint);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
}
