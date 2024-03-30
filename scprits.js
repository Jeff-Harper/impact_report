/* ---------------- Animation observer ---------------- */
/* ---------------------------------------------------- */
const animationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.toggleAttribute('data-is-intersecting');
      return;
    }

    entry.target.removeAttribute('data-is-intersecting');
  });
});

const animatedElements = document.querySelectorAll('.animate');
animatedElements.forEach((element) => animationObserver.observe(element));



/* ♡ */
/* &#9825; */


