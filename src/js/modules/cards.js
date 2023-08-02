import { addProductInShoppingCart } from "./event-handlers.js";
import { MINUS, PROSENTAGE, CURRENCY_BYN_CODE } from "./const.js";

export function printCards(productsArray) {
    const shoppingCardWrapper = document.getElementById('shopping-card_wrapper');
    for (let i = 0; i < 10; i++) {
        const card = createCard(productsArray[i], 'mainCard', 'main-card-image');
        shoppingCardWrapper.append(card);
    }
}

export function printFoundCards(searchDialog, foundCardArray) {
    foundCardArray.forEach(element => searchDialog.append(createCard(element, 'found-card', 'found-card-image')));
}

function createCard(product, className, imgClassName) {
    const card = document.createElement('div');
    card.classList.add(className);
    card.setAttribute('id', product.id);
    const imageParent = createCardImage(product.picture, imgClassName);
    const discountSection = createCardDiscountSection(product.discount, product.id);
    const priceSection = createCardPriceSection(product.price, product.priceWithDiscount);
    const nameSection = createProductNameSection(product.name);
    card.append(imageParent, discountSection, priceSection, nameSection);
    return card;
}

function createCardImage(pictureUrl, className) {
    const imageParent = document.createElement('div');
    imageParent.classList.add(className);
    const image = document.createElement('img');
    image.setAttribute('src', pictureUrl);
    image.setAttribute('alt', 'product');
    imageParent.append(image);
    return imageParent;
}

function createCardDiscountSection(discount, id) {
    const discountSection = document.createElement('div');
    discountSection.classList.add('discount-section');
    const discountSpan = document.createElement('span');
    discountSpan.classList.add('discount');
    discountSpan.innerText = MINUS + discount + PROSENTAGE;
    discountSection.append(discountSpan, createShoppingCart(id));
    return discountSection;
}

function createShoppingCart(id) {
    const shoppingCart = document.createElement('span');
    shoppingCart.classList.add('cards-shopping-cart');
    shoppingCart.innerHTML = '<i class="fa-solid fa-basket-shopping"></i>';
    shoppingCart.addEventListener('click', () => addProductInShoppingCart(id));
    return shoppingCart;
}

function createCardPriceSection(price, priceWithDiscount) {
    const priceSection = document.createElement('div');
    priceSection.classList.add('price-section');
    const priceSpan = document.createElement('span');
    priceSpan.classList.add('price');
    priceSpan.innerText = price + CURRENCY_BYN_CODE
    ;
    const priceWithDiscountSpan = document.createElement('span');
    priceWithDiscountSpan.classList.add('prace-with-discount');
    priceWithDiscountSpan.innerText = priceWithDiscount + CURRENCY_BYN_CODE;
    priceSection.append(priceWithDiscountSpan, priceSpan);
    return priceSection;
}

function createProductNameSection(name) {
    const nameSection = document.createElement('div');
    nameSection.classList.add('product-name');
    nameSection.innerText = name;
    return nameSection;
}
