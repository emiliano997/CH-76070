// ECMAScript 7

// Exponencial: **

let num1 = 5;

console.log(num1 ** 2); // 25
console.log(num1 ** 5); // 3125

// Array.includes
let array = ["dato1", "dato2", "dato3"];

// Antes
let datoEncontrado = "";

array.forEach((dato) => {
  if (dato === "dato2") {
    datoEncontrado = dato;
  }
});

if (datoEncontrado) {
  console.log("Dato encontrado");
}

// Ahora
if (array.includes("dato2")) {
  console.log("Dato encontrado");
} else {
  console.log("Dato no encontrado");
}
