let imagenes = ['html', 'css', 'js', 'tailwind']
let serie = [];
let carta1 = null
let carta2 = null

function random() {
    serie = []
    let count = [0, 0, 0, 0]; 
    while (serie.length < 8) {  
        let randomNumber = Math.floor(Math.random() * 4);  
        if (count[randomNumber] < 2) {  
            serie.push(randomNumber);  
            count[randomNumber]++; 
        }
    }
    console.log(serie)
    generarCartas()
}

function generarCartas() {
    let cartas = document.getElementById("cards")
    cartas.innerHTML = ""
    serie.forEach((posicion, index) => {
        let nuevaCarta = `
        <div class="flex flex-col justify-center items-center gap-3 w-[15rem] bg-gray-500 py-14 px-10 h-[15rem] rounded shadow-xl carta" id="${index}" onclick="seleccionarCarta(${index})">
            <div class="cerrado"></div>
            <div class="abierto flex flex-col justify-center items-center gap-3">
                <img src="./assets/${imagenes[posicion]}.png" class="w-[10rem] h-[10rem]">
                <p class="uppercase text-center">${imagenes[posicion]}</p>
            </div>
        </div>
        `
        cartas.innerHTML += nuevaCarta        
    })
}

function seleccionarCarta(carta){
    if (carta1 == null) {
        carta1 = document.getElementById(carta)
        carta1.classList.add('rotar')
    } else if (carta2 == null){
        carta2 = document.getElementById(carta)
        carta2.classList.add('rotar')
        if (carta1.textContent == carta2.textContent) {
            resetCartas()
        } else{
            resetCartas(false)
        }
    }
}

function resetCartas(validar = true){
    setTimeout(function() {
        if (!validar) {
            carta1.classList.remove('rotar');
            carta2.classList.remove('rotar');
        }
        carta1 = null
        carta2 = null
    }, 1000);
}