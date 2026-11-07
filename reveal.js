(() => {
  const elements = document.querySelectorAll("[data-reveal]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!elements.length || prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach((element) => observer.observe(element));
  document.body.classList.add("reveal-ready");
})();
