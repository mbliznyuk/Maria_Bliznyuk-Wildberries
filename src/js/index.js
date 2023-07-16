import { logProducts } from "./modules/requests.js";
import { createCard } from "./modules/cards.js";

logProducts();

const product = {
  "picture": "https://loremflickr.com/640/480/fashion",
  "price": 16,
  "discount": 37,
  "priceWithDiscount": 28,
  "name": "name 3",
  "id": "3"
};

const card = createCard(product);

const shoppingCardWrapper = document.getElementById('shopping-card_wrapper'); //TODO: use in another function
shoppingCardWrapper.append(card);

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
