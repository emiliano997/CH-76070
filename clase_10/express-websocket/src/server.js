import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import { viewsRouter } from "./routes/views.routes.js";
import path from "path";

// Socket
import { Server } from "socket.io";

const app = express();

// Express config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../public")));

// Handlebars config
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Routes
app.use("/", viewsRouter);

// Referencia a nuestro servidor HTTP
const httpServer = app.listen(5000, () => {
  console.log("Server running on port http://localhost:5000");
});

// Creamos nuestro servidor de websocket
const io = new Server(httpServer);

// Server de websocket
// io.on("connection", (socket) => {
//   // socket -> cliente
//   console.log("Cliente conectado:", socket.id);

//   socket.on("mensaje", (data) => {
//     console.log("Mensaje recibido:", data);
//   });

//   socket.emit("mensaje-server", "Hola desde el servidor");

//   socket.broadcast.emit("mensaje-broad", "Hola desde el servidor (broadcast)");

//   io.emit("mensaje-all", "Hola desde el servidor (all)");
// });
