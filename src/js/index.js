import { loadProducts } from "./modules/requests.js";
import { openShoppingfCartDialog } from "./modules/event-handlers.js"
import { closeShoppingCartDialog } from "./modules/event-handlers.js";
import { deleteProductsFromShoppingCart } from "./modules/event-handlers.js";
import { searchProducts } from "./modules/event-handlers.js";

const shopingCartSection = document.getElementById('shopping-cart_section');
shopingCartSection.addEventListener('click', openShoppingfCartDialog);

const closeShoppingCartButton = document.getElementById('close-shopping-cart_button');
closeShoppingCartButton.addEventListener('click', closeShoppingCartDialog);

const deleteProductsFromShoppingCartButton = document.getElementById('delete-products-from-shopping-cart');
deleteProductsFromShoppingCartButton.addEventListener('click', deleteProductsFromShoppingCart);

const searchResaultsDialog = document.getElementById('search-box');
searchResaultsDialog.addEventListener('keyup', searchProducts);

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