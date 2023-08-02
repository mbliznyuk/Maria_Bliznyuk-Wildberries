import { loadProducts } from "./modules/requests.js";
import { openShoppingCartDialog } from "./modules/event-handlers.js"
import { closeShoppingCartDialog } from "./modules/event-handlers.js";
import { deleteProductsFromShoppingCart } from "./modules/event-handlers.js";
import { searchProducts } from "./modules/event-handlers.js";
import { debounce } from "./modules/event-handlers.js";
import { createSlider } from "./modules/slider.js";
import { DELAY_TIME_MS } from "./modules/const.js"

document.getElementById('shopping-cart_section').addEventListener('click', openShoppingCartDialog);
document.getElementById('close-shopping-cart_button').addEventListener('click', closeShoppingCartDialog);
document.getElementById('delete-products-from-shopping-cart').addEventListener('click', deleteProductsFromShoppingCart);
document.getElementById('search-box').addEventListener('keyup', debounce(searchProducts, DELAY_TIME_MS));

createSlider();
loadProducts();
