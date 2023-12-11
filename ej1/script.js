//ejercicio 5.20 del libro


//Primero creamos la clase Aula 
class Aula {
    //establecemos un constructor basico para todas los objetos que hereden de Aula,
    //el cual va a hacer que todos tengan 1 profesor y 40 sillas
    constructor() {
        this.profesor = 1;
        this.sillas = 40;
    }
    //Genero un metodo que me devuelva cuantos profes tiene cada aula y cuantas sillas
    mostrarInfo() {
        return(`Las aulas tienen ${this.profesor} profesor y ${this.sillas} sillas`)
    }
}

//creo un objeto que se llame miAula y llamo al metodo mostrar info
let miAula = new Aula();
console.log(miAula.mostrarInfo());


//Creo la clase musica que hereda de aula (madre), llamo a los atributos de la madre (profesor y pizarraDigital)
// y añado otros dos atributos para el aula de musica
class Musica extends Aula {
    constructor(alumnos, pizarraDigital) {
        super();
        this.alumnos = alumnos;
        this.pizarraDigital = pizarraDigital;
    }
    //modifico el metodo mostrarInfo() y le añado estos atributos y mas texto
    mostrarInfo() {
        return(`Las aulas de Musica tienen ${this.profesor} profesor, tienen ${this.sillas} sillas, además tienen ${this.alumnos} alumnos y ${this.pizarraDigital} tienen pizarraDigital`);
    }
}

//creo un objeto a partir de musica que se va a llamar miMusica y luego voy a mostrar la información
let miMusica = new Musica(35, "si");
console.log(miMusica.mostrarInfo())


//Por ultimo voy a hacer otra herencia de aula que se va a llamar Tecnología que va a heredar de Aula con el 
//atributo super() y tb le añado otros dos
class Tecnologia extends Aula {
    constructor (alumnos, pizarraDigital) {
        super();
        this.alumnos = alumnos;
        this.pizarraDigital = pizarraDigital;
    }
    //modifico el método mostrarInfo aplicando el "polimorfismo"
    mostrarInfo() {
        return(`Las aulas de Tecnologia tienen ${this.profesor} profesor, tienen ${this.sillas} sillas, además tienen ${this.alumnos} alumnos y ${this.pizarraDigital} tienen pizarraDigital`);
    }
}

//creo otro objeto y llamo al metodo
let miTecnologia = new Tecnologia(22, "no");
console.log(miTecnologia.mostrarInfo())
