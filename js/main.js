let nombrehospital = prompt("ingrese nombre de hospital:");
let direccionhospital = prompt("ingrese direccion de hospital:");
let telefonohospital = prompt("ingrese telefono de hospital:");
let emailhospital = prompt("ingrese email de hospital:");
let sitiohospital = prompt("ingrese sitio de hospital:");

localStorage.setItem("hospital", nombrehospital);
localStorage.setItem("direccionhospital", direccionhospital);
localStorage.setItem("telefonohospital", telefonohospital);
localStorage.setItem("emailhospital", emailhospital);
localStorage.setItem("sitiohospital", sitiohospital);
