/**
 * Facebook feed (no Figma module; cards composed from the M2 card tokens) — source block
 * `facebook-feed`. Like the source, it reads the school's latest posts from the NSW schools
 * Facebook feed service and shows three as cards (image, message clamped to three lines,
 * arrow, Facebook mark); the whole card links to the post. Below 600px the cards scroll
 * horizontally, as the source carousel.
 * Authoring: optional. A paragraph linking to the school's Facebook page is kept as the
 * action (and is all that shows if the feed can't be read); a cell holding only digits
 * overrides the Facebook page id.
 */
const FEED_API = 'https://teu7j4uno5.execute-api.ap-southeast-2.amazonaws.com/v1/facebook-sws';
const DEFAULT_PAGE_ID = '257790711394851';
const POSTS_SHOWN = 3;

const ARROW = '<svg viewBox="0 0 24 24" width="28" height="28" focusable="false" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></svg>';
const FB_MARK = '<svg viewBox="0 0 32 32" width="24" height="24" focusable="false" aria-hidden="true"><path fill="currentColor" d="M32 16.098C32 7.207 24.837 0 16 0S0 7.207 0 16.098C0 24.133 5.851 30.793 13.5 32V20.751H9.437v-4.653H13.5v-3.547c0-4.035 2.389-6.263 6.043-6.263 1.751 0 3.582.314 3.582.314v3.962h-2.018c-1.988 0-2.607 1.241-2.607 2.514v3.02h4.438l-.709 4.653h-3.728V32c7.649-1.208 13.5-7.867 13.5-15.902z"/></svg>';

function postUrl(post) {
  if (post.permalink_url) return post.permalink_url;
  const [page, id] = String(post.id || '').split('_');
  return page && id ? `https://www.facebook.com/${page}/posts/${id}` : 'https://www.facebook.com/';
}

async function readPosts(pageId) {
  const resp = await fetch(`${FEED_API}?pageid=${encodeURIComponent(pageId)}&numberofposts=20`);
  if (!resp.ok) return [];
  const data = await resp.json();
  const entry = Array.isArray(data) ? data[0] : data;
  const posts = typeof entry?.posts === 'string' ? JSON.parse(entry.posts) : entry?.posts;
  return (Array.isArray(posts) ? posts : []).filter((p) => p.message || p.full_picture);
}

function card(post) {
  const li = document.createElement('li');
  li.className = 'facebook-feed-card';
  if (post.full_picture) {
    const media = document.createElement('div');
    media.className = 'facebook-feed-card-image';
    const img = document.createElement('img');
    img.src = post.full_picture;
    img.alt = '';
    img.loading = 'lazy';
    media.append(img);
    li.append(media);
  }
  const body = document.createElement('div');
  body.className = 'facebook-feed-card-body';
  const text = document.createElement('p');
  text.className = 'facebook-feed-card-text';
  const a = document.createElement('a');
  a.href = postUrl(post);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = post.message || 'View this post on Facebook';
  text.append(a);
  const foot = document.createElement('div');
  foot.className = 'facebook-feed-card-foot';
  foot.innerHTML = `<span class="facebook-feed-card-arrow">${ARROW}</span><span class="facebook-feed-card-mark">${FB_MARK}</span>`;
  body.append(text, foot);
  li.append(body);
  return li;
}

export default async function decorate(block) {
  const panel = document.createElement('div');
  panel.className = 'facebook-feed-panel';
  let pageId = DEFAULT_PAGE_ID;
  [...block.querySelectorAll(':scope > div > div')].forEach((cell) => {
    const value = cell.textContent.trim();
    if (/^\d{6,}$/.test(value)) {
      pageId = value;
      return;
    }
    [...cell.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
      panel.append(node);
    });
  });
  panel.querySelectorAll('a[href*="facebook.com"]').forEach((a) => {
    const p = a.closest('p');
    if (p && p.textContent.trim() === a.textContent.trim()) p.classList.add('facebook-feed-action');
  });
  block.replaceChildren(panel);

  try {
    const posts = (await readPosts(pageId)).slice(0, POSTS_SHOWN);
    if (!posts.length) return;
    const ul = document.createElement('ul');
    ul.className = 'facebook-feed-grid';
    posts.forEach((post) => ul.append(card(post)));
    block.classList.add('has-posts');
    block.prepend(ul);
  } catch {
    // the authored link stays as the fallback
  }
}
