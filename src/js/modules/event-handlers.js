import { setProductsInCart } from "./products-in-cart.js";
import { getProductsInCart } from "./products-in-cart.js";
import { printFoundCards } from "./cards.js";
import { CURRENCY_BYN, CURRENCY_BYN_CODE } from "./const.js";

export function openShoppingfCartDialog() {
    const shoppingCartModalWindow = document.getElementById('shopping-cart_modal-window');
    shoppingCartModalWindow.style.top = '100%';
    printCartTableWithTotalPrice();
}

export function closeShoppingCartDialog(event) {
    const shoppingCartModalWindow = document.getElementById('shopping-cart_modal-window');
    shoppingCartModalWindow.style.top = '-1000px';
    event.stopPropagation();
}

export function addProductInShoppingCart(id) {
    const producstInShoppingCart = getProductsInCart();
    producstInShoppingCart.push(id);
    setProductsInCart(producstInShoppingCart);
}

export function deleteProductsFromShoppingCart() {
    const tableBody = document.getElementById('table-of-products');
    tableBody.innerHTML = '';
    setProductsInCart([]);
    printCartTableWithTotalPrice();
}

export function debounce(callback, ms) {
    let timer;
    return function (...arg) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, arg)
        }, ms)
    }
}

export function searchProducts() {
    const searchResultDialog = document.getElementById('search-results-dialog');
    searchResultDialog.innerHTML = '';
    const searchInputText = document.getElementById('search-box').value;
    togleSearchResultDialog(searchResultDialog, searchInputText);
    const foundProducts = products.filter(element => element.name.toLowerCase().includes(searchInputText.toLowerCase()));
    printFoundCards(searchResultDialog, foundProducts);
}

function printCartTableWithTotalPrice() {
    printCartTableRows();
    printCalculatedTotalPrice();

}

function printCalculatedTotalPrice() {
    let totalPriceValue = document.getElementById('total-price-value');
    const producstInShoppingCart = findProductsInShoppingCart();
    const pricesOfProducts = producstInShoppingCart.map(element => element.priceWithDiscount);
    totalPriceValue.innerText = pricesOfProducts
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) + ' ' + CURRENCY_BYN_CODE;
}

function printCartTableRows() {
    const tableBody = document.getElementById('table-of-products');
    tableBody.innerHTML = '';
    findProductsInShoppingCart().forEach(it =>
        tableBody.append(createTableRow(it.name, it.priceWithDiscount))
    );
}

function findProductsInShoppingCart() {
    const producstIdInShoppingCart = getProductsInCart();
    const producstInShoppingCart = products.filter(element => producstIdInShoppingCart.includes(element.id));
    return producstInShoppingCart;
}

function createTableRow(name, priceWithDiscount) {
    const tableRow = document.createElement('tr');
    tableRow.classList.add('cart-table-row');
    const tableDataCellForName = createTableDataCell('cart-table-cell-for-name', name);
    const tableDataCellForPrice = createTableDataCell('cart-table-cell-for-price', priceWithDiscount + ' ' + CURRENCY_BYN);
    tableRow.append(tableDataCellForName, tableDataCellForPrice);
    return tableRow;
}

function createTableDataCell(className, innerText) {
    const tableDataCell = document.createElement('td');
    tableDataCell.classList.add(className);
    tableDataCell.innerText = innerText;
    return tableDataCell;
}

function togleSearchResultDialog(searchResultDialog, productForSearch) {
    const searchInput = document.getElementById('search-box')
    if (productForSearch === '') {
        searchResultDialog.style.display = 'none';
        searchInput.style.borderRadius = '50px';
    } else {
        searchResultDialog.style.display = 'flex';
        searchInput.style.borderRadius = '25px 25px 0 0';
    }
}
