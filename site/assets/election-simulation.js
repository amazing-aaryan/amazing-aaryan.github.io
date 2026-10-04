(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('[data-simulation-figure]').forEach((figure) => {
    const source = figure.querySelector('source');
    const button = figure.querySelector('[data-static-toggle]');
    const original = figure.querySelector('[data-simulation-original]');
    const image = figure.querySelector('img');
    if (!source || !button || !image) return;

    let staticView = motion.matches;
    const update = () => {
      // Switching picture sources stops the GIF rather than just hiding it.
      source.media = staticView ? 'not all' : 'all';
      figure.dataset.staticView = String(staticView);
      button.setAttribute('aria-pressed', String(staticView));
      if (original) original.href = staticView ? image.getAttribute('src') : source.getAttribute('srcset');
    };

    button.addEventListener('click', () => {
      staticView = !staticView;
      update();
    });
    motion.addEventListener('change', (event) => {
      staticView = event.matches;
      update();
    });
    update();
    button.hidden = false;
  });
})();
