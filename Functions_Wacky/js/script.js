//Russell Chatham Jr. 10/24/13 Functions Wacky

//Ramp Travel Index Score or RTI Score

var rti = calcTravel(42, 119)

function calcTravel(dist, wheelBase){

    var rti = dist/wheelBase * 1000;
    return rti
    //Return RTI Score
}
console.log("This is your Ramp Travel Index " + rti + " score")


