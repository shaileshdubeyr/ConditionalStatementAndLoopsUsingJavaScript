const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

degreeToFerinhet(value);{

    if (value >= 0 && value <= 100) {
        result = (parseFloat(value) * (9 / 5)) + 32;
    } else {
        console.log("Enter value between 0-100");
    }
}
ferinheitToDegree(value){
    if (value >= 32 && value <= 212) {
        result = (parseFloat(value) - 32) * (5 / 9);
    } else {
        console.log("Enter value between 32-212");
    }
}
        
rl.question("enter enter 0 to degree to Feinheit 1 to convert F to Degree c and  ", function (number) {
    switch (number) {
        case 0:
            rl.question("enter the value for conversion ", function (number) {
                degreeToFerinhet(number);
            });
        case 1:
            rl.question("enter value to conversion ", function (number) {
                ferinheitToDegree(number)
            });
        default:
            console.log("invalid inpur");
    }
    rl.close();
});