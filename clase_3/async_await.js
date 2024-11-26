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

// Async Await
// let resultado = await esPar(2); // Top Level await ❌

async function main() {
  try {
    const resultado = await esPar(5);

    if (!resultado.esPar) {
      console.log("El número no es par");
      return; // Esto corta la función
    }

    const resultadoMultiplicacion = await multiplicar(resultado.numero);

    console.log(resultadoMultiplicacion);

    const resultadoDivision = await dividir(resultadoMultiplicacion);

    console.log(resultadoDivision);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Proceso finalizado");
  }
}

main();
