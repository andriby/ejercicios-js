window.onload=function(){
    document.onkeydown = desplazar;
};

function desplazar(objeto){
    
    let tecla = objeto.which;
    let contenedor = document.getElementById("contenedor");

    let limiteDerecho = contenedor.offsetWidth - cuadro.offsetWidth;
    let limiteInferior = contenedor.offsetHeight - cuadro.offsetHeight;


    let situacionY = document.getElementById("cuadro").offsetLeft;
    let situacionX = document.getElementById("cuadro").offsetTop;
    
    switch (tecla){
        case 37:   
            if (situacionY > 0) {
                cuadro.style.left = situacionY-5+"px" ; 
            }
        break;
        case 38:
            if (situacionX > 0) {
                cuadro.style.top = situacionX-5+"px" ;
            }
        break;
        case 39: 
            if (situacionY < limiteDerecho) {
                cuadro.style.left = situacionY-(-5)+"px" ;
            }
        break;
        case 40:
            if (situacionX < limiteInferior) {
                cuadro.style.top = situacionX-(-5)+"px" ;
            }
        break;
    }
}