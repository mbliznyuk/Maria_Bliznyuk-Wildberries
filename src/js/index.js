import { logProducts } from "./modules/requests.js";

logProducts();

const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
});
