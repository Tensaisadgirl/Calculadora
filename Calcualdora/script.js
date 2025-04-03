var temponto = 0;
var valor1 = 0;
var valor2 = 0;
var operac = 0;

function myclick(valor) {
    var display = document.getElementById('display');
    
    if (display.innerHTML.length >= 10) {
        alert('Tamanho excedido');
    } else {
        if (display.innerHTML == '0') {
            display.innerHTML = valor;
        } else {
            display.innerHTML += valor;
        }
    }
}

function mydecimal() {
    var display = document.getElementById('display');
    if (!display.innerHTML.includes('.')) {
        display.innerHTML += '.';
    }
}

function mudasinal() {
    var display = document.getElementById('display');
    display.innerHTML = parseFloat(display.innerHTML) * -1;
}

function mylimpa() {
    temponto = 0;
    document.getElementById('display').innerHTML = '0';
}

function backspace() {
    var display = document.getElementById('display');
    display.innerHTML = display.innerHTML.length === 1 ? '0' : display.innerHTML.slice(0, -1);
}

function igual() {
    var display = document.getElementById('display');
    
    if (operac == 0) {
        alert('Sem valores para totalizar!');
    } else {
        valor2 = parseFloat(display.innerHTML);
        var resultado = 0;

        if (operac == 1) resultado = valor1 + valor2;
        if (operac == 2) resultado = valor1 - valor2;
        if (operac == 3) resultado = valor1 * valor2;
        if (operac == 4) {
            if (valor2 == 0) {
                alert('Divisão por ZERO!');
                mylimpa();
                return;
            }
            resultado = valor1 / valor2;
        }

        mylimpa();
        display.innerHTML = resultado;
        speak(); // Ativa a fala
    }
}

function soma() {
    valor1 = parseFloat(document.getElementById('display').innerHTML);
    operac = 1;
    mylimpa();
}
function porcentagem() {
   var valor1 = parseFloat(document.getElementById('display').innerHTML);
    if (!isNaN(valor1)) {
        valor1= valor1 / 100;
        document.getElementById('display').innerHTML = valor1;
    }
}

function subtrai() {
    valor1 = parseFloat(document.getElementById('display').innerHTML);
    operac = 2;
    mylimpa();
}

function multi() {
    valor1 = parseFloat(document.getElementById('display').innerHTML);
    operac = 3;
    mylimpa();
}

function divis() {
    valor1 = parseFloat(document.getElementById('display').innerHTML);
    operac = 4;
    mylimpa();
}

// Função de fala
function speak() {
    const frase = new SpeechSynthesisUtterance(document.getElementById('display').innerHTML);
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
        frase.voice = voices[Math.min(19, voices.length - 1)];
    }
    speechSynthesis.speak(frase);
}
