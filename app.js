let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteador = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} :).`);
        document.querySelector('#reiniciar').removeAttribute('disabled');

    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor.");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor.");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*10)+1;
   if(listaNumerosSorteador.length == numeroMax){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles.")
   } else {
        if (listaNumerosSorteador.includes(numeroGenerado)) {
                generarNumeroSecreto(); 
        } else {
                listaNumerosSorteador.push(numeroGenerado);
                return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto" );
    asignarTextoElemento("p", "Indica un número del 1 al 10" );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();