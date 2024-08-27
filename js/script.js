// --------------------------   INICIO MENU HAMBURGUESA - todas las paginas  ----------------------

/* El JavaScript agrega la funcionalidad para alternar el menú hamburguesa. */


document.addEventListener("DOMContentLoaded", function() { /* Asegura que el código se ejecute después de que el DOM se haya cargado completamente. */
    const hamburgerMenu = document.querySelector(".hamburger-menu"); /* Selecciona el menú hamburguesa. */
    const navLinks = document.querySelector(".nav-links"); /* Selecciona la lista de enlaces de navegación. */

    hamburgerMenu.addEventListener("click", function() { /* Añade un evento de clic al menú hamburguesa. */
        hamburgerMenu.classList.toggle("active"); /* Alterna la clase active en el menú hamburguesa, activando las animaciones. */
        navLinks.classList.toggle("active"); /* Alterna la clase active en los enlaces de navegación, mostrando u ocultando el menú. */
    });
});

// --------------------------   FIN MENU HAMBURGUESA   ----------------------



// --------------------------   INICIO DE FUNCION SALUDO - inicio  ---------------------- 

// Función que se ejecuta al cargar la página para mostrar un saludo basado en la hora del día
function mostrarSaludo() {
    
    const saludoElemento = document.getElementById('saludo'); // Obtiene el elemento HTML con el id 'saludo'
    const hora = new Date().getHours(); // Obtiene la hora actual del sistema (de 0 a 23)
    let saludo = '¡Bienvenido! Que tengas '; // Variable para almacenar el saludo

    // Determina el saludo basado en la hora del día
    if (hora >= 6 && hora < 12) {
        saludo += 'un buen día!';
    } else if (hora >= 12 && hora < 18) {
        saludo += 'una buena tarde!';
    } else {
        saludo += 'una buena noche!';
    }

    // Establece el contenido de texto del elemento 'saludo' con el mensaje completo de saludo
    saludoElemento.textContent = saludo;
}

// --------------------------   FIN DE FUNCION SALUDO   ----------------------




