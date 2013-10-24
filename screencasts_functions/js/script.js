//Russell Chatham Jr. 10/23/13 Screencasts Functions

//Basic Function Structure

function functionName(){
    //code the function runs
}

function outptMsg(){
    console.log("Hello World");
}

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

//Function Invocation

function outptMsg(){
    console.log("Hello World");
}

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();
calcArea();
calcArea();

//Variable Scope

var width = 5;
function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height
    //console.log(area)
}

calcArea();
console.log(width);

//Arguments and Parameters

/*function (argument1, argument2);

function funcName(parameter1, parameter2){
    //code the function runs
}

calcArea(30,20);
function calcArea(w, h){
    var area = w * h;
    console.log(area);
}

function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old");
}
var age1 = 4;
dogYears(age1);
dogYears(5);*/

//Returning Values

var total = calcArea(30,20);

function calcArea(w, h){
    var area = w * h;
    return area; //function spitting the info out
}
console.log(total);



