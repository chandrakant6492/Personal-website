// Check if this is the user's first visit after navigation
if (!sessionStorage.getItem('hasRefreshed')) {
  setTimeout(function() {
    sessionStorage.setItem('hasRefreshed', 'true');
    location.reload();
  }, 5000); // 5000 ms = 5 seconds
}