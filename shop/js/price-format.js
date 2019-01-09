'use strict'

function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function addProduct() {
  const cartCount = document.querySelector('#cart-count');
  const cartTotalPrice = document.querySelector('#cart-total-price');
  const price = parseInt(this.dataset.price);

  let cartCountValue = parseInt(cartCount.textContent);
  let cartTotalPriceVal = parseInt(cartTotalPrice.textContent.replace(' ',''));
  let totalSumVal = cartTotalPriceVal + price;

  cartCount.textContent = + +cartCountValue;
  cartTotalPrice.textContent = getPriceFormatted(totalSumVal); 
}

function init() {
  const goods = document.querySelectorAll('.box');

  for (const good of goods) {
    good.querySelector('button.add').addEventListener('click', addProduct);
  }
}

document.addEventListener('DOMContentLoaded', init);
