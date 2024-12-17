const esquina1 = "╔";
const esquina2 = "╚";
const esquina3 = "╗";
const esquina4 = "╝";
const vertical = "║";
const horizontal = "═";

const ancho = 3;
const alto = 1;
//Crear variables como datos

//Parte superior
// const superior = esquina1 + horizontal + horizontal + horizontal + esquina3;
// console.log (superior)
let superior = esquina1;
for(let i = 0; i<ancho; i++){
//Imprimir la parte superior
superior+= horizontal
}
superior += esquina3;
console.log(superior)

//Parte de enmedio

let mid = vertical
for(let i = 0; i<ancho; i++){
     //Imprimir la parte superior
    mid+= " "
    }
    mid += vertical;
    for(let i = 0; i<alto; i++){
       console.log(mid)//Imprimir la parte superior
       mid+= " "
       }

let abajo = esquina2;
for(let i = 0; i<ancho; i++){
abajo+= horizontal
}
abajo += esquina4;
console.log(abajo)
//Imprimir la parte abajo