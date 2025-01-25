import { Calculadora } from "./modulo";

let modo = "none";

async function importarDinamicamente() {
  if (modo === "calculadora") {
    const { Calculadora } = await import("./modulo.js");
    const calculadora = new Calculadora();

    console.log(calculadora.sumar(1, 2));
  } else if (modo === "none") {
    console.log(Calculadora);

    console.log("No se ha seleccionado un modo");
  }
}

importarDinamicamente();
