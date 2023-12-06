window.addEventListener("scroll", function() {
    const header = document.getElementById("sticky-header");
    if (window.scrollY > 200) {
      header.classList.add("scroll-color-change");
      // header.add('top:0%');
      header.top = (0);
    } else {
      header.classList.remove("scroll-color-change");
    }
  });
  