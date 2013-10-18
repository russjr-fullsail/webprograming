//Russell Chatham Jr. 10/17/13 Activity: Conditionals Worksheet

//Last chance for gas

/*var eff = 8;
var read = .75;
var tank = 5;
var distance = 200;
//Calculate how much gas is left
if(tank / read * eff > distance){
//If gas tank is lower than distance left stop for gas
console.log("Yes, you can make it without stopping for gas!")
}else{
//if more gas is need for distance to travel than stop for gas
console.log("You only have", "" + tank, "of gas left in your tank, better get gas now while you can");
}

//Check the Login

var userInput = prompt ("Enter username");
var userInput2 = prompt ("Enter password");
if(userInput == "Russ" && userInput2 == "webmaster"){
console.log ("Welcome", userInput);
}if(userInput != "Russ"){
    console.log("User not found, Try again");
}
if(userInput2 != "webmaster"){
    console.log("Password does not match our records");
}*/

//Movie Ticket Prices

//movie ticket prices ar $12.00 but if you are over 55 or under 10 you get discount price of $7.00  If customer is seeing movie between 3 and 5 also get discounted ticket

var age = 9;
var senDiscount = 55;
var kidDiscount = 10;
var timeDiscount = 3 && 5;
var movieTime = 3;
var disPrice = 7;
var fullPrice = 12;

if(age < kidDiscount || age > senDiscount || movieTime == timeDiscount){
    console.log("The ticket price is", + "" + (disPrice));
}else{
    console.log("The ticket price is", + "" + (fullPrice));
}




