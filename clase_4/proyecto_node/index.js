// const moment = require("moment");
import moment from "moment";

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

// Obtener fecha actual
const fechaActual = moment();

// Obtener fecha de mi nacimiento
const fechaNacimiento = moment("1997-01-19");

// Verificar que fechaNacimiento sea una fecha válida
if (!fechaNacimiento.isValid()) {
  console.log("Fecha de nacimiento inválida");
}

// Verificar cuantos dias pasaron desde mi nacimiento hasta hoy
const diasDesdeNacimiento = fechaActual.diff(fechaNacimiento, "years");

console.log(`Han pasado ${diasDesdeNacimiento} años desde mi nacimiento`);
