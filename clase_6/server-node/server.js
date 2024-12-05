const http = require("node:http");

// request: Petición
// response: Respuesta
const app = http.createServer((request, response) => {
  console.log(request.url);
  console.log(request.method);

  if (request.url === "/") {
    return response.end("Hola Coderhouses");
  } else if (request.url === "/mi-pagina-web") {
    return response.end("Hola Coderhouses desde mi página web");
  }
});

app.listen(5000, () => {
  console.log("Server listening on port http://localhost:5000");
});
