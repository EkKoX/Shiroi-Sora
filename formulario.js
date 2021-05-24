const botonCambiarTema = document.querySelector("#boton-cambiar-tema");
const cambioIcono = document.querySelector(".cambiar-icono");
const cambioFondo = document.querySelector(".sign-in")
const cambiarFondo = document.querySelector(".header");
var ancho = window.matchMedia("(min-width: 860px)");

botonCambiarTema.addEventListener("change", function(){
    if(this.checked){
        page.classList.toggle("dia");
        page.classList.toggle("noche");
        cambioIcono.classList.remove("fa-moon");
        cambioIcono.classList.add("fa-sun");
        if(ancho.matches){
        cambiarFondo.style.backgroundImage = "url('imagenes/fondomenu2.png')";
        }
        cambioFondo.style.backgroundImage = "url('imagenes/fondoiniciarsesion2.jpg')";
    }else{
        page.classList.toggle("dia");
        page.classList.toggle("noche");
        cambioIcono.classList.remove("fa-sun");
        cambioIcono.classList.add("fa-moon");
        if(ancho.matches){
            cambiarFondo.style.backgroundImage = "url('imagenes/fondomenu.jpg')";
        }
        cambioFondo.style.backgroundImage = "url('imagenes/fondoiniciarsesion.jpg')";
    }
})
function boton(){
    location.href = "SoraiSoraHome.html";
}
