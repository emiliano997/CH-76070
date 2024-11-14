class Contador {
  contadorAsignado;
  contadorIndividual;

  static contadorGlobal = 0;

  constructor(contadorAsignado) {
    this.contadorAsignado = contadorAsignado;
    this.contadorIndividual = 0;
  }

  contar() {
    this.contadorIndividual++;
    Contador.contadorGlobal++;
  }

  getContadorAsignado() {
    return this.contadorAsignado;
  }

  getCuentaIndividual() {
    return this.contadorIndividual;
  }

  static getCuentaGlobal() {
    return Contador.contadorGlobal;
  }
}

const contador1 = new Contador("Juan");
const contador2 = new Contador("Pedro");

contador1.contar();
contador1.contar();
contador1.contar();

contador2.contar();
contador2.contar();
contador2.contar();
contador2.contar();
contador2.contar();

console.log(
  `Contador ${contador1.getContadorAsignado()}: ${contador1.getCuentaIndividual()}`
);
console.log(
  `Contador ${contador2.getContadorAsignado()}: ${contador2.getCuentaIndividual()}`
);
console.log(`Contador global: ${Contador.getCuentaGlobal()}`);
