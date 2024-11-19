let vocales = "aeiou".split("")
const consonantes = "qwrtypsdfghjklñzxcvbnm".split ("")
console.log(vocales, consonantes)
let lista = ["hola", "cerdo", "!"]

function crearPalabra(n_silabas){
    let palabra = ""
    for(let i = 0; i <= n_silabas; i++){
        palabra += random(consonantes) + random(vocales)
    }
    
    return palabra
}

function setup() {
    createCanvas(400, 400);
    frameRate(1)
  }
  
  function draw() {
    background(220);
    const stringfinal = crearPalabra(3)
    text(stringfinal, random(width), random(height))   
    crearPalabra(100)
  }
