//Russell Chatham Jr 10/17/13 Conditionals Assignment - Conditionals Wacky

//Can I buy a new Jeep

var jeepCost = 32000;
var bankAccountTotal = prompt("Please enter how much is currently in your bank account:\n(Please enter as dollar value. i.e. 498.02)");
var monthsUntilIBuy = prompt("Please enter how many months before you buy new Jeep:");
var monthlyIncome = prompt("Please enter your monthly income :\n(Please enter as dollar value. i.e. 498.02)");

//formula for calculating
var checkUntilJeep = monthsUntilIBuy * monthlyIncome;
var checkPlusBankAccount = parseInt(bankAccountTotal) + parseInt(monthsUntilIBuy);

//Using conditionals we can determine if a new Jeep is possible in the amount of time given