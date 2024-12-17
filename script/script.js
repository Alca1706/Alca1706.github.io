const cazador = document.getElementById("cazador");

document.addEventListener("click", (e) => {
   
    cazador.style.left = `${e.clientX - cazador.offsetWidth / 2}px`;
    cazador.style.top = `${e.clientY - cazador.offsetHeight / 2}px`;
});
var velocidad=1;
var amigoEl = document.getElementById("amigo");
amigoEl.style.left="0px";
var left = 0;
let newLeft = 0;
var clientWidth = document.documentElement.clientWidth - 60;
var moveamigo=function(){
if (left == 1) {
if (newLeft > 0 ) {
newLeft=newLeft-velocidad;
} else {
left = 0;
}
} else {
if (newLeft < clientWidth) {
newLeft=newLeft+velocidad;
} else {
left = 1;
}
}

amigoEl.style.left = newLeft + "px";
window.requestAnimationFrame(moveamigo);
}
moveamigo();

let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/amigo.png") {
    miImage.setAttribute("src", "images/bestia.png");
  } else {
    miImage.setAttribute("src", "images/amigo.png");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h2");

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "Teme la vieja sangre," + miNombre;
}

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Teme la vieja sangre," + nombreAlmacenado;
}miBoton.onclick = function () {
  estableceNombreUsuario();
};