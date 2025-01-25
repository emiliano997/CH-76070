// ECMAScript 8

// Object.entries
// Devuelve un array de arrays con los pares clave/valor de un objeto
const persona = {
  nombre: "Juan", // 0
  apellido: "Perez", // 1
  edad: 30, // 2
  posicion: "Desarrollador Backend con JavaScript", // 3
  direccion: {
    calle: "Calle falsa 123",
    ciudad: "Springfield",
    pais: "Estados Unidos",
  },
};

const persona2 = {
  nombre: "Juan", // 0
  apellido: "Perez", // 1
  edad: 30, // 2
  posicion: "Desarrollador Backend con JavaScript", // 3
};

// [ [ 'nombre', 'Juan' ], [ 'apellido', 'Perez' ], [ 'edad', 30 ], [ 'posicion', 'Desarrollador Backend con JavaScript' ] ]
// console.log(Object.entries(persona));
const entries = Object.entries(persona);

// console.log(entries[3]);

// Object.keys
const personaKeys = ["nombre", "apellido", "edad", "posicion"];

const keys = Object.keys(persona);

const keys_2 = Object.keys(persona2);

if (keys.length === personaKeys.length) {
  console.log("Las claves son iguales");
} else {
  console.log("Las claves son diferentes");
}

// Object.values
const values = Object.values(persona);
console.log(values);

if (values.includes("Juan")) {
  console.log("El valor Juan existe en el objeto persona");
}

if (values.includes("Desarrollador")) {
  console.log(
    "El valor Desarrollador Backend con JavaScript existe en el objeto persona"
  );
}
