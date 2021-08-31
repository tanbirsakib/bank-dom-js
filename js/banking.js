// adding event lister to depositbutton 
document
    .getElementById("deposit-button")
    .addEventListener("click", function () {
        //   updating deposit clicking deposit button
        const depositInput = document.getElementById("deposit-input");
        const depositAmmount = parseFloat(depositInput.value);
        const depositTotal = document.getElementById("deposit-total");
        const previousDeposit = parseFloat(depositTotal.innerText);
        depositTotal.innerText = depositAmmount + previousDeposit;
        //uapdating balance clicking deposit button
        const currentBalance = document.getElementById("balance-total");
        const currentTotalBalance = parseFloat(currentBalance.innerText);
        currentBalance.innerText = currentTotalBalance + depositAmmount;
        // clear deposit input field
        depositInput.value = "";
    });

// adding event lister to witdhdraw button    
document
    .getElementById("withdraw-button")
    .addEventListener("click", function () {
        //   updating deposit clicking deposit button
        const withdrawInput = document.getElementById("withdraw-input");
        const withdrawAmmount = parseFloat(withdrawInput.value);
        const withdrawTotal = document.getElementById("withdraw-total");
        const previousDeposit = parseFloat(withdrawTotal.innerText);
        withdrawTotal.innerText = withdrawAmmount + previousDeposit;
        //uapdating balance clicking deposit button
        const currentBalance = document.getElementById("balance-total");
        const currentTotalBalance = parseFloat(currentBalance.innerText);
        currentBalance.innerText = currentTotalBalance - withdrawAmmount;
        // clear deposit input field
        withdrawInput.value = "";
    });    