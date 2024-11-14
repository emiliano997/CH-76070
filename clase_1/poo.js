// Clases en JS
// Molde - Clase
class Empleado {
  // Propiedades
  nombre;
  apellido;
  edad;
  experiencia;
  direccion;

  #privado;

  // Propiedad estática de la clase
  static empresa = "Coderhouse";
  static cantidadEmpleados = 0;

  // Método constructor
  constructor(nombre, apellido, edad, experiencia, direccion) {
    // this -> Hace referencia a la instancia de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.experiencia = experiencia;
    this.direccion = direccion;

    Empleado.cantidadEmpleados++;
  }

  // Métodos
  chambear() {
    console.log(`${this.nombre} está chambeando`);
  }

  cobrar(sueldo) {
    console.log(`${this.nombre} está cobrando ${this.calcularSueldo(sueldo)}`);
  }

  calcularSueldo(sueldo) {
    return sueldo * this.experiencia;
  }

  // Método estático de la clase
  static mostarEmpresa() {
    console.log(`La empresa es ${Empleado.empresa}`);
  }

  static cambiarEmpresa(empresa) {
    Empleado.empresa = empresa;
  }
}

// Instanciar objetos
// const empleado1 = new Empleado("Juan", "Perez", 30, 5, "Calle Falsa 123");
// empleado1.chambear();

// const empleado2 = new Empleado("Maria", "Gomez", 25, 3, "Calle Falsa 456");
// empleado2.chambear();
// console.log(Empleado.empresa);
Empleado.mostarEmpresa();

console.log(Empleado.cantidadEmpleados);

Empleado.cambiarEmpresa("Google");

// Usan static cuando no necesitan una instancia de la clase
