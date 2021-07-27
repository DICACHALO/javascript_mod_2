// Array: tipo de datos que nos permite tener una lista de cualquier tipo de variable

let personas = []; //Lo declaro vacío y luego lo voy llenando

let animales = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpión", "Conejo"];
// 6 items con su respectiva posición que van de 0 a 5
// Como buena práctica cada array deber tener el mismo tipo de dato

//console.log(animales);
//console.log(animales.length);
//alert(animales);

// console.log(animales[3]);
//Para acceder a un dato en concreto dentro del arreglo

//for (let i = 0; i < animales.length; i++) {
//    console.log(animales[i]);
//}

animales[6] = "Dragón";
// Si utilizamos posición ya existente reemplaza el valor

animales.push("Ardilla");
animales.unshift("Tigre");


//delete animales[5]; 
//Borra el elemento pero el espacio sigue en memoria (vacío)

animales.splice(5,1);
// Borro desde la posición hasta el número que le indique, organiza los items y no deja espacio en memoria
// Es la forma óptima de borrar si no quiero que deje el espacio

for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}
