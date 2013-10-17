//Russell Chatham Jr 10/16/13 Screencast Conditionals

//Conditional Logic Concepts

/**sunny=true;
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
}**/

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
