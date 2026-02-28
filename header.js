(() => {
  const headerTable = document.querySelector('table.header[data-site-header], table.header');
  if (!headerTable) return;

  const { pathname } = window.location;
  const isNestedPage = pathname.split('/').filter(Boolean).length > 1;
  const basePath = isNestedPage ? '../' : './';

  const sectionMatchers = [
    ['poems', /\/(Poems\/|Poems\.html$)/],
    ['blog', /\/(Blog\/|Blog\.html$)/],
    ['gallery', /\/Gallery\.html$/]
  ];

  const activeSection = sectionMatchers.find(([, matcher]) => matcher.test(pathname))?.[0] ?? 'home';

  const navLinks = [
    ['home', 'index.html', 'home.svg', 'HOME'],
    ['poems', 'Poems.html', 'pen.svg', 'POEMS'],
    ['blog', 'Blog.html', 'blog.svg', 'BLOG'],
    ['gallery', 'Gallery.html', 'grid.svg', 'GALLERY']
  ];

  headerTable.innerHTML = `<tr>${navLinks
    .map(([key, href, icon, alt]) => {
      const isActive = key === activeSection;
      const cellTag = isActive ? 'th' : 'td';
      return `<${cellTag}><a href="${basePath}${href}"${isActive ? ' aria-current="page"' : ''}><img src="${basePath}images/icons/${icon}" alt="${alt}"></a></${cellTag}>`;
    })
    .join('')}</tr>`;
})();
