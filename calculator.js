let op = document.getElementById("op");

const operaciones = () => {
    let num1 = 0;
    let num2 = 0;
    let resultado = 0;
    
// Menú
    while (resultado = true) {
        let op = prompt(
            "Escribe:  \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - División \n 5 - Salir"
        );

        while (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
            if (op === "5") {
                return alert("Gracias por usar nuestra app. Hasta pronto.");
            }
            alert("Favor ingresar una opción válida de 1 a 5");
            op = prompt(
                "Escribe:  \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - División \n 5 - Salir"
            );
        }

        let num1 = parseFloat(prompt("Ingrese número 1"));
        while (isNaN(num1)) {
            alert("Debes ingresar un número");
            num1 = parseFloat(prompt("Ingrese número 1"));
        }

        let num2 = parseFloat(prompt("Ingrese número 2"));
        while (isNaN(num2)) {
            alert("Debes ingresar un número");
            num2 = parseFloat(prompt("Ingrese número 2"));
        }

        if (op === "1") {
            resultado = num1 + num2;
        }
        else if (op === "2") {
            resultado = num1 - num2;
        }
        else if (op === "3") {
            resultado = num1 * num2;
        }

        else if (op === "4") {
            while (num2 === 0) {
                return alert("No se puede dividir por 0");
            }
            resultado = num1 / num2;
        }

        alert("El resultado es: " + resultado);
        resultado = true;
    }
};

//Eventos
op.onclick = function () {
    operaciones();
};