document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.top-nav .menu');
  navToggle.addEventListener('click', function() {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('open');
  });
});
