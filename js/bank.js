document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositeField = document.getElementById('input-deposit');
    const newDepositAmount = depositeField.value;
    const newDeposit = parseFloat(newDepositAmount);
    if (newDepositAmount < 10) {
        alert('বেটা এতো কম দিলে হবে নাকি মিনিমাম ১০ টাকা জমা দে।')
        return;
    }

    const depositTotalElement = document.getElementById('deposit');
    const previousDepositeTotalString = depositTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const currentDepositTotal = previousDepositeTotal + newDeposit;


    depositTotalElement.innerText = currentDepositTotal;

    // Main Balance ---------
    const mainBalance = document.getElementById('balance');
    const previousBalanceString = mainBalance.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalanceTotal + newDeposit;

    mainBalance.innerText = currentBalanceTotal;

    depositeField.value = '';
    // depositValue.value + viewDeposit
})