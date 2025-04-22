(function(){
  // only target your blogs page
  function onBlogs() {
    return window.location.pathname.endsWith('/blogs.html');
  }

  // reload if this wasn’t itself a reload
  function tryReload() {
    if (!onBlogs()) return;

    // Use Navigation Timing Level 2 if available
    const navEntries = performance.getEntriesByType?.('navigation') || [];
    const navType = navEntries[0]?.type ?? performance.navigation.type;

    // reload on anything _except_ a reload
    if (navType !== 'reload') {
      window.location.reload();
    }
  }

  // 1) Full page load
  window.addEventListener('load', tryReload);

  // 2) SPA‐style route changes (pushState, back/forward)
  const _push = history.pushState;
  history.pushState = function() {
    _push.apply(this, arguments);
    window.dispatchEvent(new Event('locationchange'));
  };
  window.addEventListener('popstate', () => window.dispatchEvent(new Event('locationchange')));
  window.addEventListener('locationchange', tryReload);
})();
