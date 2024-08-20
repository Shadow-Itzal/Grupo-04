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



// ---------------------  INICIO BASE DE DATOS Y FUNCIONES - primeros auxilios ---------------

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
                <button class="botonHospital" onclick="marcarBueno(${index})">¿Es bueno?</button> <span>${hospital.bueno ? '✔️' : ''}</span>
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


// --------------------------   FIN BASE DE DATOS Y FUNCIONES   ----------------------



// ---------------------------  INICIO DE FORMULARIO - nosotros ---------------

// Seleccionamos el formulario y el contenedor de mensajes
const formulario = document.getElementById('formularioComentarios'); // Selecciona el formulario por su ID
const contenedorMensaje = document.getElementById('mensaje'); // Selecciona el contenedor de mensajes por su ID

// Manejamos el evento de envío del formulario
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario (enviar y recargar la página)

    // Obtenemos los valores de los campos
    const nombre = document.getElementById('nombre').value.trim(); // Obtiene el valor del campo de nombre y elimina espacios en blanco al inicio y final
    const correo = document.getElementById('correo').value.trim(); // Obtiene el valor del campo de correo y elimina espacios en blanco
    const comentario = document.getElementById('comentario').value.trim(); // Obtiene el valor del área de texto de comentario y elimina espacios en blanco

    // Validaciones
    if (nombre === '') { // Verifica si el campo de nombre está vacío
        mostrarMensaje('Por favor, ingrese su nombre.', 'error'); // Muestra un mensaje de error si el campo de nombre está vacío
        return; // Sale de la función para que no continúe con el envío
    }

    if (nombre.length < 3) { // Verifica si el nombre tiene menos de 3 caracteres
        mostrarMensaje('El nombre debe tener al menos 3 caracteres.', 'error'); // Muestra un mensaje de error si el nombre es demasiado corto
        return; // Sale de la función para que no continúe con el envío
    }


    if (!validarCorreo(correo)) { // Verifica si el formato del correo es válido usando la función validarCorreo
        mostrarMensaje('Por favor, ingrese un email válido.', 'error'); // Muestra un mensaje de error si el correo es inválido
        return; // Sale de la función para que no continúe con el envío
    }


    if (comentario === '') { // Verifica si el campo de comentario está vacío
        mostrarMensaje('Por favor, ingrese su comentario.', 'error'); // Muestra un mensaje de error si el campo de comentario está vacío
        return; // Sale de la función para que no continúe con el envío
    }

    if (comentario.length < 3) { // Verifica si el comentario tiene menos de 3 caracteres
        mostrarMensaje('El comentario debe tener al menos 3 caracteres.', 'error'); // Muestra un mensaje de error si el comentario es demasiado corto
        return; // Sale de la función para que no continúe con el envío
    }


    // Guardamos en localStorage
    guardarEnLocalStorage(nombre, correo, comentario); // Llama a la función para guardar los datos en el almacenamiento local del navegador

    // Mostramos mensaje de éxito
    mostrarMensaje('Comentario enviado con éxito.', 'exito'); // Muestra un mensaje de éxito después de guardar los datos

    // Limpiamos el formulario
    formulario.reset(); // Limpia todos los campos del formulario
});

// Función para validar el email
function validarCorreo(correo) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo electrónico
    return expresionRegular.test(correo); // Devuelve true si el correo es válido, false si no lo es
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo) {
    contenedorMensaje.textContent = mensaje; // Establece el texto del mensaje en el contenedor
    contenedorMensaje.className = tipo; // Añade una clase al contenedor de mensajes según el tipo (error o éxito)
}

// Función para guardar los datos en localStorage
function guardarEnLocalStorage(nombre, correo, comentario) {
    const datosComentario = {
        nombre: nombre, // Almacena el nombre en el objeto datosComentario
        correo: correo, // Almacena el correo en el objeto datosComentario
        comentario: comentario, // Almacena el comentario en el objeto datosComentario
        fecha: new Date().toLocaleString() // Almacena la fecha y hora actuales en el objeto datosComentario
    };

    // Obtenemos los comentarios previos del localStorage
    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || []; // Recupera el array de comentarios desde localStorage (si existe), o inicializa uno vacío

    // Añadimos el nuevo comentario
    comentarios.push(datosComentario); // Añade el nuevo comentario al array de comentarios

    // Guardamos nuevamente en el localStorage
    localStorage.setItem('comentarios', JSON.stringify(comentarios)); // Convierte el array de comentarios en una cadena JSON y lo guarda en localStorage
}


// ---------------------------  FIN DE FORMULARIO  ---------------