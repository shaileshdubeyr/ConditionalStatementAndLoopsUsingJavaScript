const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the first number ", function(numberOne) {
    rl.question("enter the second number ", function(numberTwo) {
        rl.question("enter the third number ", function(numberThree) {
            let operationOne = numberOne + numberTwo * numberThree;
            let operationTwo = numberThree + numberOne / numberTwo;
            let operationthree = numberOne % numberTwo + numberThree;
            let operationFour = numberOne * numberTwo + numberThree; 
            console.log("the first operation is " + operationOne);
            console.log("the first operation is " + operationTwo);
            console.log("the first operation is " + operationthree);
            console.log("the first operation is " + operationFour);
            if(numberOne > numberTwo && numberOne > numberThree){
                console.log("the number one is grater " + numberOne);
            } else if(numberTwo > numberOne && numberTwo > numberThree){
                console.log("the number two is grater " + numberTwo);
            }else{
                console.log("the number three is grater " + numberThree);
            }
            rl.close();
        });
    });
});
        