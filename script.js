//
// Práctica 10 - Cronómetro
//

console.log('Esto es un cronómetro!');

function inicio() {
    intervalID = window.setInterval(cuenta, 1000);
}
function cuenta() {
    cronometro.innerHTML =`${j++}`
}
function detiene() {
    clearInterval(intervalID);

}
function limpia() {
    j=0;
    cronometro.innerHTML =`0`

}
let intervalID;
let cronometro = document.getElementById('cronometro');
let j =0;
let i = 0;
let contenedor = document.getElementById('container');
let iniciar = document.getElementById('iniciar');
iniciar.addEventListener('click', inicio);
let detener = document.getElementById('detener');
detener.addEventListener('click', detiene);
let limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', limpia);


