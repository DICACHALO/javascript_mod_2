// Optimizaciones de if

let edad = prompt("Ingresa tu edad");
let terminos = prompt("Escrbe Y para aceptar o N para rechazar");
let resultado = false;

if (terminos === "Y") {
    resultado = true;
} else {
    resultado = false;
}

switch (terminos) {
    case "Y":
        resultado = true;
        break;
    case "N":
        resultado = false;
    default:
        break;
}

// Operador ternario
// Optimizar if-else cortos o un switch-case con uno o dos casos

terminos === "Y" ? resultado = true : resultado = false;