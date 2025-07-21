

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".p-merit-slider__next",
    prevEl: ".p-merit-slider__prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
});