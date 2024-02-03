let eje = true;
let res = document.getElementById("resultado")

function numero(n){
    if (res.innerHTML == 0) {
        res.innerHTML = ""
    }
    res.innerHTML += n
    eje = false;
}

function operador(op){
    if (!eje || res.innerHTML == !0) {
        res.innerHTML += op
        eje = true
    }
}

function limpiar(){
    res.innerHTML = 0
}

function calcular() {
    res.innerHTML = eval(res.innerHTML)
    eje = false;
} 