(() => {
  const { protocol, pathname } = window.location;
  const isLocal = protocol === 'file:';
  const inSubdir = /(?:^|\/)(blog|poems|gallery)\//i.test(pathname);
  const base = inSubdir ? '../' : './';
  const head = document.head;

  // 1. Uniform SEO, Canonical, Open Graph & PWA Head Injection
  const title = document.title || 'Kushagra Karira';
  const desc = head.querySelector('meta[name="description"]')?.content || 'Developer, Designer & MBA';
  const cleanPath = pathname.replace(/\/index\.html$/i, '/').replace(/\.html$/i, '');
  const canonicalUrl = `https://kushagrakarira.com${inSubdir ? cleanPath.replace(/^.*(\/(blog|poems|gallery)\/.*)$/i, '$1') : cleanPath.replace(/^.*(\/[^/]*)$/, '$1')}`;

  const ensureTag = (selector, tagName, attrs) => {
    if (head.querySelector(selector)) return;
    const el = document.createElement(tagName);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    head.appendChild(el);
  };

  ensureTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonicalUrl });
  ensureTag('meta[name="author"]', 'meta', { name: 'author', content: 'Kushagra Karira' });
  ensureTag('meta[name="theme-color"]', 'meta', { name: 'theme-color', content: '#00a0fc' });
  ensureTag('link[rel="icon"]', 'link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' });
  ensureTag('link[rel="apple-touch-icon"]', 'link', { rel: 'apple-touch-icon', href: `${base}favicon.svg` });
  ensureTag('link[rel="manifest"]', 'link', { rel: 'manifest', href: `${base}manifest.webmanifest`, crossorigin: 'use-credentials' });
  ensureTag('meta[property="og:site_name"]', 'meta', { property: 'og:site_name', content: 'Kushagra Karira' });
  ensureTag('meta[property="og:type"]', 'meta', { property: 'og:type', content: inSubdir ? 'article' : 'website' });
  ensureTag('meta[property="og:title"]', 'meta', { property: 'og:title', content: title });
  ensureTag('meta[property="og:description"]', 'meta', { property: 'og:description', content: desc });
  ensureTag('meta[property="og:url"]', 'meta', { property: 'og:url', content: canonicalUrl });
  ensureTag('meta[name="twitter:card"]', 'meta', { name: 'twitter:card', content: 'summary' });

  // 2. Service Worker Registration
  if ('serviceWorker' in navigator && !isLocal) {
    window.addEventListener('load', () => navigator.serviceWorker.register(`${base}service-worker.js`).catch(() => {}));
  }

  // 3. Unified Floating Bottom Header
  const placeholder = document.querySelector('nav.header, table.header');
  if (!placeholder) return;

  const active =
    [['poems', /(?:^|\/)poems(?:\/|\.html|$)/i],
     ['blog', /(?:^|\/)blog(?:\/|\.html|$)/i],
     ['gallery', /(?:^|\/)gallery(?:\/|\.html|$)/i]]
      .find(([, re]) => re.test(pathname))?.[0] || 'home';

  const links = [
    ['home', '/', 'index.html', 'home.svg', 'Home'],
    ['poems', '/Poems', 'Poems.html', 'pen.svg', 'Poems'],
    ['blog', '/Blog', 'Blog.html', 'blog.svg', 'Blog'],
    ['gallery', '/Gallery', 'Gallery.html', 'grid.svg', 'Gallery']
  ];

  const nav = placeholder.tagName === 'NAV' ? placeholder : document.createElement('nav');
  nav.className = 'header';
  nav.setAttribute('data-site-header', '');
  nav.innerHTML = links.map(([k, clean, file, icon, alt]) =>
    `<a href="${isLocal ? base + file : clean}" aria-label="${alt}" title="${alt}"${k === active ? ' class="active" aria-current="page"' : ''}><img src="${base}images/icons/${icon}" alt="${alt}"></a>`
  ).join('');

  if (placeholder !== nav) placeholder.replaceWith(nav);
})();
