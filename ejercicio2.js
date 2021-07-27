// Insertar variables en texto "La hora es (variable)"

let fecha = new Date();
let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1; //Siempre toca agregar +1 porque empieza el conteo en 0
let diaSemana = fecha.getDay(); //Así toma el número del día en que vamos
let dia = fecha.getDate();
let hora = fecha.getHours() + ":" + fecha.getMinutes();

// let formatoFecha = anio + "/" + mes + "/" + dia + ": " + hora; (Opción 1)
let formatoFecha = `El día es: ${dia} del ${mes} del año ${anio} y la hora actual es ${hora} ` 
// Alt +96 para sacar las comillas inclinadas 
// Con ellas podemos recibir variables

console.log(fecha);
console.log(formatoFecha);
