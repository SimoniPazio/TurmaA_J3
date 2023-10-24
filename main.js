function tocaSomAplausos(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listadeTeclas.length){
    const efeito = listadeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listadeTeclas[contador].onclick = Function(){
        tocaSom(idAudio)
    }
    tocaSom("som_tecla_aplausos");

    contador = contador + 1;
    console.log(contador);
}


