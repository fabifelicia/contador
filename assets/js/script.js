var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    //modificando cor quando numero for negativo
    
}

//addEventListener
//Crie condicionais que desabilitam os botoes entre 0 e 10
//Mude a cor do texto para vermelho quando o numero for negativo
