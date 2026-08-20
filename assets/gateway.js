(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const themeColor = document.querySelector('[data-theme-color]');
  const colorPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function storedTheme() {
    try {
      return localStorage.getItem('gateway-theme');
    } catch (_) {
      return null;
    }
  }

  function setTheme(theme, persist = false) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';

    if (themeButton) {
      themeButton.textContent = dark ? '☀' : '☾';
      themeButton.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
      themeButton.setAttribute('aria-pressed', String(dark));
    }

    themeColor?.setAttribute('content', dark ? '#101713' : '#f2ede3');

    if (persist) {
      try {
        localStorage.setItem('gateway-theme', theme);
      } catch (_) {
        // Storage may be unavailable; the current page can still switch themes.
      }
    }
  }

  setTheme(root.dataset.theme || storedTheme() || (colorPreference.matches ? 'dark' : 'light'));

  themeButton?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });

  colorPreference.addEventListener?.('change', (event) => {
    if (!storedTheme()) setTheme(event.matches ? 'dark' : 'light');
  });

  const enterLink = document.querySelector('[data-enter]');
  const departure = document.querySelector('[data-departure]');

  enterLink?.addEventListener('click', (event) => {
    const modifiedClick = event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (modifiedClick || reducedMotion.matches || !departure) return;

    event.preventDefault();
    departure.hidden = false;
    requestAnimationFrame(() => departure.classList.add('visible'));

    window.setTimeout(() => {
      window.location.assign(enterLink.href);
    }, 430);
  });

  window.addEventListener('pageshow', () => {
    if (!departure) return;
    departure.classList.remove('visible');
    departure.hidden = true;
  });
})();
