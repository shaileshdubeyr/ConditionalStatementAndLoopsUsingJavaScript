let numner = Math.floor( ( (Math.random() * 10 ) % 7) + 1 );

if(numner == 1){
    console.log("sunday");
}else if(numner == 2){
    console.log("monday");
}else if(numner == 3){
    console.log("tuesday");
}else if(numner == 4){
    console.log("wednesday");
}else if(numner == 5){
    console.log("thursday");
}else if(numner == 6){
    console.log("friday");
}else if(numner == 7){
    console.log("saturday");
}
else{
    console.log("invalid number");
}