// ECMAScript 10

// trim
// "                 dsdsddssd        ".trim() -> "dsdsddssd"
const texto = `       

Hola     mundo      


`;
// console.log(texto);

// flat
const array = [[1, 2, 3], [4, [5, 6], 7], 8, [9, 10]];

const empleado = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  hijos: [
    { nombre: "Pedro", edad: 5 },
    { nombre: "Maria", edad: 7 },
  ],
};

console.log(Object.values(empleado).flat());
const values = Object.values(empleado).flat();

let hijosCount = 0;

for (const value of values) {
  if (typeof value === "object") {
    hijosCount++;
  }
}

// Profundidad
// 0: 8
// 1: 1, 2, 3, 4, 7, 9, 10
// 2: 5, 6

console.log(array.flat(2));
