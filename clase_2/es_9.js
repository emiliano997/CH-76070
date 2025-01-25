// ECMAScript 9

// Spread Operator
const empleado = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  puesto: "Desarrollador",
};

const empleado2 = {
  nombre: "Ana",
  apellido: "Gomez",
  puesto: "Diseñadora",
  sueldo: 1000,
};

const empleado3 = {
  nombre: "Pedro",
  apellido: "Gonzalez",
  experiencia: 2,
  edad: 25,
};

// const resultado = {
//   nombre: empleado.nombre,
//   apellido: empleado.apellido,
//   edad: empleado.edad,
//   puesto: empleado.puesto,
// };
// const resultado = { ...empleado };
// const resultado = { ...empleado, ...empleado2, ...empleado3 };

// console.log(resultado);

const lista = ["Juan", "Ana", "Pedro"];
const lista2 = ["Maria", "Carlos", "Ana"];

const resultadoLista = [...lista, ...lista2];

console.log(resultadoLista);

// Rest Operator

// Desestructuracion
const { puesto, nombre, ...tuki } = empleado;
console.log(puesto);
console.log(tuki);
