document.addEventListener('DOMContentLoaded', () => {
  // 1) Toggle мобильного меню
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }

  // 2) Плавный скролл
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3) Анимации при скролле
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });

  // 4) Валидация формы
  const form = document.querySelector('.contacts form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const name    = form.querySelector('input[type="text"]');
      const phone   = form.querySelector('input[type="tel"]');
      const message = form.querySelector('textarea');
      const check   = form.querySelector('input[type="checkbox"]');
      if (!name.value.trim() ||
          !phone.value.trim() ||
          !message.value.trim() ||
          !check.checked) {
        e.preventDefault();
        alert('Пожалуйста, заполните все поля и подтвердите согласие на обработку данных.');
      }
    });
  }
});