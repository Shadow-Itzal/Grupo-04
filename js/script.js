/* El JavaScript agrega la funcionalidad para alternar el menú hamburguesa. */


document.addEventListener("DOMContentLoaded", function() { /* Asegura que el código se ejecute después de que el DOM se haya cargado completamente. */
    const hamburgerMenu = document.querySelector(".hamburger-menu"); /* Selecciona el menú hamburguesa. */
    const navLinks = document.querySelector(".nav-links"); /* Selecciona la lista de enlaces de navegación. */

    hamburgerMenu.addEventListener("click", function() { /* Añade un evento de clic al menú hamburguesa. */
        hamburgerMenu.classList.toggle("active"); /* Alterna la clase active en el menú hamburguesa, activando las animaciones. */
        navLinks.classList.toggle("active"); /* Alterna la clase active en los enlaces de navegación, mostrando u ocultando el menú. */
    });
});
