import path from "path";
import morgan from "morgan";
import express from "express";
import { Server } from "socket.io";
import handlebars from "express-handlebars";

import { __dirname } from "./dirname.js";
import { viewsRoutes } from "./routes/views.routes.js";
import { pokemonRoutes, pokemons } from "./routes/pokemons.routes.js";

const app = express();

// Express config
app.use(morgan("dev"));
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
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "./views"));

// Routes
app.use("/", viewsRoutes);
app.use("/api/pokemons", pokemonRoutes);

// WebSocket config
const server = app.listen(5000, () =>
  console.log("Server running on port http://localhost:5000")
);

export const io = new Server(server);

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.emit("init", pokemons);
});
