const phnMinusBtn = document.getElementById('phn-minus');
const phnPlusBtn = document.getElementById('phn-plus');
const phnQuantity = document.getElementById('phn-quantity');
const phnResetBtn = document.getElementById('phn-counter-reset');
const phnPrice = 1219;
const phnTotalPrice = document.getElementById('phn-total-price');
const caseMinusBtn = document.getElementById('case-minus');
const casePlusBtn = document.getElementById('case-plus');
const caseQuantity = document.getElementById('case-quantity');
const caseTotalPrice = document.getElementById('case-total-price');
const caseResetBtn = document.getElementById('case-counter-reset');
const casePrice = 59;
const subtotalPrice = document.getElementById('sub-total');
const totalTax = document.getElementById('total-tax');
const totalPrice = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');


function phnReset () {
    phnQuantity.value = 0;
    phnTotalPrice.innerText = 0;
    subtotalPrice.innerText = caseTotalPrice.innerText;
    totalTax.innerText = (parseFloat(caseTotalPrice.innerText) * 0.1).toFixed(2);
    totalPrice.innerText = parseFloat(caseTotalPrice.innerText) + parseFloat(totalTax.innerText);
}

function caseReset () {
    caseQuantity.value = 0;
    caseTotalPrice.innerText = 0;
    subtotalPrice.innerText = phnTotalPrice.innerText;
    totalTax.innerText = (parseFloat(phnTotalPrice.innerText) * 0.1).toFixed(2);
    totalPrice.innerText = parseFloat(phnTotalPrice.innerText) + parseFloat(totalTax.innerText);
}

function changeCounter (quantity , price , totalPrice , willIncrease) {
    const oldQuantity = quantity.value;
    const oldTotalPrice = totalPrice.innerText;
    let newQuantity;
    if(willIncrease === true) {
        const newQuantity = parseInt(oldQuantity) + 1;
        quantity.value = newQuantity;
        const newTotalPrice = parseFloat(oldTotalPrice) + parseFloat(price);
        totalPrice.innerText = newTotalPrice;
    }
    else {
        if(quantity.value > 0) {
        const newQuantity = parseInt(oldQuantity) - 1;
        quantity.value = newQuantity;
        const newTotalPrice = parseFloat(oldTotalPrice) - parseFloat(price);
        totalPrice.innerText = newTotalPrice;
        }
        else {
            newQuantity = 0;
        }
    }
}


function totalAmount () {
    subtotalPrice.innerText = parseFloat(phnTotalPrice.innerText) + parseFloat(caseTotalPrice.innerText);
    totalTax.innerText = (parseFloat(subtotalPrice.innerText) * 0.1).toFixed(2);
    totalPrice.innerText = parseFloat(subtotalPrice.innerText) + parseFloat(totalTax.innerText);
}

checkoutBtn.addEventListener('click' , function () {
    alert("Sorry dude it's not real");
})
