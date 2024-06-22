let numeroSecreto = generarNumeroSecreto();



function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText = texto;
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Adivina el numero secreto');

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto))
    console.log(numeroDeUsuario);
    console.log(numeroSecreto === numeroDeUsuario);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}