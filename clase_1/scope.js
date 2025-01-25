// Let y Scope
let nombre = "Juan"; // Scope global

function algo() {
  // Scope local de la funcion
  // let nombre = "Juan";
  nombre = "Pepito";

  if (true) {
    // Scope local del if
    let nombreIf = "Pepito";
    // Reasigno nombre
    nombre = "Fulanito"; // ✅
  }

  console.log(nombreIf);
}

// Const
// Reasignar el valor
// const DB_URI; // ❌
// DB_URI = "mysql://localhost:3306/curso"; // ❌
const DB_URI = "mongodb://localhost:27017/curso"; // ✅

// Mutabilidad
// Arrays
const nombres = ["Juan", "Pedro", "Pablo"];
nombres.push("Fulanito");
// nombres.pop();
nombres[50] = "Cosme";
console.log(nombres);

// Objetos
const persona = {
  nombre: "Juan",
  edad: 27,
};

persona.nombre = "Pedro";
persona.email = "pedro@gmail.com";

console.log(persona);
