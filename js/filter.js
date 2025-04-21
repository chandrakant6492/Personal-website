const itemsPerPage = 6;
let currentPage = 1;

const allPosts = Array.from(document.querySelectorAll('.blog-item'));
const pagination = document.getElementById('pagination');
const buttons = document.querySelectorAll('#filter-buttons a');
let currentFilter = 'all';

function filterPosts(filter) {
    currentFilter = filter;
    currentPage = 1;
    renderPosts();
}

function renderPosts() {
    const filtered = allPosts.filter(post =>
        currentFilter === 'all' || post.dataset.tags.includes(currentFilter)
    );

    allPosts.forEach(post => post.style.display = 'none');
    filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .forEach(post => post.style.display = 'block');

    renderPagination(filtered.length);
}

function renderPagination(totalItems) {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('a');
        btn.href = "#";
        btn.className = `mil-pagination-btn ${i === currentPage ? 'mil-active' : ''}`;
        btn.textContent = i;
        btn.addEventListener('click', () => {
            currentPage = i;
            renderPosts();
        });
        pagination.appendChild(btn);
    }
}

// catch filter-button clicks even under Swup
document.addEventListener('click', function(e) {
    const btn = e.target.closest('#filter-buttons a');
    if (!btn) return;
  
    e.preventDefault();
    // toggle active class
    document.querySelectorAll('#filter-buttons a')
      .forEach(b => b.classList.remove('mil-active'));
    btn.classList.add('mil-active');
  
    // run your filter
    filterPosts(btn.dataset.filter);
  });

// Initialize
renderPosts(); // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}