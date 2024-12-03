// import fs from "fs";
import { promises as fs } from "fs";

const NOMBRE_ARCHIVO = "archivo.txt";

// --------------------------------------------
// Sincrono
// --------------------------------------------
// Crea o sobreescribe el archivo si existe
// fs.writeFileSync(NOMBRE_ARCHIVO, "Hola mundo desde Node.js");

// Verifica si el archivo existe
// if (fs.existsSync(NOMBRE_ARCHIVO)) {
// Lee el contenido del archivo
// let contenido = fs.readFileSync(NOMBRE_ARCHIVO, "utf-8");

// console.log(contenido);

// Agrega contenido al archivo
// fs.appendFileSync(NOMBRE_ARCHIVO, "\nHasta luego mundo desde Node.js");

// contenido = fs.readFileSync(NOMBRE_ARCHIVO, "utf-8");

// console.log(contenido);

// Elimina el archivo
// fs.unlinkSync(NOMBRE_ARCHIVO);
// }

// --------------------------------------------
// Callbacks
// --------------------------------------------
// fs.writeFile(NOMBRE_ARCHIVO, "Hola mundo desde Node.js", (error) => {
//   if (error) return console.error("Error al escribir el archivo", error);

//   console.log("Archivo creado");

//   fs.readFile(NOMBRE_ARCHIVO, "utf-8", (error, contenido) => {
//     if (error) return console.error("Error al leer el archivo", error);

//     console.log(contenido);

//     fs.appendFile(
//       NOMBRE_ARCHIVO,
//       "\nHasta luego mundo desde Node.js",
//       (error) => {
//         if (error)
//           return console.error("Error al agregar contenido al archivo", error);

//         console.log("Contenido agregado");
//         fs.readFile(NOMBRE_ARCHIVO, "utf-8", (error, contenido) => {
//           if (error) return console.error("Error al leer el archivo", error);

//           console.log(contenido);

//           fs.unlink(NOMBRE_ARCHIVO, (error) => {
//             if (error)
//               return console.error("Error al eliminar el archivo", error);

//             console.log("Archivo eliminado");
//           });
//         });
//       }
//     );
//   });
// });

// --------------------------------------------
// Asincrono / Promesas
// --------------------------------------------
async function main() {
  try {
    // await fs.writeFile(NOMBRE_ARCHIVO, "Hola mundo desde Node.js");
    const usuario = {
      nombre: "Emiliano",
      edad: 27,
      email: "emi@gmail.com",
    };

    const usuarios = [
      { nombre: "Emiliano", edad: 27, email: "emi@gmail.com" },
      { nombre: "Juan", edad: 30, email: "juan@gmail.com" },
      { nombre: "Pedro", edad: 25, email: "pedro@gmail.com" },
    ];

    await fs.writeFile("usuario.json", JSON.stringify(usuarios, null, 2));

    let contenido = await fs.readFile("usuario.json", "utf-8");
    contenido = JSON.parse(contenido);

    contenido.forEach((user) => {
      console.log(user.nombre);
    });

    // await fs.appendFile(NOMBRE_ARCHIVO, "\nHasta luego mundo desde Node.js");

    // contenido = await fs.readFile(NOMBRE_ARCHIVO, "utf-8");

    // console.log(contenido);

    // await fs.unlink(NOMBRE_ARCHIVO);
  } catch (error) {
    console.error("Hubo un error al trabajar con el archivo", error);
  }
}

main();

// Actividad práctica
// const info = {
//   contenidoStr: fs.readFile("package.json", "utf-8"),
//   contenidoJson: JSON.parse(contenido),
//   size: contenido.length,
// };
