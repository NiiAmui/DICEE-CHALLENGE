let randomNumber1 = Math.floor((Math.random()*6)+1)
let randomNumber2 = Math.floor((Math.random()*6)+1)
let imageHandler1 = document.querySelector('.img1')
let imageHandler2 = document.querySelector('.img2')

let result = document.querySelector('h1')

switch (randomNumber1){
    case 1:
        imageHandler1.setAttribute('src','images/dice1.png')
    break;

    case 2:
        imageHandler1.setAttribute('src','images/dice2.png')
    break;

    case 3:
        imageHandler1.setAttribute('src','images/dice3.png')
    break;

    case 4:
        imageHandler1.setAttribute('src','images/dice4.png')
    break;

    case 5:
        imageHandler1.setAttribute('src','images/dice5.png')
    break;

    default:imageHandler1.setAttribute('src','images/dice6.png')
    break;
}


switch (randomNumber2){
    case 1:
        imageHandler2.setAttribute('src','images/dice1.png')
    break;

    case 2:
        imageHandler2.setAttribute('src','images/dice2.png')
    break;

    case 3:
        imageHandler2.setAttribute('src','images/dice3.png')
    break;

    case 4:
        imageHandler2.setAttribute('src','images/dice4.png')
    break;

    case 5:
        imageHandler2.setAttribute('src','images/dice5.png')
    break;

    default:imageHandler2.setAttribute('src','images/dice6.png')
    break;
}

if (randomNumber1>randomNumber2){
    result.innerHTML = 'Player1 won'
}else if(randomNumber1<randomNumber2){
    result.innerHTML = 'Player2 won'
}
else{
    result.innerHTML = 'DRAW'
}