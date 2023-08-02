import { printCards } from "./cards.js";

export async function loadProducts() {
    const response = await fetch("https://64b2a63c38e74e386d5560ba.mockapi.io/wildberries/v1/products");
    if (response.ok) {
        handlePromise(response);
    } else {
        alert('response is not ok');
    }
}

function handlePromise(response) {
    const productsPromise = response.json();
    productsPromise.then(
        (result) => {
            printCards(result);
            products = result;
            return result;
        },
        (error) => {
            console.error('error');
            console.error(error);
        }
    );
}
