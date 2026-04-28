document.addEventListener('DOMContentLoaded', () => {
let intervalo;
const pantalla = document.getElementById("pantalla");
const btn = document.getElementById("start-btn");
const videoBoom = document.getElementById("video-boom");
const videoFondo = document.getElementById("video-fondo");

btn.addEventListener('click', () => {
// se limpian los intervalos previos
if (intervalo) clearInterval(intervalo);

// reset
let contador = 60;
pantalla.innerText = contador;
btn.disabled = true;
videoBoom.style.display = "none";
videoBoom.pause();
videoBoom.currentTime = 0;

// 
intervalo = setInterval(() => {
contador--;

if (contador > 0) {
    pantalla.innerText = contador;
} else {
    // se muestra el mensaje
    clearInterval(intervalo);
    pantalla.innerText = "LUNCH!";
    
    // al darle al boton de reinicio, se muestra otra vez el video del despegue
    videoBoom.style.display = "block";
    videoBoom.play().catch(error => console.log("El navegador bloqueó el video:", error));
    
    btn.disabled = false;
    btn.innerText = "REINTENTAR";
    videoBoom.end().then(replay)

}
}, 1000);
});
});