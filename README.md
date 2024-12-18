# Mi Página web explicación
*Mi página web está enteramente dedicada a mi videojuego favorito Bloodborne, la cual tendrá referencias a este en los diferentes códigos. En ella explicare su biografia y mis razones por las cuales es el mejor juego bajo mi opinión, dejando al final un enlace a su wikipedia por si buscan más información.*

### La extructura y forma de la web esta basada en [Vivir tras un accidente: el talento español que ayuda a los niños a seguir adelante](https://www.abc.es/contentfactory/post/2019/11/05/vivir-tras-un-accidente-el-talento-espanol-que-ayuda-a-los-ninos-a-seguir-adelante/).

# CÓDIGOS:
*La web tiene en total cuatro códigos JS:*
1. Movimiento de imagen de lado a lado.
2. Giro de la espada.
3. Que la espada se sitúe donde uno clique
3. Intercambio de imagen.
4. Cambio de usuario.

# 1. Movimiento de imagen de lado a lado:
*Para este código definí la función moveamigo:*
```
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
```
*Tiene dos estados, left igual a 1 y left igual a 0.*
*Dentro de lso if es donde se varía el valor de newLeft, el cual define la posición de la imagen en px. Este valor, newLeft, varía según la velocidad (que es 1).*
*clientWidth permite que la imagen se mantenga entre el ancho de la página, haciendo que rebote al llegar al límite.*


# 2. 3.Giro de la espada y que se sitúe donde uno clique:
*Para hacer girar la espada utilicé el siguiente código en JS:*
```
const cazador = document.getElementById("cazador");

document.addEventListener("click", (e) => {
   
    cazador.style.left = `${e.clientX - cazador.offsetWidth / 2}px`;
    cazador.style.top = `${e.clientY - cazador.offsetHeight / 2}px`;
});
```
*Y también era necesario este en CSS para hacerla girar, además de hacer que se situe en donde uno clique:*
```
  #cazador {
            margin: 0;
            height: auto;
            background-color: #f0f0f0;
            overflow: hidden;
            cursor: pointer;
            position: absolute;
            width: auto; 
            pointer-events: none;
            z-index:99999;
            top: 40%;
            left: 20%;
            transform: translate(-50%, -50%);
            animation: girar 3s linear infinite;
        }

```
*(EL id de la espada es cazador)*

# 4.  Intercambio de imagen:
*Esta acción es una referencia al juego, ya que la imagen del cazador (amigo) que se movía de lado a lado se cambia por la imagen de una bestia. Esto referencia al hecho de que los cazadores se transforman en bestias a causa de la sangre (que tiene propiedades curativas)*
*Para realizar este cambio precisé del siguiente código en JS:*
```
let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/amigo.png") {
    miImage.setAttribute("src", "images/bestia.png");
  } else {
    miImage.setAttribute("src", "images/amigo.png");
  }
};
```
*Esta función permite que la imagen bestia cambie con la de amigo.*

# 5. Cambio de usuario
*Este JS manifiesta un boton de cambio de usuario:*
```

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
```
*Cuando alguien se introduce en la página o al darle al botón de cambio de usuario, se muestra un mensaje personalizado con la frase "Teme la vieja sangre, (nombre del usuario)", una frase muy importante dentro del Bloodborne para la historia y que sirve como contraseña para entrar en una fase del juego.*

# Enlace a la web:
*Puedes ver la web en este [enlace]( https://alca1706.github.io/).*
