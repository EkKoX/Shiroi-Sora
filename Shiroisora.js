function visible1(){
    document.getElementById("vis2").style.display = "none";
    document.getElementById("vis3").style.display = "none";
    document.getElementById("vis1").style.display = "flex";
}
function visible2(){
    document.getElementById("vis1").style.display = "none";
    document.getElementById("vis3").style.display = "none";
    document.getElementById("vis2").style.display = "flex";
}
function visible3(){
    document.getElementById("vis1").style.display = "none";
    document.getElementById("vis2").style.display = "none";
    document.getElementById("vis3").style.display = "flex";
}
function stats1(){
    document.getElementById("barra1").style.width = "40%";
    document.getElementById("barra2").style.width = "100%";
    document.getElementById("barra3").style.width = "20%";
}
function stats2(){
    document.getElementById("barra1").style.width = "100%";
    document.getElementById("barra2").style.width = "50%";
    document.getElementById("barra3").style.width = "10%";
}
function stats3(){
    document.getElementById("barra1").style.width = "30%";
    document.getElementById("barra2").style.width = "40%";
    document.getElementById("barra3").style.width = "100%";
}