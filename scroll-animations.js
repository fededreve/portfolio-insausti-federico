(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsIntersectionObserver = "IntersectionObserver" in window;

  if (prefersReducedMotion || !supportsIntersectionObserver) {
    return;
  }

  const elements = document.querySelectorAll([
    "header",
    "main > section",
    ".page-portfolio #principales > .card",
    ".page-portfolio #pequenas-piezas > .card",
    ".page-portfolio #trabajo-destacado > .col-left"
  ].join(", "));

  if (!elements.length) {
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-reveal-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -6% 0px"
  });

  elements.forEach((element) => {
    element.classList.add("scroll-reveal");
    observer.observe(element);
  });

  document.body.classList.add("scroll-effects-ready");
})();
