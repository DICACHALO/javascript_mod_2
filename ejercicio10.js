// JSON - objetos
// JSON es un tipo de dato que llegó gracias a javascript para los servicios web
// Su predecesor es XML 
// Javascript Object Notation

// Web services - Servicios SOAP UI
// API REST FULL (Primero backend y luego frontend)
// Las APIs ahora son URL
// Con POSTMAN simulamos un frontend para comunicarnos con el backend por medio de JSON

// SPA - Single Page Application (Angulor, React, Vue)
// Concepto de componentes

let usuario = {
    nombre : "Nancy",
    edad  : 54,
    documento : "123456789", //Si no voy a hacer operaciones siempre debe ir String
    casada    : true,
    user  : "naloor",
    pass    : "1234",

    //Se puede hacer funciones dentro de JSON pero es una mala práctica
    mensaje(){
        return alert("Hola");
    }
}

let mascota = {
    nombre : "Sultán",
    raza: "criollo"
}

let coleccion = [usuario, mascota];

console.log(usuario);
console.log(coleccion);