var gamblerhas = 100;
let counterOfBet = 0;
while(gamblerhas > 0  && gamblerhas < 200){
    let bet = Math.floor((Math.random() * 10 ) % 2 );
    counterOfBet++;
    switch(bet){
        case 1:
            gamblerhas = gamblerhas + 1;
            console.log(gamblerhas)
            break;
        case 0:
            if(gamblerhas < 0){
                gamblerhas = gamblerhas;
                break;
            }    
            gamblerhas = gamblerhas -1;
            break;
    }
    console.log(gamblerhas)
}
console.log("number of bet "+counterOfBet + " gambler has " +gamblerhas);