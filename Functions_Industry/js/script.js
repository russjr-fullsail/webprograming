//Russell Chatham Jr. 10/24/13 Functions Industry

//How much money was made designing ads this month

    var adsDesigned = prompt("How many ads were designed this month");
    //input for how many ads were designed

    var amountCharged = 125;
    //how many ads were designed * amount charged
    var dollars = adsDesigned * amountCharged

function adsSold (adsDesigned, amountCharged){
    var total = adsDesigned * amountCharged;
    return total

}

console.log("I created " + adsDesigned + " this month and made a total of $" + dollars);


if(dollars > 1000){
    console.log("I had a great month designing ads")
}else if(dollars >500 && dollars < 999){
    console.log("I need to try harder if I want to make this business work")
}

//Same as above but in ternary

var adsDesigned = prompt("How many ads were designed this month");
var dollars = adsDesigned * 125;
var total = dollars >1000 ? "I made $" + dollars + " I had a great month design ads" : "I made $" + dollars + " I need to try harder if I want to make this business work"
console.log(total);