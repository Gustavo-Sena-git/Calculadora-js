function insert(num){
    var numero = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = numero + num;

}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = "Erro"
    }
}

let number1 = 0;
let number2 = 0;
let operador = '';


function insert(op) {
    operador = op;
}

function calcula(){
    number1 = parseFloat(document.querySelector('.number1').value);
    number2 = parseFloat(document.querySelector('.number2').value);

    let resultado

    if (operador === '+') {
        resultado = number1 + number2;
    } else if (operador === '-') {
        resultado = number1 - number2;
    } else if (operador === '*') {
        resultado = number1 * number2;
    } else if (operador === '/') {
        resultado = number1 / number2;
    }

    document.getElementById('result').textContent = "Resultado:" + resultado 
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === '=') {
        calcula();
    }
});