//
// Práctica 10 - Cronómetro
//

console.log('Esto es un cronómetro!');

function inicio() {
    intervalID = window.setInterval(cuenta_s, 1000);
    intervalID2 = window.setInterval(cuenta_m, 60000);
    intervalID3 = window.setInterval(cuenta_h, 6000000);
}
function cuenta_s() {
    if (h >9 && m >9 && s >9) {
        cronometro.innerHTML = `${h}:${m}:${s++}`;//horas +9 minutos+9 segundos+9
    } else if (h >9 && m > 9 && s <10) {
        cronometro.innerHTML = `${h}:${m}:0${s++}`;//horas +9 minutos +9 segundos -10
    } else if (h >9 && m < 10 && s < 10) {
        cronometro.innerHTML = `${h}:0${m}:0${s++}`;//horas +9 minutos -10 segundos -10
    } else if (h <10 && m < 10 && s <10) {
        cronometro.innerHTML = `0${h}:0${m}:0${s++}`;//horas -10 minutos -10 segundos -10
    } else if (h <10 && m <10  && s > 9) {
        cronometro.innerHTML = `0${h}:0${m}:${s++}`;//horas -10 minutos -10 segundos +9
    }else if (h >9 && m <10  && s > 9) {
        cronometro.innerHTML = `${h}:0${m}:${s++}`;//horas +9 minutos -10 segundos +9
    }else if (h <10 && m >9  && s < 10) {
        cronometro.innerHTML = `0${h}:${m}:0${s++}`;//horas -10 minutos +9 segundos -10
    }else if (h <10 && m >9  && s > 9) {
        cronometro.innerHTML = `0${h}:${m}:${s++}`;//horas -10 minutos +9 segundos +9
    }
}
function cuenta_m() {
    s = 0;
    if (h >9 && m >9 && s >9) {
        cronometro.innerHTML = `${h}:${m++}:${s}`;//horas +9 minutos+9 segundos+9
    } else if (h >9 && m > 9 && s <10) {
        cronometro.innerHTML = `${h}:${m++}:0${s}`;//horas +9 minutos +9 segundos -10
    } else if (h >9 && m < 10 && s < 10) {
        cronometro.innerHTML = `${h}:0${m++}:0${s}`;//horas +9 minutos -10 segundos -10
    } else if (h <10 && m < 10 && s <10) {
        cronometro.innerHTML = `0${h}:0${m++}:0${s}`;//horas -10 minutos -10 segundos -10
    } else if (h <10 && m <10  && s > 9) {
        cronometro.innerHTML = `0${h}:0${m++}:${s}`;//horas -10 minutos -10 segundos +9
    }else if (h >9 && m <10  && s > 9) {
        cronometro.innerHTML = `${h}:0${m++}:${s}`;//horas +9 minutos -10 segundos +9
    }else if (h <10 && m >9  && s < 10) {
        cronometro.innerHTML = `0${h}:${m++}:0${s}`;//horas -10 minutos +9 segundos -10
    }else if (h <10 && m >9  && s > 9) {
        cronometro.innerHTML = `0${h}:${m++}:${s}`;//horas -10 minutos +9 segundos +9
    }
}
function cuenta_h() {
    m = 0;
    s = 0;
    if (h >9 && m >9 && s >9) {
        cronometro.innerHTML = `${h++}:${m}:${s}`;//horas +9 minutos+9 segundos+9
    } else if (h >9 && m > 9 && s <10) {
        cronometro.innerHTML = `${h++}:${m}:0${s}`;//horas +9 minutos +9 segundos -10
    } else if (h >9 && m < 10 && s < 10) {
        cronometro.innerHTML = `${h++}:0${m}:0${s}`;//horas +9 minutos -10 segundos -10
    } else if (h <10 && m < 10 && s <10) {
        cronometro.innerHTML = `0${h++}:0${m}:0${s}`;//horas -10 minutos -10 segundos -10
    } else if (h <10 && m <10  && s > 9) {
        cronometro.innerHTML = `0${h++}:0${m}:${s}`;//horas -10 minutos -10 segundos +9
    }else if (h >9 && m <10  && s > 9) {
        cronometro.innerHTML = `${h++}:0${m}:${s}`;//horas +9 minutos -10 segundos +9
    }else if (h <10 && m >9  && s < 10) {
        cronometro.innerHTML = `0${h++}:${m}:0${s}`;//horas -10 minutos +9 segundos -10
    }else if (h <10 && m >9  && s > 9) {
        cronometro.innerHTML = `0${h++}:${m}:${s}`;//horas -10 minutos +9 segundos +9
    }
}
function detiene() {
    clearInterval(intervalID);
    clearInterval(intervalID2);
    clearInterval(intervalID3);

}
function limpia() {
    s = 0;
    m = 0;
    h = 0;
    clearInterval(intervalID);
    clearInterval(intervalID2);
    clearInterval(intervalID3);
    cronometro.innerHTML = `00:00:00`;
    inicio();

}
let s=0;
let m=0;
let h=0;
let intervalID;
let intervalID2;
let intervalID3;
let cronometro = document.getElementById('cronometro');
let contenedor = document.getElementById('container');
let iniciar = document.getElementById('iniciar');
iniciar.addEventListener('click', inicio);
let detener = document.getElementById('detener');
detener.addEventListener('click', detiene);
let limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', limpia);


