document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('user-deposit');
    const depositString = depositField.value;
    const deposit = parseFloat(depositString)
    // console.log(deposit);

    const depositElement = document.getElementById('total-deposit');
    const totalDepositString = depositElement.innerText;
    const totalDeposit = parseFloat(totalDepositString)
    // console.log(totalDeposit);

    if (depositString == '') {
        alert('Please insert amount')
        return;
    } else if (deposit < 1) {
        alert('Please give positive value');
        return;
    }

    const totalDepositAmount = deposit + totalDeposit;
    depositElement.innerText = totalDepositAmount.toFixed(2);

    const totalElement = document.getElementById('total-balance');
    const totalBalanceString = totalElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    totalElement.innerText = totalBalance + deposit;

    depositField.value = '';
})

