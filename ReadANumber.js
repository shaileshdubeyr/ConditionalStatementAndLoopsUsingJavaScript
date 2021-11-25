const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the number ", function(number){
        let numbers = number; 
        console.log(number+" numbers "+numbers);  
        switch(numbers){
            case "1":
                console.log("Once");
                break;
            case "10":
                console.log("Tens");
                break;
            case "100":
                console.log("Hundreds");
                break;
            case "1000":
                console.log("Thousands");
                break;
            default:
                console.log("invalid input");
                break;
        }
        rl.close();
});