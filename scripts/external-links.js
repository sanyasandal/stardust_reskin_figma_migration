// External-link decoration, mirroring the source site's runtime (its `external-link` chunk):
// a link to another host gets a visually hidden " (opens in new window)" and opens in a new tab.
// The authored link text is untouched; the suffix is a generated, aria-only span.
const INTERNAL_HOSTS = ['schools.nsw.gov.au', 'education.nsw.gov.au'];
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
    if (!isExternal(a) || a.closest('.embed') || a.querySelector(':scope > .sr-only')) return;
    const hint = document.createElement('span');
    hint.className = 'sr-only';
    hint.textContent = ' (opens in new window)';
    a.append(hint);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
}
