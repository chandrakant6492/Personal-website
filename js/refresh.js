(function() {
  const target = "https://www.chandrakant.science/blogs.html";
  // only run on the exact page
  if (window.location.href === target) {
    // only run once per session
    if (!sessionStorage.getItem("blogsRefreshed")) {
      sessionStorage.setItem("blogsRefreshed", "true");
      window.addEventListener("load", () => {
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
    }
  }
})();