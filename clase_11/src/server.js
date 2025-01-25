import path from "path";
import express from "express";
import { Server } from "socket.io";
import handlebars from "express-handlebars";

import { __dirname } from "./dirname.js";
import { viewsRouter } from "./routes/views.routes.js";

const app = express();

// Express config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", viewsRouter);

const server = app.listen(5000, () => {
  console.log("Server running on port http://localhost:5000");
});

// Websockets
const io = new Server(server);

// "DB"
const messages = [];

// io -> Server
// socket -> Cliente
io.on("connection", (socket) => {
  console.log("New Client:", socket.id);

  socket.on("new-message", (data) => {
    messages.push(data);
    io.emit("messages", messages);
  });

  socket.emit("messages", messages);

  socket.on("new-user", (username) => {
    socket.broadcast.emit("connected", `${username} connected`);
  });
});
