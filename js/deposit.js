// step 01: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 02: get deposit the amount from input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    // step 03: get the current total deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
})