fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=salad")
.then((response) => response.json())
.then((comidas) => {
    const recetas = comidas.meals;
    console.log(recetas);


    let cartas = document.querySelector("#recetas-card");
    // Recorremos cada receta y creamos el HTML correspondiente
    for (let i = 0; i < recetas.length; i++) {
        let receta = recetas[i];
        
        cartas.innerHTML += `
        <div class = "recetas-cartas">
            <img src="${receta.strMealThumb}" alt="${receta.strMeal}" />
            <h2>${receta.strMeal}</h2>
            <p><strong>Categoría:</strong> ${receta.strCategory}</p>
            <p><strong>Área:</strong> ${receta.strArea}</p>
        </div>
        `;
    }
})
.catch((error) => {
    console.log("Error al obtener recetas", error);
})

