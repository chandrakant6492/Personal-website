document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
      if (link.hostname !== location.hostname) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          window.open(this.href, "_blank");
          return false;
        });
      }
    });
  });