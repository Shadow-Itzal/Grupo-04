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



// ---------------------  INICIO BASE DE DATOS Y FUNCIONES  ---------------

// Array de bjetos literales que contiene la información de contacto de los hospitales
const hospitales = [
    {
        nombre: "Hospital San Martín",
        direccion: "Avenida 1 y 70",
        telefono: "0221 421-1195",
        email: "hsmartin@ms.gba.gov.ar",
        sitio: "https://www.ms.gba.gov.ar/sitios/hsanmartin/"
    },
    {
        nombre: "Hospital Rossi",
        direccion: "Calle 37 entre 117 y 118 - Nº 183",
        telefono: "0221 482-8821",
        email: "administracionrossi@ms.gba.gov.ar",
        sitio: "https://www.ms.gba.gov.ar/sitios/hrossi/"
    },
    {
        nombre: "Hospital de Niños",
        direccion: "Calle 14 entre 65 y 66 - N° 1631",
        telefono: "0221 453-5901",
        email: "ludovica@ms.gba.gov.ar",
        sitio: " "
    },
    {
        nombre: "Hospital San Juan de Dios",
        direccion: "Calle 27 y 70",
        telefono: "0221 457-5454",
        email: "direccion-sjdios@ms.gba.gov.ar",
        sitio: "https://www.ms.gba.gov.ar/sitios/hsanjuan/"
    }
];

// Función para mostrar la información de los hospitales en la página web
function mostrarHospitales() {
    const contenedor = document.getElementById('hospitales'); // obtener el elemento HTML con el id 'hospitales'

    // Iterar sobre cada hospital en el array 'hospitales'
    hospitales.forEach(hospital => {
        const hospitalDiv = document.createElement('div'); // Crear un elemento 'div' para cada hospital
        hospitalDiv.className = 'hospital'; // Asignar la clase 'hospital' al nuevo 'div'

        // Configurar el contenido HTML del 'div' con la informacion del hospital
        hospitalDiv.innerHTML = `
            <h2>${hospital.nombre}</h2> 
            <p><strong>Dirección:</strong> ${hospital.direccion}</p>
            <p><strong>Teléfono:</strong> ${hospital.telefono}</p>
            <p><strong>Email:</strong> <a href="mailto:${hospital.email}">${hospital.email}</a></p>
            <p><strong>Sitio:</strong> <a href="${hospital.sitio}">${hospital.sitio}</a></p>
            <br>
        `;
        contenedor.appendChild(hospitalDiv); // Añadir el 'div' del hospital al contenedor en el DOM
    });
}

// Añadir un evento que llama a la función 'mostrarhospitales' al cargar la página
document.addEventListener('DOMContentLoaded', mostrarHospitales);
