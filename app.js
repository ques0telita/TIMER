document.addEventListener('DOMContentLoaded', () => {
let intervalo;
const pantalla = document.getElementById("pantalla");
const btn = document.getElementById("start-btn");
const videoBoom = document.getElementById("video-boom");
const numberInput = document.getElementById("number");

btn.addEventListener('click', () => {
    if (intervalo) clearInterval(intervalo);

    const valorInput = parseInt(numberInput.value, 10);
    const contadorInicial = Number.isNaN(valorInput) 
    ? 10 : valorInput;

    let contador = contadorInicial;
    pantalla.innerText = contador;
    btn.disabled = true;

videoBoom.style.display = "none";
videoBoom.currentTime = 0;

intervalo = setInterval(() => {
contador --;

if (contador > 0) {
    pantalla.innerText = contador;
} else {
    clearInterval(intervalo);
    pantalla.innerText = "LAUNCH!"; //
    
    videoBoom.style.display = "block";
    videoBoom.play().catch(error => console.log("Error:", error));

    btn.disabled = false;
    btn.innerText = "RESET";

    videoBoom.onended = () => {
    videoBoom.style.transition = "opacity 1s";
    videoBoom.style.opacity = "0";
    setTimeout(() => {
        videoBoom.style.display = "none";
        videoBoom.style.opacity = "1";
        videoFondo.play();
    }, 2000);
};
}
}, 1000);
});
});

