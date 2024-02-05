document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawField = document.getElementById('user-withdraw');
    const withdraw = parseFloat(withdrawField.value);
    // console.log(withdraw);

    const withdrawElement = document.getElementById('total-withdraw');
    const totalWithdraw = parseFloat(withdrawElement.innerText);
    // console.log(totalWithdraw);

    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceElement.innerText);
    // console.log(totalBalance);

    if(withdrawField.value === '') {
        alert('Please insert amount');
        return;
    }

    if(totalBalance >= withdraw) {
        const withdrawAmount = totalWithdraw + withdraw;
        withdrawElement.innerText = withdrawAmount.toFixed(2);

        const totalAmountBlance = totalBalance - withdraw;
        totalBalanceElement.innerText = totalAmountBlance.toFixed(2);
    }else {
        alert('Your balance is insufficient');
    }

    withdrawField.value = '';
})