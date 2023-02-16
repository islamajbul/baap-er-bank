// step 01:
document.getElementById('btn-withdraw').addEventListener('click',function(){
  
    // step 02
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    // use paseFloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 03
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please input a valid number');
        return
    }
    
    // step 04
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);
    
    // step 05
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Insuficient Balance');
        return;
    }
    
    // step 06
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 07
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    
})