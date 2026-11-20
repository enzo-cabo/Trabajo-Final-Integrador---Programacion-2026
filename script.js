let botonDado = document.getElementById("dado");
let random;
let randomA;
let resultado;
let MiniJuego;
let numero;
let sectionResultado = document.getElementById("sectionResultado");
let sectionFicha = document.getElementById("sectionFicha")
let posicionJugador = 0;
let tablero = [
    {
        nombre: "Casilla 0",
        efecto:  () => {
            return
        },
        etiqueta: document.getElementById(`num-0`)
    },
    {
        nombre: "Casilla 1",
        efecto:  () => {
            posicionJugador+=3
            console.log("el jugador activo el efecto de la casilla 1");
            sectionFicha.innerHTML = `<h2>+ 3 casillas,estas en la casilla: ${posicionJugador}</h>`;
        },
        etiqueta: document.getElementById(`num-1`)

    },
    {
        nombre: "Casilla 2",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-2`)

    },
    {
        nombre: "Casilla 3",
        efecto: () => {
            posicionJugador+=2
            console.log("el jugador activo el efecto de la casilla 3");
             sectionFicha.innerHTML = `<h2>+ 2 casillas,estas en la casilla: ${posicionJugador}</h>`;
        },
         etiqueta: document.getElementById(`num-3`)
    },
    {
        nombre: "Casilla 4",
        efecto:   () => {
            MiniJuego = prompt("¿Cual es el nombre del profesor?:");
    if(MiniJuego=="valentin"){
        Resultado =posicionJugador+=4;
   document.getElementById("sectionFicha").innerHTML =`<h2> ganaste + 4,estas en la casilla ${posicionJugador}</h>`
    }
    
    else {
        Resultado = posicionJugador-=4 ;
        document.getElementById("sectionFicha").innerHTML =`<h2>perdiste -4, estas en la casilla ${posicionJugador}</h>`
    }
    
    console.log(Resultado);
    return
        },
        
        etiqueta: document.getElementById(`num-4`)
    },
    {
        nombre: "Casilla 5",
        efecto: () => {
            posicionJugador+=-1
            console.log("el jugador activo el efecto de la casilla 5");
             sectionFicha.innerHTML = `<h2>-1 casilla,estas en la casilla: ${posicionJugador}</h>`;
             return
        } ,
        etiqueta: document.getElementById(`num-5`)
    },
    {
        nombre: "Casilla 6",
        efecto:  () => {
            posicionJugador+=-2
            console.log("el jugador activo el efecto de la casilla 6");
             sectionFicha.innerHTML = `<h2>-2 casillas,estas en la casilla: ${posicionJugador}</h>`;
             return
        } ,
        etiqueta: document.getElementById(`num-6`)
    },
    {
        nombre: "Casilla 7",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return
        } ,
        etiqueta: document.getElementById(`num-7`)
    }, {
        nombre: "Casilla 8",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return
        } ,
        etiqueta: document.getElementById(`num-8`)
    }, {
        nombre: "Casilla 9",
        efecto: () => {
            posicionJugador+=-9
            
             sectionFicha.innerHTML = `<h2> <img src="imagenes/caiste.jpg".img> Caiste,la casilla9 te manda al inicio,estas en la casilla 0 : ${posicionJugador}</h>`;
            
        } ,
        etiqueta: document.getElementById(`num-9`)
    },
    {
        nombre: "Casilla 10",
        efecto: () => {
            posicionJugador+=4
            console.log("el jugador activo el efecto de la casilla 10");
         sectionFicha.innerHTML = `<h2>+4 casillas,estas en la casilla: ${posicionJugador}</h>`;
        } ,
        etiqueta: document.getElementById(`num-10`)
    },
    {
        nombre: "Casilla 11",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-11`)

    },
    {
        nombre: "Casilla 12",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-12`)

    },
    {
        nombre: "Casilla 13",
        efecto:   () => {
             numero = prompt("Adivina el numero");
        
           randomA = Math.floor(Math.random() * 5) + 1;  

if(numero==randomA)
    {resultado = posicionJugador+=4 ;
        document.getElementById("sectionFicha").innerHTML =`<h2>adivinaste el numero +3, estas en la casilla ${posicionJugador}</h>`
    }
else 
    {resultado = posicionJugador-=4 ;
        document.getElementById("sectionFicha").innerHTML =`<h2>no lo adivinaste -3, estas en la casilla ${posicionJugador}</h>`}
    
document.getElementById("section1").innerHTML = resultado;

console.log(resultado);

            return 
        },
        etiqueta: document.getElementById(`num-13`)

    },
    {
        nombre: "Casilla 14",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-14`)

    },
    {
        nombre: "Casilla 15",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-15`)

    },
    {
        nombre: "Casilla 16",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-16`)

    },
    {
        nombre: "Casilla 17",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-17`)

    },
    {
        nombre: "Casilla 18",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-18`)

    },{
        nombre: "Casilla 19",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-19`)

    },{
        nombre: "Casilla 20",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-20`)

    },{
        nombre: "Casilla 21",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-21`)

    },{
        nombre: "Casilla 22",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-22`)

    },{
        nombre: "Casilla 23",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-23`)

    },{
        nombre: "Casilla 24",
        efecto:   () => {
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        etiqueta: document.getElementById(`num-24`)

    }, {
        nombre: "Casilla 25",
        efecto:   () => {posicionJugador+=-1
              sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        

    }, {
        nombre: "Casilla 26",
        efecto:   () => {posicionJugador+=-2
              sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        
    }, {
        nombre: "Casilla 27",
        efecto:   () => {posicionJugador+=-3
              sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        

    }, {
        nombre: "Casilla 28",
        efecto:   () => {posicionJugador+=-4
              sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        
    }, {
        nombre: "Casilla 29",
        efecto:   () => {posicionJugador+=-5
             sectionFicha.innerHTML = `<h2>estas en la casilla: ${posicionJugador}</h>`;
            return 
        },
        

    }, 
    
] //Crear el tablero a mano

function dado() {
    tablero[posicionJugador].etiqueta.style.border = "2px solid green";
    random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    resultado = random;
    sectionResultado.innerHTML = `<h2>Resultado: ${resultado}</h>`;
    posicionJugador += random;
    console.log(`posicion: ${posicionJugador}`);
    tablero[posicionJugador].efecto();
    console.log(`posicion: ${posicionJugador}`);
    tablero[posicionJugador].etiqueta.style.border = "5px solid yellow"

}


// En alguna funcion (cuando se ejecute su proceso de movimiento) deben llamar a tablero[posicionJugador].efecto()


console.log(tablero[0].nombre) // Asi es como acceden a un valor especifico de una casilla

botonDado.addEventListener("click", dado);