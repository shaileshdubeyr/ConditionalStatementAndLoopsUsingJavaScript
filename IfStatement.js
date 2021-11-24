let firstValue = Math.floor(Math.random() * 10 + 1000);
let secondValue = Math.floor(Math.random() * 10 + 1000);
let thirdValue = Math.floor(Math.random() * 10 + 1000);

if(firstValue > secondValue && firstValue > thirdValue){
    console.log("the first value is grater " + firstValue);
}
if(secondValue > firstValue && secondValue > thirdValue){
    console.log("the second value is grater " + secondValue);
}else{
    console.log("the third value is grater " + thirdValue);
}