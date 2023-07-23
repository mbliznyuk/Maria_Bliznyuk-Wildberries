const PROUCTS_IN_CART_KEY = 'products_in_carts';

export function setProductsInCart(productsId) {
    localStorage.setItem(PROUCTS_IN_CART_KEY, JSON.stringify(productsId));
}

export function getProductsInCart() {
    const result = JSON.parse(localStorage.getItem(PROUCTS_IN_CART_KEY));
    if (!result) {
        setProductsInCart([]);
        return [];
    }
    return result;
}
