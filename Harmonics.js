let convertedValue
const { RSA_X931_PADDING } = require("constants");
const { constants } = require("crypto");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the limit of harmonic ", function(limitOftable){
    sumOfHarmonics = 0;
    for(let i=1; i <=limitOftable; i++ ){
       sumOfHarmonics += 1/i; 
    }
    console.log("the sum of harmonic is "+sumOfHarmonics);
    rl.close();  
});