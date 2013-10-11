/**
 * Created by russjr on 10/10/13.
 */
//Expressions

var a = 2;
a + 3; //add 3 to a
b = a + 3;
console.log(b);

//Expressions - Age Example

var yearBorn = 1974
var age = 2013 - yearBorn
console.log(age)

//Expressions - Arithmetic Operators

//area of triangle is half the width times the height

var width = 4;
var height = 5;

var area = width * height/2;
console.log(area);

//Expressions - Modulo Operator

var remainder = 32 % 10;
console.log(remainder)

//Expressions - Order of Operation

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// the average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average)
//average

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter)

//Expressions - Using Arrays in Expressions
var orangeBin = [234, 576, 883];

var total = orangeBin[0] + orangeBin[1] + orangeBin[2];
console.log(total)