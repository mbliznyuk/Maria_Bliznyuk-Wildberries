import { printCards } from "./cards.js";

export async function loadProducts() {
    const response = await fetch("https://64b2a63c38e74e386d5560ba.mockapi.io/wildberries/v1/products");
    const productsPromise = response.json();
    productsPromise.then(
        (result) => {
            printCards(result);
            window.products = result;
        },
        (error) => {
            console.log('error');
            console.log(error);
        }
      );
}
