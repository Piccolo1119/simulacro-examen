/* 5.24 Crea una clase Película que permita gestionar esta información: nombre de la película, año de estreno,
duración, género, los seis actores o actrices más importantes, la URL de su cartel promocional y su director;
y una acción que permita mostrar en consola toda la información. El constructor recibirá los datos
en una cadena JSONde la que deberá sacar los valores de cada propiedad. Crea un objeto de la clase y ponla a prueba.*/


// aqui establecemos las propiedades de un objeto llamado propiedadesPeli.
let propiedadesPeli =  {
    nombre : 'El señor de los anillos',
    estreno : 2001,
    duracion : '230mins',
    genero : 'fantasia',
    actores : '["Elijah Wood", "Vigo Mortensen", "Orlando Bloom", "Liv Tyler"]',
    director : 'Peter Jackson',
    urlpromocional : 'https://www.amazon.es/1art1%C2%AE-59789-P%C3%B3ster-Anillos-Comunidad/dp/B007AGGDEO'
};

//lo mostramos por consola
console.log(propiedadesPeli);

//ahora lo vamos a pasar a cadena JSON que es lo que se nos pide en el ejercicio y la consoleamos
var cadenaJSON = JSON.stringify(propiedadesPeli);
console.log(cadenaJSON);

//creamos una clase que se llama pelicula

class Pelicula {
    constructor(cadenaJSON) {
        //hacemos que en el constructor se introduzca la cadena JSON,
        //pero en el mismo constructor vamos a pasar cada elemento de la cadena a un atributo de clase de nuevo
        //para poder instanciarlo
        this.cadenaJSON = JSON.parse(cadenaJSON);
        this.nombre = this.cadenaJSON.nombre;
        this.estreno = this.cadenaJSON.estreno;
        this.duracion = this.cadenaJSON.duracion;
        this.genero = this.cadenaJSON.genero;
        this.actores = this.cadenaJSON.actores;
        this.director = this.cadenaJSON.director;
        this.urlpromocional = this.cadenaJSON.urlpromocional;
    }

    //creamos un metodo llamado mostrar info que va a mostrar todos los datos por consola al llamar a la clase
    mostrarInfo() {
        console.log(`${this.nombre} se estrenó en el año ${this.estreno}, dura ${this.duracion}
        es de genero ${this.genero} sus actores son ${this.actores}, su director es ${this.director}
        y su url promocional la puedes ver aqui: ${this.urlpromocional}`);
    }
}

//creamos un nuevo objeto y mostramos su info.
let lotr = new Pelicula(cadenaJSON);
lotr.mostrarInfo();

