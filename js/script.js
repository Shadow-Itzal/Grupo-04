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

// Inicialización de la base de datos de hospitales en formato JSON
const hospitalesJSON = `
    [
        {
            "nombre": "Hospital San Martín",
            "direccion": "Avenida 1 y 70",
            "telefono": "0221 421-1195",
            "email": "hsmartin@ms.gba.gov.ar",
            "sitio": "https://www.ms.gba.gov.ar/sitios/hsanmartin/"
        },
        {
            "nombre": "Hospital Rossi",
            "direccion": "Calle 37 entre 117 y 118 - Nº 183",
            "telefono": "0221 482-8821",
            "email": "administracionrossi@ms.gba.gov.ar",
            "sitio": "https://www.ms.gba.gov.ar/sitios/hrossi/"
        },
        {
            "nombre": "Hospital de Niños",
            "direccion": "Calle 14 entre 65 y 66 - N° 1631",
            "telefono": "0221 453-5901",
            "email": "ludovica@ms.gba.gov.ar",
            "sitio": ""
        },
        {
            "nombre": "Hospital San Juan de Dios",
            "direccion": "Calle 27 y 70",
            "telefono": "0221 457-5454",
            "email": "direccion-sjdios@ms.gba.gov.ar",
            "sitio": "https://www.ms.gba.gov.ar/sitios/hsanjuan/"
        }
    ]
`;

// Convertir el JSON inicial a un array de objetos
const hospitales = JSON.parse(hospitalesJSON);
console.log(hospitalesJSON); // mostrar el contenido JSON obtenido desde localStorage
console.log(typeof(hospitalesJSON)); // mostrar el tipo de datos del contenido JSON (string)


// Función para guardar en el Local Storage
function guardarEnLocalStorage(datos) {
    localStorage.setItem('hospitales', JSON.stringify(datos)); // esto trasnforma en string
}

// Función para cargar desde el Local Storage
function cargarDesdeLocalStorage() {
    const datos = localStorage.getItem('hospitales');
    return datos ? JSON.parse(datos) : hospitales; // pasar de datos JSON a objetos
}


// Función para marcar un hospital como BUENO o quitar la marca
function marcarBueno(index) {
    const hospitales = cargarDesdeLocalStorage();
    hospitales[index].bueno = !hospitales[index].bueno; // Alternar entre true y false
    guardarEnLocalStorage(hospitales);
    mostrarHospitales();
}

// Función para marcar un hospital como MALO o quitar la marca
function marcarMalo(index) {
    const hospitales = cargarDesdeLocalStorage();
    hospitales[index].malo = !hospitales[index].malo; // Alternar entre true y false
    guardarEnLocalStorage(hospitales);
    mostrarHospitales();
}


// Función para mostrar los hospitales en la página
function mostrarHospitales() {
    const hospitales = cargarDesdeLocalStorage();
    const contenedor = document.getElementById('hospitales');
    contenedor.innerHTML = ''; // limpiar el contenido previo del contenedor

    // Iterar sobre cada hospital y crear su representacion
    hospitales.forEach((hospital, index) => {
        const hospitalDiv = document.createElement('div'); // Crear un elemento 'div' para cada hospital
        hospitalDiv.className = 'hospital'; // Asignar la clase 'hospital' al nuevo 'div'

        // Configurar el contenido HTML del 'div' con la información del hospital
        hospitalDiv.innerHTML = `
            <h2>${hospital.nombre}</h2> 
            <p><strong>Dirección:</strong> ${hospital.direccion}</p>
            <p><strong>Teléfono:</strong> ${hospital.telefono}</p>
            <p><strong>Email:</strong> <a href="mailto:${hospital.email}">${hospital.email}</a></p>
            <p><strong>Sitio:</strong> <a href="${hospital.sitio}" target="_blank">${hospital.sitio}</a></p>
            <div class="boton-bueno">
                <button onclick="marcarBueno(${index})">¿Es bueno?</button> <span>${hospital.bueno ? '✔️' : ''}</span>
            </div>
            <div class="boton-malo">
                <button onclick="marcarMalo(${index})">¿Es malo?</button> <span>${hospital.malo ? '❌' : ''}</span>
            </div>
            <br>
        `;
        contenedor.appendChild(hospitalDiv); // Añadir el 'div' del hospital al contenedor en el DOM
    });
}

// Inicializar la lista de hospitales al cargar la página
document.addEventListener('DOMContentLoaded', mostrarHospitales);


