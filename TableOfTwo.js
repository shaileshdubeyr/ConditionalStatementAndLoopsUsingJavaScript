let convertedValue
const { RSA_X931_PADDING } = require("constants");
const { constants } = require("crypto");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the limit number to print table", function(limitOftable){

    for(let i=1; i <=limitOftable; i++ ){
       let tableOf=  Math.pow(2,i);
        for(let j = 1; j<=10; j++){
            console.log(tableOf + " * " + j + " = "+(tableOf * j));
        }
    }
    rl.close();  
});