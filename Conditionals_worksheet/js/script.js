//Russell Chatham Jr. 10/17/13 Activity: Conditionals Worksheet

//Celsius to Fahrenheit converter
/*var userInput = prompt ("Please choose C or F")

var userInput1 =("c");
var userInput2 =("f");
var f =32;
c=5/9*(f-32);
var c =100;
f= c * 9/5 + 32;
if(userInput1 = c){
}else{
    (userInput2 = f)
}
console.log("The temperature is", c + "", "degrees Celsius");
console.log("The temperature is", f + "", "degrees Fahrenheit");
*/
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
}


