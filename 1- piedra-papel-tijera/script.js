let selecciones = ["Piedra", "Papel", "Tijeras"]
function jugar(){
    let usr = document.getElementById("usr").value
    let bot = Math.floor(Math.random() * 3)
    let resultado = ""

    console.log(usr, bot)
    if (usr == 0 && bot == 2 || usr == 1 && bot == 0 || usr == 2 && bot == 1){
        resultado = "Gana el usuario"
    } else if(usr == 0 && bot == 1 || usr == 1 && bot == 2 || usr == 2 && bot == 0){
        resultado = "Gana el bot"
    } else{
        resultado = "Empate"
    }
    document.getElementById("resUsr").innerHTML = selecciones[usr]
    document.getElementById("resBot").innerHTML = selecciones[bot]
    document.getElementById("resultado").innerHTML = resultado
}