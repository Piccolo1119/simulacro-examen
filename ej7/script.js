/* Realiza una función prototipo llamada cuenta bancaria que tenga 3 atributos genéricos (nombre, dni, edad) 
y un atributo importante "saldo". Además tendrá 2 métodos:
retirar dinero e ingresar dinero. Probar su funcionamiento con un ingreso y una retirada (pág 12/pdf POO)*/

//creamos una funcion prototipo que tiene como atributos nombre, dni, edad y saldo
function CuentaBancaria (nombre, dni, edad, saldo) {
    //los llamamos en el constructor para que se puedan introducir estos datos
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
    this.saldo = saldo;

    //establecemos los metodos retirar e ingresar dinero, los cuales van a mandar mensajes segun el dinero que tenga
    this.retirar = (dinero) => {
        if (this.saldo<= 0) {
            console.log('No puedes coger mas dinero, estás roto...')
        } else {
            this.saldo -= dinero;
            console.log(`Te quedan ${this.saldo} euros`);
        }
    }

    //establecemos el metodo ingresar donde se muestra cuanto dinero de más hay despues
    this.ingresar = (dinero) => {
        this.saldo += dinero;
        console.log(`Tienes ${this.saldo} euros`);
    }

    //con este console se muestran los datos introducidos al crear el objeto
    console.log( `${this.nombre}, con dni ${this.dni} tiene ${edad} años y tiene ${this.saldo} euros`);
}


//probamos los metodos con el objeto creado a partir de la función prototipo.

let cuenta = new CuentaBancaria('julio', '03205147M', 22, 500);
cuenta.retirar(200);
cuenta.ingresar(1000);
cuenta.retirar(1300);
cuenta.retirar(1300);
    
