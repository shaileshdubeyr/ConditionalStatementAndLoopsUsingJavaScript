let convertedValue
const { RSA_X931_PADDING } = require("constants");
const { constants } = require("crypto");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the limit of harmonic ", function(limitOfPrimeNumber){
    console.log("the prime numbers are");
    
    let count = 0;
    for(let perimeOrNot = 2; perimeOrNot <=limitOfPrimeNumber; perimeOrNot++ ){
       for(let checkPrime = 1; checkPrime <= perimeOrNot; checkPrime++){
           if(perimeOrNot % checkPrime == 0){
               count++
           }
       }
       if(count == 2){
           console.log(perimeOrNot);
       }
       count = 0;
    }
    rl.close();  
});