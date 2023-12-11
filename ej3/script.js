/* Obten la hora actual del día con los métodos date() y getHours().
A continuación da los buendos días, buenas tardes o buenas noches dependiendo de la hora. */


//creo una variable que tenga el formato fecha actual
var fecha = new Date();
//creo otra variable donde quiero obtener la hora de hoy a partir de la fecha
var hora = fecha.getHours();

//pongo los condicionales donde dependiendo de qué hora sea ahora mismo me devolverá un mensaje distinto por cada
//uno
if (hora >= 6 && hora < 12 ) {
    alert("Buenos días!!!");
} else if (hora >= 12 && hora < 21) {
    alert("Buenas tardes!!!");
}
else {
    alert("Buenas noches!!!");
}

