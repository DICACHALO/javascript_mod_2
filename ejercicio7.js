// Ejemplo While

let op = prompt("Ingrese 1 para sumar y 2 para restar");

/* if (op !== "1" && op !== "2") {
    alert("Favor ingrese una opción válida entre 1 y 2");
} else {
    alert("Se piden los números y se hacen operaciones");
} */

//Con un While se pregunta reiteradamente hasta que el usuario escribe la opción correcta

while (op !== "1" && op !== "2") {
    alert("Favor ingrese una opción válida entre 1 y 2");
    op = prompt("Ingrese 1 para sumar y 2 parar restar");
}