//Russell Chatham Jr 10/16/13 Screencast Conditionals

//Conditional Logic Concepts

/*sunny=true;
if(sunny){
  goToTheBeach();
}

if(sunny){
    goToTheBeach();
}else{
    goToTheMovies();
}

//Logic Concepts

if(temp >70){
    goToTheBeach();
}

if(temp ==75){
    goToTheBeach();
}

//Nesting Conditionals

if(sunny){
    goToTheBeach();
}else{
    goToTheMovies();
}

if(warmWater){
    wearNewSuit();
}

if(sunny){
    goToTheBeach();

    if(warmWater){
        wearNewSuit();
    }
}else{
    goToTheMovies();
}

//Conditionals Example

var oldEnough = true;
//if the child is old enough, print to the console "you can ride!"

if(oldEnough){
   //code performed if condition is true
    console.log("You can ride the coaster!");
}

//Relational Expressions

var kidHeight = 40;
var minHeight = 48;
//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}

//Condition with Expression

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;
//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}

//If and else

var kidHeight = 50;
var minHeight = 48;
//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else{
    //code performed if condition is false
    console.log("Sorry kid, you've got some growing to do first!");
}

//Else if

var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45;//the height of the kid with the parent
//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight > minHeight){
    //you can ride!
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present");
}else{
    //sorry you have some growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}

//Logical Operators

var budget =100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget AND our paycheck is over than 300
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}

//Ternary Operators

var gpa = 48;

//if the gpa is over the min 2.0 score, the student can graduate
if(gpa > 2.0) {
    console.log("You can graduate");
}else{
    console.log("GPA is too low!");
}

var gpa = 48;

//if the gpa is over the min 2.0 score, the student can graduate

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low!");
*/

var age = 8;
var book;

//if the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
book = (age <10) ? "Green Eggs and Ham" : "The Time Machine"
console.log(book);

