
//meto en una variable llamada flechas todas las arrow que hay en el html
const flechas = document.querySelectorAll('.arrow');

//indico que por cada flecha que se encuentre en el documento ocurra lo siguiente: 
flechas.forEach(arrow =>  {
    //al hacer un click en una de ellas comienza un proceso
    arrow.addEventListener('click', function () {
        //almacenamos en la constante submenu la clase siguiente a su padre.
        //en el caso de las flechas de fuera será el hermano de la clase menú-item (que es el 
        //padre de dichos arrow), el cual será la clase subMenú.

        //en el caso de las flechas de nested menu:
        //la clase padre de esas arrow es sub-menu-item, y su hermana es la clase
        //sub-menu con id=nested-menu.

        const submenu = this.parentElement.nextElementSibling;

        // a continuación se le aplica la clase almacenada en submenu
        submenu.classList.toggle('show');

        //se añade la clase rotate-arrow al elemento al cual se le ha dado click (la flecha)
        this.classList.toggle('rotate-arrow');
    });
});
