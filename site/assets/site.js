(() => {
  document.querySelectorAll('[data-profile-image]').forEach((img) => {
    img.addEventListener('error', () => img.closest('.profile-card')?.classList.add('no-image'));
  });

  document.querySelectorAll('[data-accordion]').forEach((list) => {
    list.querySelectorAll('[data-exp-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        list.querySelectorAll('[data-exp-toggle]').forEach((other) => {
          other.setAttribute('aria-expanded', 'false');
          document.getElementById(other.getAttribute('aria-controls'))?.classList.remove('open');
        });
        if (!isOpen) {
          button.setAttribute('aria-expanded', 'true');
          document.getElementById(button.getAttribute('aria-controls'))?.classList.add('open');
        }
      });
    });
  });

  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video[autoplay]').forEach((video) => {
      video.removeAttribute('autoplay');
      video.pause?.();
    });
  }
})();
