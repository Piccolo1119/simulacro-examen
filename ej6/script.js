/* Crea un script que pida al usuario 5 números, y muestre en pantalla únicamente la suma 
de los que son números primos. */

//creo dos variables, contador y suma y los establezco a 0
let cont = 0;
let suma = 0;

//establezco que se pueden admitir como máximo la introducción de 5 numeros
while (cont < 5) {
    let num = parseInt(prompt("Dime un numero: "));
    //en caso de ser un numero y mayor de 0, el contador sube en una, menos numeros por introducir nos quedan
    if (!isNaN(num) && num > 0){
        cont++;
    } else {
        //en caso de no cumplir con las condiciones, sigue preguntando hasta que se introduzca un numero valido
        continue;
    }
    //declaramos el booleano esPrimo
    let esPrimo = true;
    //a continuación establecemos una estructura que se encargue de comprobar que el numero introducido es primo o no
    //para ello leemos sus divisores para comprobar si se puede dividir entre uno y por el mismo
    for (let i = 2; i <= num; i++) {
        //en caso de tener un resto 0 entre dos numeros que son diferentes, sabemos que no es primo y sale del bucle
        if (num % i === 0 && i !== num) {
            esPrimo = false;
            break;
        }
        //en caso de que no se cumpla sigue el bucle, si no el número será primo
    }
    // el numero primo que hemos hayado (introducido previamente) se suma a la variable suma
    if (esPrimo) {
        suma += num;
    }
}

//imprimimos por pantalla la suma de los primos

document.write(suma);
