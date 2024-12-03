import fs from "node:fs";

const contenido = `Fecha: ${new Date().toLocaleString()}`;
const NOMBRE_ARCHIVO = "fecha_actual.txt";

fs.writeFile(NOMBRE_ARCHIVO, contenido, (error) => {
  if (error) return console.error("Error al escribir el archivo");

  fs.readFile(NOMBRE_ARCHIVO, "utf-8", (error, contenido) => {
    if (error) return console.error("Error al leer el archivo");

    console.log(contenido);
  });
});
