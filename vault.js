// ======================= Deposit ============================

document.getElementById('btn-deposit').addEventListener('click', function () {
    const dpInpFld = document.getElementById('dp-inp-fld');
    const dpAmountString = dpInpFld.value;
    const dpAmount = parseFloat(dpAmountString);
    dpInpFld.value = '';

    if (isNaN(dpAmount)) {
        alert('Please enter a decimal value');
        return
    }
    // if(typeof dpAmount !== 'number'){
    //     alert('Please enter a decimal value');
    //     console.log('If', dpAmount);
    // }
    // else{
    //     console.log('Else', dpAmount);
    //     console.log(typeof dpAmount);
    // }

    const dpTotalFld = document.getElementById('dp-total')
    const dpTotalString = dpTotalFld.innerText;
    const dpTotal = parseFloat(dpTotalString);

    dpTotalFld.innerText = dpAmount + dpTotal;


    const totalFld = document.getElementById('total')
    const totalString = totalFld.innerText;
    const total = parseFloat(totalString);

    totalFld.innerText = dpAmount + total;

    alert('Success!')
})

// ======================= Withdraw =============================

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const wdInpFld = document.getElementById('wd-inp-fld');
    const wdAmountString = wdInpFld.value;
    const wdAmount = parseFloat(wdAmountString);
    wdInpFld.value = '';

    if (isNaN(wdAmount)) {
        alert('Please enter a decimal value');
        return
    }

    const wdTotalFld = document.getElementById('wd-total')
    const wdTotalString = wdTotalFld.innerText;
    const wdTotal = parseFloat(wdTotalString);

    const totalFld = document.getElementById('total')
    const totalString = totalFld.innerText;
    const total = parseFloat(totalString);

    if (wdAmount > total) {
        alert("Can not withdraw more than " + total);
        return
    }

    wdTotalFld.innerText = wdAmount + wdTotal;
    totalFld.innerText = total - wdAmount;
    alert('Withdraw Success!')

})

const product = 5; 
const price = "7"; 
const subTotal = product * price; 
const tax = subTotal/10; 
const total = subTotal + tax; 
const category="pen"; const performer = category+"-teller";

