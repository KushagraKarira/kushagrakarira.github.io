(() => {
  const placeholder = document.querySelector(
    'nav.header[data-site-header], nav.header, table.header[data-site-header], table.header'
  );
  if (!placeholder) return;

  const { pathname } = window.location;
  const segments = pathname.split('/').filter(Boolean);
  const depth = Math.max(0, segments.length - 1);
  const basePath = depth > 0 ? '../'.repeat(depth) : './';

  const sectionMatchers = [
    ['poems', /\/(Poems\/|Poems\.html$)/i],
    ['blog', /\/(Blog\/|Blog\.html$)/i],
    ['gallery', /\/(Gallery\/|Gallery\.html$)/i]
  ];

  const activeSection =
    sectionMatchers.find(([, matcher]) => matcher.test(pathname))?.[0] ?? 'home';

  const navLinks = [
    ['home', 'index.html', 'home.svg', 'Home'],
    ['poems', 'Poems.html', 'pen.svg', 'Poems'],
    ['blog', 'Blog.html', 'blog.svg', 'Blog'],
    ['gallery', 'Gallery.html', 'grid.svg', 'Gallery']
  ];

  const nav =
    placeholder.tagName === 'NAV'
      ? placeholder
      : Object.assign(document.createElement('nav'), { className: 'header' });

  nav.setAttribute('data-site-header', '');
  nav.innerHTML = navLinks
    .map(([key, href, icon, alt]) => {
      const isActive = key === activeSection;
      const attrs = isActive ? ' class="active" aria-current="page"' : '';
      return `<a href="${basePath}${href}"${attrs}><img src="${basePath}images/icons/${icon}" alt="${alt}"></a>`;
    })
    .join('');

  if (placeholder !== nav) {
    placeholder.replaceWith(nav);
  }
})();
