//Russell Chatham Jr 10/17/13 Conditionals Assignment - Conditionals Wacky

//Can I buy a new Jeep
//setup user input prompts
var jeepCost = 32000;
var bankAccountTotal = prompt("Please enter total in your bank account:\n(Please enter as dollar value.)");
var monthsUntilIBuy = prompt("Please enter how many months before you buy new Jeep:");
var monthlyIncome = prompt("Please enter your monthly income :\n(Please enter as dollar value.)");

//variables to come up with results
var checkUntilJeep = monthsUntilIBuy * monthlyIncome;
var checkPlusBankAccount = parseInt(bankAccountTotal) + parseInt(checkUntilJeep);

//Using conditionals we can determine if a new Jeep is possible in the amount of time given
if (checkPlusBankAccount > jeepCost) {
    console.log("You can afford to buy the new Jeep with" + "" + monthsUntilIBuy + " months extra saved, that you can use to buy upgrades!")
}else{
    //else tells the user it's better to wait or save more money
    console.log("Sorry, you do not have enough money to buy the new jeep.  Please save more money.")
}