fetch('https://dummyjson.com/recipes/50')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        // Título de la receta
        const nombre = data.name;
        console.log(data.name);
        const h1 = document.createElement("h1");
        h1.innerText = nombre;
        document.body.appendChild(h1); // introducir 

        // Difi
        const difficulty = data.difficulty;
        const dificultadElemento = document.createElement("p");
        dificultadElemento.innerText = `Dificultad: ${difficulty}`;
        document.body.appendChild(dificultadElemento);

        // Ingredients
        const ingredients = data.ingredients;
        const ingredientesElemento = document.createElement("ul"); // lista
        document.body.appendChild(ingredientesElemento);
        for (let i = 0; i < ingredients.length; i++) {
            const item = document.createElement("li");
            item.innerText = ingredients[i];
            ingredientesElemento.appendChild(item);
        }

        // Pasos
        const instructions = data.instructions;
        const instruccionesElemento = document.createElement("ol"); // lista2
        document.body.appendChild(instruccionesElemento);
        for (let i = 0; i < instructions.length; i++) {
            const item = document.createElement("li");
            item.innerText = instructions[i];
            instruccionesElemento.appendChild(item);
        }

        // Img
        const imagenElemento = document.createElement("img");
        imagenElemento.src = data.image;
        imagenElemento.alt = `Imagen: ${nombre}`;
        imagenElemento.style.width = "50%";
        document.body.appendChild(imagenElemento);

        // Time
        const preparacion = data.prepTimeMinutes;
        const preparacionElemento = document.createElement("p");
        preparacionElemento.innerText = `Tiempopreparación: ${preparacion} minutos`;
        document.body.appendChild(preparacionElemento);

        // Time2
        const tiempoCocinado = data.cookTimeMinutes;
        const tiempoCocinadoElemento = document.createElement("p");
        tiempoCocinadoElemento.innerText = `Tiempococción: ${tiempoCocinado} minutos`;
        document.body.appendChild(tiempoCocinadoElemento);
    });




