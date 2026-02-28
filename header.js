(function () {
  const headerTable =
    document.querySelector('table.header[data-site-header]') ||
    document.querySelector('table.header');

  if (!headerTable) {
    return;
  }

  const scriptTag = document.currentScript;
  const isNestedPath = scriptTag && scriptTag.getAttribute('src').startsWith('../');
  const basePath = isNestedPath ? '../' : './';
  const path = window.location.pathname;

  const getActiveSection = () => {
    if (path.includes('/Poems/') || path.endsWith('/Poems.html') || path.endsWith('Poems.html')) {
      return 'poems';
    }

    if (path.includes('/Blog/') || path.endsWith('/Blog.html') || path.endsWith('Blog.html')) {
      return 'blog';
    }

    if (path.endsWith('/Gallery.html') || path.endsWith('Gallery.html')) {
      return 'gallery';
    }

    return 'home';
  };

  const activeSection = getActiveSection();
  const links = [
    { key: 'home', href: `${basePath}index.html`, icon: 'home.svg', alt: 'HOME' },
    { key: 'poems', href: `${basePath}Poems.html`, icon: 'pen.svg', alt: 'POEMS' },
    { key: 'blog', href: `${basePath}Blog.html`, icon: 'blog.svg', alt: 'BLOG' },
    { key: 'gallery', href: `${basePath}Gallery.html`, icon: 'grid.svg', alt: 'GALLERY' }
  ];

  const row = links
    .map(({ key, href, icon, alt }) => {
      const cellTag = key === activeSection ? 'th' : 'td';
      const ariaCurrent = key === activeSection ? ' aria-current="page"' : '';
      return `<${cellTag}><a href="${href}"${ariaCurrent}><img src="${basePath}images/icons/${icon}" alt="${alt}"></a></${cellTag}>`;
    })
    .join('');

  headerTable.innerHTML = `<tr>${row}</tr>`;
})();
