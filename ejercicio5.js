// forEach
// Solo para recorrer arrays cuando no sé cuál es el límite

let animales = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpión", "Conejo"];

for (let animal in animales){
    console.log(animal); // Para ver la posición
    console.log(animales[animal]); // Para ver el nombre de cada elemento de la lista
    console.log(animal, animales[animal]);
}

animales.forEach(animal => {
    console.log(animal); // Muestra el nombre del item de una vez
});