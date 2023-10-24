function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < 9){
    listadeTeclas[contador].onclick = tocaSomAplausos;
    contador = contador + 1;
    console.log(contador);
}


