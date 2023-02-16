// step 01: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 02: get deposit the amount from input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step 03: get the current total deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step 04: After adding total deposit balance
    const currentDepositTotal = previousDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDepositTotal;

    // step 05: get current total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 06:calculate current balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 07
    depositField.value = '';
})