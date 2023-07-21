import { setProductsInCart } from "./produccts-in-cart.js";
import { getProductsInCart } from "./produccts-in-cart.js";
import { products } from "./state.js";

export function openShoppingfCartDialog() {
    const shoppingCartModalWindow = document.getElementById('shopping-cart_modal-window');
    shoppingCartModalWindow.style.display = 'block';
    printCartTableRows();
}

function printCartTableRows(){
    const tableBody = document.getElementById('cart-table-body');
    const producstIdInShoppingCart = getProductsInCart();
    const producstInShoppingCart = products.filter(element => producstIdInShoppingCart.includes(element.id));
    console.log(products);
    products.forEach(it =>
        tableBody.append(createTableRow(it.name, it.priceWithDiscount))
    );
}

//TODO fix functions order
function createTableRow(name, priceWithDiscount) {
    const tableRow = document.createElement('tr');
    tableRow.classList.add('cart-table-row');
    const tableDataCellForName = createTableDataCell('cart-table-cell-for-name', name);
    const tableDataCellForPrice = createTableDataCell('cart-table-cell-for-price', priceWithDiscount);
    tableRow.append(tableDataCellForName, tableDataCellForPrice);
    return tableRow;
}

function createTableDataCell(className, innerText) {
    const tableDataCell = document.createElement('td');
    tableDataCell.classList.add(className);
    tableDataCellForName.innerText = innerText;
    return tableDataCell;
}

export function closeShoppingCartDialog(event) {
    const shoppingCartModalWindow = document.getElementById('shopping-cart_modal-window');
    shoppingCartModalWindow.style.display = 'none';
    event.stopPropagation();
}

export function addProductInShoppingCart(id) {
    const producstInShoppingCart = getProductsInCart();
    producstInShoppingCart.push(id);
    setProductsInCart(producstInShoppingCart);
}