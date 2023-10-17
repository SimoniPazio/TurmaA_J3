function tocaSomRisada(){
    document.querySelector("#som_tecla_risada").play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");

listadeTeclas[2].onclick = tocaSomRisada;

function tocaSomVaia(){
    document.querySelector("#som_tecla_vaia").play();
    
}
listadeTeclas[1].onclick = tocaSomVaia;

function tocaSomErrado(){
    document.querySelector("#som_tecla_errado").play();
    
}
listadeTeclas[3].onclick = tocaSomErrado;