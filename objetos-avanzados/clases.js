class persona{
    constructor(nombre, genero, edad, asignatura){
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
        this.asignatura = asignatura;
    }
    saludo(){
        console.log(`Hola soy ${this.nombre}`);
        console.log(this.genero === 'M' ? 'Soy un chico': 'Soy una chica');
        console.log(`Tengo ${this.edad}`);
        console.log(`Estoy estudiando ${this.asignatura.join(', ')}`);
        console.log('¿Y tu?');
    }
    CumplirAños (){
        this.edad++;
    }
    CambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    CambiarGenero(nuevoGenero){
        this.genero = nuevoGenero;
    } 
    AprenderAsignatura(nuevaAsignatura){
        this.asignatura.push(nuevaAsignatura);
    }
    OlvidarAsignatura(asignaturaOlvidada){
        this.asignatura = this.asignatura.filter(asignatura => asignatura !== asignaturaOlvidada);
    }
}
const usuario = new persona('Andrea',25,['Matematicas', 'Fisica', 'Lengua', 'Algebra',])
usuario.saludo();