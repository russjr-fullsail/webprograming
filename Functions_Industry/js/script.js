//Russell Chatham Jr. 10/24/13 Functions Industry

//How much money was made designing ads this month

    var adsDesigned = prompt("How many ads were designed this month");
    //input for how many ads were designed

    var amountCharged = 125;
    //how many ads were designed * amount charged

function adsSold(adsDesigned, amountCharged){
    var dollars = adsDesigned * amountCharged;
return dollars;
}

console.log("I created " + adsDesigned + " this month and made a total of $" + amountCharged);

if(amountCharged > 1000){
    console.log("I had a great month designing ads");
}else if(amountCharged >500 && amountCharged < 999){
    console.log("I need to try harder if I want to make this business work");
}