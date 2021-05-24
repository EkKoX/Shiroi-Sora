const botonCambiarTema = document.querySelector("#boton-cambiar-tema");
const cambioIcono = document.querySelector(".cambiar-icono");
const cambioFondo = document.querySelector(".sign-in")
const cambiarFondo = document.querySelector(".header");
const cambiarCasco = document.querySelector(".casco");
const cambiarGrebas = document.querySelector(".grebas");
const cambiarPechera = document.querySelector(".pechera");
const cambiarArma = document.querySelector(".arma");
const cambiarPocion = document.querySelector(".pocion");
const cambiarGranada = document.querySelector(".granada");
var ancho = window.matchMedia("(min-width: 860px)");
const page = document.getElementById("page");

botonCambiarTema.addEventListener("change", function(){
    if(this.checked){
        page.classList.toggle("dia");
        page.classList.toggle("noche");
        cambioIcono.classList.remove("fa-moon");
        cambioIcono.classList.add("fa-sun");
        if(ancho.matches){
        cambiarFondo.style.backgroundImage = "url('imagenes/fondomenu2.png')";
        } else {
            cambiarFondo.style.backgroundImage = "none";
        }
        if(cambiarArma != null){
            cambiarArma.setAttribute("src", "imagenes/logoarma2.png")
        }
        if(cambiarCasco != null){
            cambiarCasco.setAttribute("src", "imagenes/logopechera2.png")
        }
        if(cambiarGrebas != null){
            cambiarGrebas.setAttribute("src", "imagenes/logogrebas2.png")
        }
        if(cambiarPechera != null){
            cambiarPechera.setAttribute("src", "imagenes/logocascos2.png")
        }
        if(cambiarGranada != null){
            cambiarGranada.setAttribute("src", "imagenes/granada2.png")
        }
        if(cambiarPocion != null){
            cambiarPocion.setAttribute("src", "imagenes/pocion2.png")
        }
    }else{
        page.classList.toggle("dia");
        page.classList.toggle("noche");
        cambioIcono.classList.remove("fa-sun");
        cambioIcono.classList.add("fa-moon");
        if(ancho.matches){
            cambiarFondo.style.backgroundImage = "url('imagenes/fondomenu.jpg')";
        } else {
            cambiarFondo.style.backgroundImage = "none";
        }
        if(cambiarArma != null){
            cambiarArma.setAttribute("src", "imagenes/logoarma.png")
        }
        if(cambiarCasco != null){
            cambiarCasco.setAttribute("src", "imagenes/logopechera.png")
        }
        if(cambiarGrebas != null){
            cambiarGrebas.setAttribute("src", "imagenes/logogrebas.png")
        }
        if(cambiarPechera != null){
            cambiarPechera.setAttribute("src", "imagenes/logocascos.png")
        }
        if(cambiarGranada != null){
            cambiarGranada.setAttribute("src", "imagenes/granada.png")
        }
        if(cambiarPocion != null){
            cambiarPocion.setAttribute("src", "imagenes/pocion.png")
        }
    }
})
function boton(){
    location.href = "SoraiSoraHome.html";
}