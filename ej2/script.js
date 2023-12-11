//* Pide al usuario varios datos por pantalla (Nombre, Apellidos y Edad), muestra por pantalla o 
//en la consola los datos. Si el usuario no rellena los campos, deberá de haber un valor predeterminado.
//Ten en cuenta todos los posibles errores.*/


//hago un bucle para que pregunte el nombre los apellidos y el dni, y en caso de no introducir un nombre valido
//se va repitiendo hasta que acierta y lo muestra por pantalla 

var go = true;

while (go){
    let nombre = prompt("Dime tu nombre: ", "Julio").toLocaleLowerCase();
    let apellidos = prompt("Dime tus apellidos: ", "Vázquez Abarca").toLocaleLowerCase();
    let dni = prompt("Dime tu dni", "03205147M")
    if ((!isNaN(nombre) || nombre == " ") || (!isNaN(apellidos) || apellidos == " ") ||(!isNaN(dni) || dni == " ")) {
        alert(`Introduce una secuencia valida!!!...${nombre} y ${apellidos} y ${dni}  no vale...`);
        go = true
    }
    else {
        document.write(`${nombre} ${apellidos} con dni:  ${dni}`);
        go = false;
    }   
}

    


