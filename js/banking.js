// deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText);
    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    const currentDepositAmount = depositAmount + depositTotalAmount;
    depositTotal.innerText = currentDepositAmount;
    // update balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previoustotalAmount = parseFloat(totalBalanceText);
    const totalNewBalance = previoustotalAmount + depositAmount;
    totalBalance.innerText = totalNewBalance;
    // clear deposit input field
    depositInput.value = '';
});
// withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previouswithdrawText);
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText =  withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    const currentTotalWithdraw = withdrawInputAmount + previousWithdrawTotalAmount;
    withdrawTotal.innerText = currentTotalWithdraw;
    // update total balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    const currentTotalBalance = totalBalanceAmount - withdrawInputAmount;
    totalBalance.innerText = currentTotalBalance;    
    // clear withdraw input field
    withdrawInput.value = '';
});