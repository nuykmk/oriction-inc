// ==============================
// Topへボタン
// ==============================

const pageTopBtn = document.querySelector('.js-page-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    pageTopBtn.classList.add('is-visible');
  } else {
    pageTopBtn.classList.remove('is-visible');
  }
});

pageTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});