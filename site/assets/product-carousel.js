(() => {
  document.querySelectorAll('[data-screen-carousel]').forEach((carousel) => {
    const viewport = carousel.querySelector('[data-screen-viewport]');
    const slides = [...carousel.querySelectorAll('[data-screen-slide]')];
    const selectors = [...carousel.querySelectorAll('[data-screen-select]')];
    const caption = carousel.querySelector('[data-screen-caption]');
    const original = carousel.querySelector('[data-screen-original]');
    const arrows = [...carousel.querySelectorAll('[data-screen-direction]')];
    if (!viewport || slides.length === 0) return;
    let index = 0;

    const update = () => {
      if (!viewport.clientWidth) return;
      index = Math.min(slides.length - 1, Math.max(0, Math.round(viewport.scrollLeft / viewport.clientWidth)));
      selectors.forEach((selector, position) => {
        if (position === index) selector.setAttribute('aria-current', 'true');
        else selector.removeAttribute('aria-current');
      });
      if (caption) caption.textContent = slides[index].dataset.screenTitle;
      if (original) {
        original.setAttribute('href', slides[index].querySelector('img').getAttribute('src'));
        original.setAttribute('aria-label', `Open ${slides[index].dataset.screenTitle} at full size in a new tab`);
      }
    };

    const show = (next) => {
      const target = (next + slides.length) % slides.length;
      viewport.scrollTo({
        left: target * viewport.clientWidth,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      });
    };

    selectors.forEach((selector, position) => {
      selector.addEventListener('click', (event) => {
        event.preventDefault();
        show(position);
      });
    });
    arrows.forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', () => show(index + Number(button.dataset.screenDirection)));
    });
    carousel.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      show(index + (event.key === 'ArrowRight' ? 1 : -1));
    });
    viewport.addEventListener('scroll', update, { passive: true });
    update();
  });
})();
