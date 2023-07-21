import { loadProducts } from "./modules/requests.js";
import { openShoppingfCartDialog } from "./modules/event-handlers.js"
import { closeShoppingCartDialog } from "./modules/event-handlers.js";

const shopingCartSection = document.getElementById('shopping-cart_section');
shopingCartSection.addEventListener('click', openShoppingfCartDialog);

const closeShoppingCartButton = document.getElementById('close-shopping-cart_button');
closeShoppingCartButton.addEventListener('click', closeShoppingCartDialog);


new Swiper('.swiper-container', {
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
loadProducts();