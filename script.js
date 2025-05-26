// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Анимации
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Валидация формы
const form = document.querySelector('.contacts form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[type="text"]');
    const phone = form.querySelector('input[type="tel"]');
    const message = form.querySelector('textarea');
    const checkbox = form.querySelector('input[type="checkbox"]');

    if (!name.value || !phone.value || !message.value || !checkbox.checked) {
      e.preventDefault();
      alert('Пожалуйста, заполните все поля и подтвердите согласие на обработку данных.');
    }
  });
}