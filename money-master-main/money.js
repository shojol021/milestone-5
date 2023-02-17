function getValue(id, inp) {
    const inpFld = document.getElementById(id);
    if (inp === true) {
        const inpValueString = inpFld.value;
        const inpValue = parseFloat(inpValueString);
        // console.log(inpValue);
        if (isNaN(inpValue)) {
            alert('Please enter a decimal value for ' + id);
            return
        }
        return inpValue;
    }
    else {
        const inpValueString = inpFld.innerText;
        const inpValue = parseFloat(inpValueString);
        // console.log(inpValue);
        return inpValue;
    }
}

let income;
document.getElementById('btn-calculate').addEventListener('click', function () {
    income = getValue('income', true);
    const food = getValue('food', true);
    const rent = getValue('rent', true);
    const cloth = getValue('cloth', true);

    const expense = getValue('expense');
    const balance = getValue('balance');

    const newExpense = food + rent + cloth;
    if (income < newExpense) {
        alert('You can spend more than balance');
        return
    }
    newBalance = income - newExpense;

    document.getElementById('expense').innerText = newExpense;
    document.getElementById('balance').innerText = newBalance;

})

document.getElementById('btn-save').addEventListener('click', function () {

    const savePercent = getValue('save', true);
    if (savePercent > 100) {
        alert('You can not save more than balance');
        return
    }
    
    const saving = income * (savePercent * 0.01);
    console.log(saving);
    const remBalance = newBalance - saving;
    if (remBalance < 0) {
        alert('You can not save more than balance ' + newBalance);
        return
    }

    document.getElementById('saving').innerText = saving;
    document.getElementById('rem-balance').innerText = remBalance;
})


// surge: vivacious-cactus.surge.sh