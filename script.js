let botonDado = document.getElementById("dado");
let random;
let resultado;
let sectionResultado = document.getElementById("sectionResultado");
let posicionJugador = 0;
let tablero = [
    {
        nombre: "Casilla 0",
        efecto: null
    },
    {
        nombre: "Casilla 1",
        efecto: " posicionJugador+=3" 

    },
    {
        nombre: "Casilla 2",
        efecto: "null"
    },
    {
        nombre: "Casilla 3",
        efecto: "+ 1 casillas"
    },
    {
        nombre: "Casilla 4",
        efecto: "minijuego(si sacas menos de un 3 retrocedes -4,mas de 3 avanzas +4) "
    },
    {
        nombre: "Casilla 5",
        efecto: "retrocede 2"
    },
    {
        nombre: "Casilla 6",
        efecto: "retrocede 3 casillas"
    },
    {
        nombre: "Casilla 7",
        efecto: null
    }, {
        nombre: "Casilla 8",
        efecto: null
    }, {
        nombre: "Casilla 9",
        efecto: "al principio"
    },
    {
        nombre: "Casilla 10",
        efecto: "+4 casillas"
    },
] //Crear el tablero a mano

function dado() {
    random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    resultado = random;
    sectionResultado.innerHTML = `<h2>Resultado: ${resultado}</h>`;
    posicionJugador += random;
    console.log(`posicion: ${posicionJugador}`);
    console.log(`casilla: ${tablero[posicionJugador].efecto}`)
}



console.log(tablero[0].nombre) // Asi es como acceden a un valor especifico de una casilla

botonDado.addEventListener("click", dado);