(() => {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const storageKey = 'aaryan-site-theme';

  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    if (!themeToggle) return;
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    const icon = themeToggle.querySelector('.theme-toggle-icon');
    if (icon) icon.textContent = isDark ? '☀' : '☾';
  };

  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem(storageKey);
  } catch {
    storedTheme = null;
  }
  const systemTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : systemTheme);
  themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Theme still applies for this page when storage is unavailable.
    }
  });

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
