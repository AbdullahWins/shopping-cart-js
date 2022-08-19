//phn

phnPlusBtn.addEventListener('click' , function() {
    changeCounter(phnQuantity , phnPrice , phnTotalPrice , true);
    totalAmount();
});
phnMinusBtn.addEventListener('click' , function() {
    changeCounter(phnQuantity , phnPrice , phnTotalPrice , false);
    totalAmount();
});


phnResetBtn.addEventListener('click' , function() {
    phnReset ();
})