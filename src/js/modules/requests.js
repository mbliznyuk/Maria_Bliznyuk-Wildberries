export async function logProducts() {
    const response = await fetch("https://64b2a63c38e74e386d5560ba.mockapi.io/wildberries/v1/products");
    const productsPromise = response.json();
    productsPromise.then(
        (result) => {
            products = result;
        },
        (error) => {
            console.log('error');
            console.log(error);
        }
      )
}