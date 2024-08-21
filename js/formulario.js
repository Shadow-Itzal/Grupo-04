// ---------------------------  INICIO DE FORMULARIO - nosotros ---------------

// Seleccionamos el formulario y el contenedor de mensajes
const formulario = document.getElementById('formularioComentarios'); 
const contenedorMensaje = document.getElementById('mensaje'); 

// Manejamos el evento de envío del formulario
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario (enviar y recargar la página)

    // Obtenemos los valores de los campos
    const nombre = document.getElementById('nombre').value.trim(); // Obtiene el valor del campo de nombre y elimina espacios en blanco al inicio y final
    const correo = document.getElementById('correo').value.trim(); 
    const comentario = document.getElementById('comentario').value.trim();

    // Validaciones
    if (nombre === '') { // Verifica si el campo de nombre está vacío
        mostrarMensaje('Por favor, ingrese su nombre.', 'error'); // Muestra un mensaje de error si el campo de nombre está vacío
        return; // Sale de la función para que no continúe con el envío
    }

    if (nombre.length < 3) { // Verifica si el nombre tiene menos de 3 caracteres
        mostrarMensaje('El nombre debe tener al menos 3 caracteres.', 'error'); 
        return; 
    }


    if (!validarCorreo(correo)) { // Verifica si el formato del correo es válido usando la función validarCorreo
        mostrarMensaje('Por favor, ingrese un email válido.', 'error'); 
        return; 
    }


    if (comentario === '') { // Verifica si el campo de comentario está vacío
        mostrarMensaje('Por favor, ingrese su comentario.', 'error'); 
        return; 
    }

    if (comentario.length < 3) { // Verifica si el comentario tiene menos de 3 caracteres
        mostrarMensaje('El comentario debe tener al menos 3 caracteres.', 'error'); 
        return; 
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
        correo: correo, 
        comentario: comentario, 
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