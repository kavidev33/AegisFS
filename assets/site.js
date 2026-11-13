(() => {
  const button = document.querySelector('.mobile-nav-button');
  const nav = document.querySelector('.mobile-nav');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      button.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.hidden = open;
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      nav.hidden = true;
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
