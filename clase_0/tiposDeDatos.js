// Declarar variables
// let -> Nos permite definir una variable que puede reasignarse
// const -> Nos permite definir una variable que no puede reasignarse

// ¿Qué es reasignar?
// Reasignar es cambiar el valor de una variable
// Por ejemplo:
// let nombre = "Juan";
// nombre = "Pedro"; // -> Reasignamos el valor de la variable nombre

// Tipos de Datos

// Primitivos
// String
let nombre = "Juan";

// Number
let aniosExperiencia = 10;
let edad = 27;
let peso = 50.8;
let altura = 1.68;

// Booleano
let esSoltero = false;
let esMayorDeEdad = edad >= 18;

// Undefined
let hijos = null; // -> null es un valor especial que representa la ausencia de valor
let mascotas; // -> undefined

console.log(nombre);
console.log(aniosExperiencia);
console.log(edad);
console.log(peso);
console.log(altura);
console.log(esSoltero);
console.log(esMayorDeEdad);
console.log(hijos);
console.log(mascotas);

// Tipos de Datos Compuestos
// Array
// Lo ideal es que sea del mismo tipo
// let lenguajes = ["JavaScript", 20, true]; // ❌
let lenguajes = ["JavaScript", "Python", "Java"]; // ✅

// Posiciones en un array

//       0          1       2    -> Índices
// [           ] [      ] [    ] -> Contiene 3 Elementos
// "JavaScript" "Python" "Java"

// Mostar un elemento del array
console.log(lenguajes[0]); // -> "JavaScript"

lenguajes[50] = "C#";

console.log(lenguajes[50]); // -> undefined
console.log(lenguajes);

// Métodos de Arrays

// Objetos literales
let empleado = {
  // propiedad: valor
  "nombre del empleado": nombre,
  edad: edad,
  esSoltero, // Es lo mismo que esSoltero: esSoltero
  direccion: {
    calle: "Calle false",
    numero: 123,
    localidad: "Springfield",
  },
};

// Mostrar un elemento en un objeto
console.log(empleado.edad); // -> 27
console.log(empleado["nombre del empleado"]); // -> "Juan"

empleado.pais = "Argentina";

console.log(empleado.pais); // -> "Argentina"

console.log(empleado.direccion.localidad); // -> "Springfield"

// Desafio clase
// Definir las siguientes variables
// nombre -> String
// edad -> Number
// precio -> Number
// nombres de series -> Array de Strings o de Objetos
// nombres de pelicuales -> Array de Strings o de Objetos
