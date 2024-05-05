// =======================================================
// * APP Name: OperationCaribbeanSummer
// * Updated: 2024/01/15
// * APP URL: https://javiramoslab.com/
// * Author: Javier Ramos Nistal (@JaviRamosLab) and Lazaro Ochoa
// * Version: 0.4.4 (beta)
// * License: CC-BY-SA and GPL
// ========================================================

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});