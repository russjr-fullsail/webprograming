//Russell Chatham Jr. 10/17/13 Conditionals Assignment Conditionals Industry

//Hours available to run my own business

//hours
var time = 30;
var hoursInDay = 24;
var daysAvailable = 7;
var workHours = 9;
var workDays = 5;
var sleep = 4;

//calculate hours I can spend building my own business
var hoursTotal = (hoursInDay * daysAvailable);
var sleepTime = (sleep * daysAvailable);
var work = (workHours * workDays);
//if total hours are less than time, I can work on building my business
if (sleepTime + work + hoursTotal < time){
    console.log("I have enough time to work on my business")
}else if(time < hoursTotal + sleepTime){
    console.log("I can sleep less to get the job done")
}else{
    //I don't have enough time
    console.log("I need to make time")
}


