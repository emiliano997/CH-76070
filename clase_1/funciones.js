// Funcion tradicional
// function nombreDeLaFuncion(parametros) {}
// Declarar la funcion
function saludar(nombre) {
  return `Bienvenido ${nombre}`;
}

// Invocar a la función con un parámetro
saludar("Pepito"); // No se muestra en consola ni se guarda en una variable

console.log(saludar("Juan")); // Muestro el resultado de la función saludar

let resultado = saludar("Pedro"); // Guardo el resultado de la función saludar en la variable resultado
console.log(resultado);

// Función flecha
// const saludar2 = (nombre) => {
//   Si utilizo las llaves, si debe haber un return para devolver un valor
//   return `Bienvenido por segunda vez ${nombre}`;
// };

// Sino uso las llaves, tiene obligatoriamente un return implicito
// const saludar2 = (nombre) => (return) `Bienvenido por segunda vez ${nombre}`;

const saludar2 = (nombre) => `Bienvenido por segunda vez ${nombre}`;
console.log(saludar2("Juan"));
