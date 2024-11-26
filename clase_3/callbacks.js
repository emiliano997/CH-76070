// Ejemplo callback
// const boton = document.querySelector("button");

// function accionEvento() {
//   console.log("Se hizo click en el botón");
// }

// boton.addEventListener("click", accionEvento);
// boton.addEventListener("click", () => {
//   console.log("Se hizo click en el botón");
// });

const numeros = [1, 2, 3, 4, 5];
const nombres = ["Juan", "Pedro", "Ana", "Lucía"];

function duplicar(numero) {
  return numero * 2;
}

function mostrarElemento(elemento) {
  console.log(elemento);
}

// const resultado = numeros.map(duplicar(2)); // ❌
// const resultado = numeros.map(duplicar); // ✅
const resultado = numeros.map((numero) => numero * 2); // ✅

const numerosPares = numeros.filter((numero) => numero % 2 === 2);

// numeros.forEach(mostrarElemento);
// nombres.forEach(mostrarElemento);
numeros.forEach((numero) => console.log(numero));
nombres.forEach((nombre) => console.log(nombre));

console.log(resultado);
console.log(numerosPares);

// Operación interna de map
function customMap(arreglo, callback) {
  // Crea un nuevo array
  const resultado = [];

  // Recorre el array original aplicando el callback
  for (let i = 0; i < arreglo.length; i++) {
    resultado.push(callback(arreglo[i]));
  }

  // Devuelve el nuevo array
  return resultado;
}

const resultadoCustomMap = customMap([1, 2, 3, 4, 5], (numero) => numero * 2);

console.log(resultadoCustomMap);

Array.prototype.customMap = function (callback) {
  const resultado = [];

  // Recorre el array original aplicando el callback
  for (let i = 0; i < this.length; i++) {
    resultado.push(callback(this[i]));
  }

  // Devuelve el nuevo array
  return resultado;
};

console.log(numeros.customMap((numero) => numero * 5));

// Ejemplo de uso de callbacks
const db = {
  buscar: (nombre) => ["Juan", "Pedro", "Ana", "Lucía"].includes(nombre),
  obtener: () => ["Juan", "Pedro", "Ana", "Lucía"],
  guardar: (nombre) => console.log(`Guardando ${nombre}`),
  actualizar: (nombre) => console.log(`Actualizando ${nombre}`),
};

function modificarUsuario(usuarioNuevo) {
  // Chequeamos que el usuario exista
  db.buscar(usuarioNuevo, (error, existe) => {
    if (error) throw new Error("Error al buscar el usuario");

    if (!existe) throw new Error("El usuario no existe");

    db.actualizar(usuarioNuevo, (error) => {
      if (error) throw new Error("Error al actualizar el usuario");

      db.obtener((error, usuarios) => {
        if (error) throw new Error("Error al obtener los usuarios");

        console.log(usuarios);
      });
    });
  });
}
