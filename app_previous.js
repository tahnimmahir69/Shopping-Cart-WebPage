//first video
document.getElementById('case-plus').addEventListener('click', function () {
    // console.log('case plus clicked');
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    //console.log(caseNumber)
    //input value increment
    caseInput.value = parseFloat(caseNumber) + 1;
});

document.getElementById('case-minus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    //input decrement kortachi
    caseInput.value = parseFloat(caseNumber) - 1;
})
//-------------End---------

//-------2nd part--------

function updateProductNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    let caseNumber = caseInput.value; // jeheto const ar man reset hoi   tai let use kore hoiche

    if (isIncreasing == true) {
        caseNumber = parseFloat(caseNumber) + 1;
    }
    //jate 0 ar kom na hoi minus ar kaj
    else if (caseNumber > 0) {
        caseNumber = parseFloat(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    //update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;

}

document.getElementById('case-plus').addEventListener('click', function () {
    //perameter
    updateProductNumber(true);

});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber(false);

});

//------------End-----------------


//------------------------3rd part -----------------------------

//aiikane product=> (Phone & case) input kortachi & price ar vitor product ar pricce input dicci

function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');  //id ke 2 vag korchi => (product + '-number')

    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseFloat(productNumber) + 1;
    }

    else if (productNumber > 0) {
        productNumber = parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;

}

//phone increase and decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    //console.log('clickedplis')

    //product, price,perameter
    updateProductNumber('phone', 1239, true)
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1239, false);
})

//handle case increase & decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    //product, price,perameter
    updateProductNumber('case', 59, true);

});

document.getElementById('case-minus').addEventListener('click', function () {
    //product, price,perameter
    updateProductNumber('case', 59, false);

})

//--------------- END--------------------


//-------------------------------4th--------------------------------------

//aiikane product=> (Phone & case) input kortachi & price ar vitor product ar pricce input dicci

function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');

    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseFloat(productNumber) + 1;
    }

    else if (productNumber > 0) {
        productNumber = parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;

    //calculate subTotal
    calculateTotal();

}

function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(phoneInput.value);
    // retrun koprchi laron=> kono akta function thaka value inye jokon (*-+/) korte hobe tai && onna somoy function ke retrun na korle o hoi
    return productNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    //console.log(subTotal)
    const tax = subTotal / 10; //joto tk hoi tar 10% tax
    const totalPricce = subTotal + tax;

    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPricce;
}

//phone increase and decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    //console.log('clickedplis')
    updateProductNumber('phone', 1219, true)
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

//handle case increase & decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    //product, price,perameter
    updateProductNumber('case', 59, true);

});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

})

//----------------END-------------------------------------