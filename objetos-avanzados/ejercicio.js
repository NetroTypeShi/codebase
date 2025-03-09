
// usando listas y strings, devuelve un string que capitalice cada palabra y luego las junte en un sting
//ej: ManzanaPeraPlatanoCereza
const lista = ["manzana", "pera", "platano", "cereza"]
// lista en general

const primeraFruta = (lista[0]);
const manzanaChopeao = (lista[0].split(''));
const mMayuscula = (manzanaChopeao[0].toUpperCase());
const separandoManzana = (primeraFruta.split('m'));
const manzanita=(mMayuscula+separandoManzana[1]);
//manzana core

const segundaFruta = (lista[1]);
const peraChopea = (segundaFruta.split(''));
const pMayuscula = (peraChopea[0].toUpperCase());
const separandoPera = (segundaFruta.split('p'));
const perita = (pMayuscula+separandoPera[1]);
//pera core

const terceraFruta = (lista[2]);
const platanoChopeao = (terceraFruta.split(''));
const separandoPlatano = (terceraFruta.split('p'));
const platanito = (pMayuscula+separandoPlatano[1]);
//platano core

const cuartaFruta = (lista[3]);
const cerezaChopeao = (cuartaFruta.split(''));
const cMayuscula = (cerezaChopeao[0].toUpperCase());
const separandoCereza = (cuartaFruta.split('c'));
const cerecita=(cMayuscula+separandoCereza[1]);
//cereza core

const answer = (manzanita+perita+platanito+cerecita);
console.log(answer);
// final result





const string = "hola mundo"

// usando metodos listas y strings, devuelve el anterior string
// alternar entre mayúsculas y minúsculas
//lista

const manza = (lista[0]);
const plata = (lista[2]);
const plataSliced = (plata.split(''));
const manzaSliced = (manza.split(''));
const mn = (manzaSliced[0]+manzaSliced[2]);
const o = (plataSliced[6]);
const mundo = (manzaSliced[0]+'u'+manzaSliced[2]+'d'+o);
//mundo

const la = (plataSliced[1]+plataSliced[2]);
const hola = ('h'+o+la);
//hola

const hm = (hola+' '+mundo);

function saludar (){
  console.log(hm);
}
saludar();