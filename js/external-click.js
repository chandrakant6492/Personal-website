document.addEventListener('click', function(e) {
    const btn = e.target.closest('#filter-buttons a');
    if (!btn) return;
    e.preventDefault();
    document.querySelectorAll('#filter-buttons a')
            .forEach(b => b.classList.remove('mil-active'));
    btn.classList.add('mil-active');
    filterPosts(btn.dataset.filter);
  });