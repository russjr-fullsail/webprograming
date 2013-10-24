//Russell Chatham Jr. 10/24/13 Functions Personal

//Square Foot of upstairs rooms
//room 1 width and length
var widthRoom1 = prompt ("What is the width of Room 1");
//enter width of room 1
var lengthRoom1 = prompt ("What is the length of Room 1");
//enter length of room 1
var totalRoom1 = calcArea(widthRoom1, lengthRoom1);
//total sq.ft. of room 1

//room 2 width and length
var widthRoom2 = prompt ("What is the width of Room 2");
//enter width of room 2
var lengthRoom2 = prompt ("What is the length of Room 2");
//enter length of room 2
var totalRoom2 = calcArea(widthRoom2, lengthRoom2);
//total sq.ft of room 2

//room 3 width and length
var widthRoom3 = prompt ("What is the width of Room 3");
//enter width of room 3
var lengthRoom3 = prompt ("What is the length of Room 3");
//enter length of room 3
var totalRoom3 = calcArea(widthRoom3, lengthRoom3);
//total sq.ft. of room 3

//room 4 width and length
var widthRoom4 = prompt ("What is the width of Room 4");
//enter width of room 4
var lengthRoom4 = prompt ("What is the length of Room 4");
//enter length of room 4
var totalRoom4 = calcArea(widthRoom4, lengthRoom4);
//total sq.ft. of room 4
var totalSqOfRooms = totalRoom1 + totalRoom2 + totalRoom3 + totalRoom4;
//set the function

function calcArea (width, length){//function
    var area = width * length;//formula for function
    return area;//return for function
}

console.log(totalSqOfRooms + " is the total sq. ft. of the 4 rooms")
//total of square footage  for all 4 rooms combined

