const esPar = (numero) => {
  return new Promise((resolve, reject) => {
    // Verifica que el valor ingresado sea un número
    if (isNaN(Number(numero))) {
      return reject({ error: "El valor ingresado no es un número" });
    }

    // Verifica que el valor sea mayor a 0
    if (numero <= 0) {
      return reject({ error: "El valor ingresado debe ser mayor a 0" });
    }

    if (numero % 2 !== 0) {
      return reject({ error: "El número no es par" });
    }

    setTimeout(() => {
      resolve({ esPar: true, numero });
    }, 2000);
  });
};

// const resultado = esPar(2);
// console.log(resultado); // Promise { { esPar: true } }

esPar("10")
  .then((resultado) => {
    if (resultado.esPar) {
      return resultado.numero * 5;
    }
  })
  .then((resultado) => {
    console.log(resultado);
    return "Hola mundo";
  })
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Proceso finalizado");
  });

// Ejemplo 2

const multiplicar = (numero) => {
  return new Promise((resolve, reject) => {
    if (isNaN(Number(numero))) {
      return reject({ error: "El valor ingresado no es un número" });
    }

    setTimeout(() => {
      resolve(numero * 2);
    }, 2000);
  });
};

const dividir = (numero) => {
  return new Promise((resolve, reject) => {
    if (isNaN(Number(numero))) {
      return reject({ error: "El valor ingresado no es un número" });
    }

    if (numero === 0) {
      return reject({ error: "No se puede dividir por 0" });
    }

    setTimeout(() => {
      resolve(numero / 2);
    }, 2000);
  });
};

esPar(2)
  .then((resultado) => {
    multiplicar(resultado.numero)
      .then((resultado) => {
        dividir(resultado)
          .then((resultado) => {
            console.log(resultado);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
