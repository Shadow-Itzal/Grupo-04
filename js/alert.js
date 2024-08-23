// --------------------------   INICIO DE ALERT CON FRASE - recetas  ------------------

// Obtenemos el día de la semana (0 = Domingo, 6 = Sábado)
const diaSemana = new Date().getDay();

// Recetas promocionales según el día de la semana
const recetas = {
    0: "Domingo: Refresca tu día con un Agua de pepino y limón.",
    1: "Lunes: Disfruta de un Batido verde détox para comenzar la semana lleno de energía.",
    2: "Martes: Prueba nuestra deliciosa Ensalada de quínoa y vegetales.",
    3: "Miércoles: Saboréate con una Ensalada de garbanzos y atún, perfecta para un almuerzo ligero.",
    4: "Jueves: Disfruta de un Pollo a la parrilla con espárragos para una cena saludable.",
    5: "Viernes: ¡Sorpréndete con un Salmón al horno con verduras para terminar la semana laboral!",
    6: "Sábado: Date un gusto con un Mousse de aguacate y chocolate o un Yogur griego con frutas y granola."
};

// Mostramos el alert con la receta del día
alert(recetas[diaSemana]);


// --------------------------    FIN DE ALERT CON FRASE  ----------------