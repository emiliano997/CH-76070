// ECMAScript 11

// Nullish

const isSoltero = false;

// Si isSoltero es null o undefined, se asigna el valor de la derecha
// Si isSoltero es igual a falso, asigna el valor de la derecha
let mensaje = isSoltero || "Texto por defecto";

// Si isSoltero es igual a falso, asigna el valor igual
let mensaje2 = isSoltero ?? "Texto por defecto";

const numero = 10;

// 0 es igual a falso
if (0) {
  console.log("Es verdadero");
}

// Si numero es igual a 0, asigna el valor de la derecha
let resultado = numero - 10 !== 0 || "Texto por defecto";

const texto = ""; // false

// let resultado2 = texto || "Texto por defecto";
let resultado2 = texto ?? "Texto por defecto";

console.log(resultado2);

// Ejemplo update
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  isContratado: true,
};

const newPersona = {
  nombre: undefined,
  edad: 25,
  isContratado: false,
};

const updatedPersona = {
  nombre: newPersona.nombre ?? persona.nombre,
  edad: newPersona.edad ?? persona.edad,
  apellido: newPersona.apellido ?? persona.apellido,
  isContratado: newPersona.isContratado ?? persona.isContratado,
};

console.log(updatedPersona);
