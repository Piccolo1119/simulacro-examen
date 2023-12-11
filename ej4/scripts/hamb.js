
//voy a coger del html la clase que se llama hamburger
//tambien la clase que se llama nav-links y almaceno a cada una en una constante
const burger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');

//ahora creo un metodo que llame a la variable burger(que almacena la clase hamburger)
//donde cuando haga click en el icono, se active una función que provoca que a la clase 'nav-links'
// se le añada/active el estado 'active' que provoca que este se muestre.

burger.addEventListener('click', function() {
    navlinks.classList.toggle('active');
})

