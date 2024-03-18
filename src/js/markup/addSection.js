const main = document.querySelector('main');
// Перевіряємо, чи вже існує клонована секція
let clonedSection = null;

// Функція для клонування та додавання секції
function duplicateSection() {
  if (window.innerWidth > 760 && !clonedSection) {
    const sectionToDuplicate = document.querySelector('.section-to-duplicate');
    clonedSection = sectionToDuplicate.cloneNode(true); // Клонуємо секцію
    main.appendChild(clonedSection); // Додаємо клоновану секцію до 'main'
  }
}

// Функція для видалення клонованої секції
function removeClonedSection() {
  if (clonedSection) {
    clonedSection.remove(); // Видаляємо клоновану секцію з DOM
    clonedSection = null; // Скидаємо посилання на клоновану секцію
  }
}

// Виклик функції при завантаженні сторінки та при зміні розміру вікна
window.addEventListener('load', duplicateSection);
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    duplicateSection();
  } else {
    removeClonedSection();
  }
});
