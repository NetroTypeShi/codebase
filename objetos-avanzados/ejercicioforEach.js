const lista = ["manzana", "pera", "plátano", "cereza"]

// usando listas y strings, devuelve un string que capitalice cada palabra y luego las junte en un sting
//ej: ManzanaPeraPlatanoCereza

let answer = "";

lista.forEach(fruta => {
  // Capitalizamos la primera letra y añadimos el resto de la palabra
  const frutaCapitalizada = fruta[0].toUpperCase() + fruta.slice(1);
  // Concatenamos la fruta capitalizada a la respuesta
  answer += frutaCapitalizada;
});

console.log(answer); // Imprime: ManzanaPeraPlatanoCereza

const string = "hola mundo"

// usando metodos listas y strings, devuelve el anterior string
// alternar entre mayúsculas y minúsculas

//EXTRA: Haz algo interesante con metodos de strings, arrays, numeros, whatever