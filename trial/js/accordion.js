document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion__item');

  items.forEach((item) => {
    const question = item.querySelector('.accordion__question');

    question.addEventListener('click', () => {
      item.classList.toggle('is-open');
    });
  });
});