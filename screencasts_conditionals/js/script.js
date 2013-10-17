//Russell Chatham Jr 10/16/13 Screencast Conditionals

//Conditional Logic Concepts

sunny=true;
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