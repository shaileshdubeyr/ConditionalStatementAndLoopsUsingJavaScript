const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the DAY ? ", function(day) {
   rl.question("enter the MONTH ? ", function(month) {
        if( (`${day}` > 1 && `${day}` <=20 ) && ( `${month}` > 2 && `${month}` <= 6 ) ){
            console.log("true");
        }else{
            console.log("false");
        }
        console.log(`the day is " ${day}, the month is ${month}`);
        rl.close();
    });
});