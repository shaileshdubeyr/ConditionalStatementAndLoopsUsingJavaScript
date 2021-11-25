
let head = 0
let tail = 0;
while(head < 11 &&  tail < 11){
    let coinflip = Math.floor((Math.random() * 10 ) %2 );
    switch(coinflip){
        case 1:
            head++;
            break;
        case 0:
            tail++;
            break;
        default :
            console.log("the value is invalid");
    }
}
if(head == 11){
    console.log("Head wins");
}else{
    console.log("Tail wins")
}
console.log("the count of head and tail is :-  head :-" + head +" ,tail :-" + tail );

