// Closure: Es una función que recuerda el scope en el que fue creada.
function contador() {
  let contador = 0;

  return () => {
    contador++;
    console.log(contador);
  };
}

const contador1 = contador(); // Inicia contador en 0
contador1();
contador1();
contador1();
contador1();

const contador2 = contador(); // Inicia contador en 0
contador2();
contador2();
contador2();

contador1();
contador1();
