// Vamos a construir la interactividad paso a paso durante la clase.
console.log("introduccion");
console.log(document.querySelector("#boton-saludo"));

const botonMostrarSaludo = document.querySelector("#boton-saludo");
const mensajeBienvenida = document.querySelector("#mensaje");
const miNombre = "mili"

const botonTema = document.querySelector("#boton-tema"); 

console.log(botonMostrarSaludo);

botonMostrarSaludo.addEventListener("click", function () {
    console.log("hiciste click");
    mensajeBienvenida.textContent = "hola " + miNombre; 
})

botonTema.addEventListener("click", function(){
    document.body.classList.toggle("tema-oscuro");
});