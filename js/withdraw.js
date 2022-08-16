document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('Javascipt is worked')

    const withDrawField = document.getElementById('input-withdraw');
    const newWithDrawAmmountString = withDrawField.value;
    const newWithDrawAmmount = parseFloat(newWithDrawAmmountString);
    if (newWithDrawAmmountString < 5) {
        alert('কিপটামি বাদ দে মিনিমাম ৫টাকা তোল।');
        return;
    }


    // step-3 ===============
    const withDrawTotalElement = document.getElementById('withdraw');
    const previousWithDrawTotalString = withDrawTotalElement.innerText;
    const previousWithDrawTotal = parseFloat(previousWithDrawTotalString);


    // step-5 ===============
    const balanceTotal = document.getElementById('balance');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    if (newWithDrawAmmount > previousBalance) {
        alert("তোর বাপ দাদার এত সম্পত্তি নাই। এইবার পথে বসে যা।")
        return;
    }

    // step-4 ===============
    const currentWithDrawTotal = previousWithDrawTotal + newWithDrawAmmount;
    withDrawTotalElement.innerText = currentWithDrawTotal;

    // step-6 ================
    const newBalanceTotal = previousBalance - newWithDrawAmmount;
    balanceTotal.innerText = newBalanceTotal;


    // step=7 ================
    withDrawField.value = '';
})

