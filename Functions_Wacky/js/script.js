//Russell Chatham Jr. 10/24/13 Functions Wacky

//Ramp Travel Index Score or RTI Score

var rti = calcTravel(35, 119, 30) //parameter1 is distance up ramp, parameter2 is wheelbase parameter3 is angle

function calcTravel(dist, wheelBase, angle){

    var rti = wheelBase/dist * angle/1000;
    return rti
    //Return RTI Score
}
console.log("This is your Ramp Travel Index " + rti + " score");//This is the result on the RTI Ramp


