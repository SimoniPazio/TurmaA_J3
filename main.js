function tocaSomAplausos(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");


For (let contador = 0; (contador < listadeTeclas.length; contador ++){
    const tecla = listadeTeclas [contador]
    const efeito = Tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = Function(){
        tocaSom(idAudio)
    }
    

   
    
}


