const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter the  number ", function (number) {
    let numberlimit = 0;
    let powerOf=1;
    while (numberlimit <= number ) {
        numberlimit = Math.pow(2,powerOf)
        powerOf++;
        console.log(numberlimit);
    }
    rl.close();
}); 