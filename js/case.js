//case

casePlusBtn.addEventListener('click' , function() {
    changeCounter(caseQuantity , casePrice , caseTotalPrice , true);
    totalAmount();
});
caseMinusBtn.addEventListener('click' , function() {
    changeCounter(caseQuantity , casePrice , caseTotalPrice , false);
    totalAmount();
});

caseResetBtn.addEventListener('click' , function() {
    caseReset ();
})