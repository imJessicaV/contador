let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;
let outraCor = document.getElementsByTagName('span')[0]

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if( currentNumber > 0){
        outraCor.style.color = 'black'
   }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if( currentNumber < 0 ){
        outraCor.style.color = 'red'
    }
}

