let convertedValue
const { RSA_X931_PADDING } = require("constants");
const { constants } = require("crypto");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateUnit(userInput){
    //feet value
    let feet = 35; 

    //inches values
    let inch = 12; 
    let Feet_To_Inch = 1;
    let Feet_To_Meter = 2;
    let Inch_To_Feet = 3;
    let Meter_To_Feet = 4;
    switch(parseInt(userInput)){
    case Feet_To_Inch:
        convertedValue =feet*12;
        console.log(convertedValue+ "inch");
        break;
    case Feet_To_Meter :
            convertedValue =feet*0.3048;
            console.log(convertedValue+ "Meter");
            break; 
    case Inch_To_Feet:
            convertedValue =inch/12;
            console.log(convertedValue+ "Feet");
            break;  
    case Meter_To_Feet:
        convertedValue=inch/.03048
        console.log(convertedValue+ "Feet"); 
        break;
    default :
        console.log("invalid input");
    }
}

rl.question("enter the number ", function(userInput){
    console.log("enter the 1. feet to inch 2. feet to meter 3. inch to feet 4 meter to feet")
    calculateUnit(userInput);
    rl.close();  
});