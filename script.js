let intentos = 6;
let palabras = ["cielo", "perro", "flaco", "piano", "fuego", "cabra", "libro", "tigre", "verde", "mango"];
let palabra = palabras[Math.floor(Math.random() * 10) + 1];
console.log(palabra);
function intentar(){
    const INTENTO = leerIntento();
    if(INTENTO.length !== 5){
        alert("Deben ser palabras de 5 letras");
        return;
    }
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!</h1>");
        return;
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else { 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
		intentos--
        if (intentos==0){
            terminar("<h1>PERDISTE!</h1>")
        }
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toLowerCase(); 
    console.log(intento);
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
const input = document.getElementById("guess-input");
const valor = input.value;


