// Debemos generar 10000 numeros aleatorios entre 1 y 20.

// Almacenar en un objeto como clave seria el numero y valor las veces que salio dicho numero

// Resultado:
// const resultado = {
//   1: 30,
//   2: 50,
//   3: 100,
// };

const resultado = {};

for (let i = 0; i < 10000; i++) {
  // Generamos el numero aleatorio
  const numeroAleatorio = Math.floor(Math.random() * 20 + 1);

  if (resultado[numeroAleatorio]) {
    resultado[numeroAleatorio]++;
  } else {
    resultado[numeroAleatorio] = 1;
  }
}

console.log(resultado);

console.log(__dirname);
