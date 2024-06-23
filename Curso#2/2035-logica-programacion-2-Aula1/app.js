let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText = texto;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Adivina el numero secreto');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('p','El numero secreto es Mayor')        
        } else {
            asignarTextoElemento('p','El numero secreto es menor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensajes de inicio
    //Generar numero aleatorio
    //Reiniciar numeros de intentos
    condicionesIniciales();
    //Desabilitar boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

condicionesIniciales();