let botonDado = document.getElementById("dado");
let random;
let resultado;
let MiniJuego;
let sectionResultado = document.getElementById("sectionResultado");
let posicionJugador = 0;
let tablero = [
    {
        nombre: "Casilla 0",
        efecto:  () => {
            return
        } 
    },
    {
        nombre: "Casilla 1",
        efecto:  () => {
            posicionJugador+=3
            console.log("el jugador activo el efecto de la casilla 1");
            sectionFicha.innerHTML = `<h2>+ 3 casillas,estas en la casilla: ${posicionJugador}</h>`;
        } 

    },
    {
        nombre: "Casilla 2",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        } 
    },
    {
        nombre: "Casilla 3",
        efecto: () => {
            posicionJugador+=2
            console.log("el jugador activo el efecto de la casilla 3");
             sectionFicha.innerHTML = `<h2>+ 2 casillas,estas en la casilla: ${posicionJugador}</h>`;
        } 
    },
    {
        nombre: "Casilla 4",
        efecto:   () => {
            MiniJuego = prompt("¿Cual es el nombre del profesor?:");
    if(MiniJuego=="valentin")
        {Resultado = }
    else 
        {Resultado = "Desaprobado"}
    document.getElementById("sectionFicha").innerHTML = ;
    console.log(Resultado);
        }
    },
    {
        nombre: "Casilla 5",
        efecto: () => {
            posicionJugador+=-1
            console.log("el jugador activo el efecto de la casilla 5");
             sectionFicha.innerHTML = `<h2>-1 casilla,estas en la casilla: ${posicionJugador}</h>`;
        } 
    },
    {
        nombre: "Casilla 6",
        efecto:  () => {
            posicionJugador+=-2
            console.log("el jugador activo el efecto de la casilla 5");
             sectionFicha.innerHTML = `<h2>-2 casillas,estas en la casilla: ${posicionJugador}</h>`;
        } 
    },
    {
        nombre: "Casilla 7",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return
        } 
    }, {
        nombre: "Casilla 8",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return
        } 
    }, {
        nombre: "Casilla 9",
        efecto: () => {
            posicionJugador+=-9
            console.log("el jugador activo el efecto de la casilla 5");
             sectionFicha.innerHTML = `<h2>al principio jiji,estas en la casilla: ${posicionJugador}</h>`;

        } 
    },
    {
        nombre: "Casilla 10",
        efecto: () => {
            posicionJugador+=4
            console.log("el jugador activo el efecto de la casilla 10");
         sectionFicha.innerHTML = `<h2>+4 casillas,estas en la casilla: ${posicionJugador}</h>`;
        } 
    },
] //Crear el tablero a mano

function dado() {
    random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    resultado = random;
    sectionResultado.innerHTML = `<h2>Resultado: ${resultado}</h>`;
    posicionJugador += random;
    console.log(`posicion: ${posicionJugador}`);
    tablero[posicionJugador].efecto();
    console.log(`posicion: ${posicionJugador}`);

}


// En alguna funcion (cuando se ejecute su proceso de movimiento) deben llamar a tablero[posicionJugador].efecto()


console.log(tablero[0].nombre) // Asi es como acceden a un valor especifico de una casilla

botonDado.addEventListener("click", dado);