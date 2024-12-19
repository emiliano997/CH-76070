import express from "express";
import handlebars from "express-handlebars";
import path from "path";

import { __dirname } from "./dirname.js";
import { userRoutes } from "./routes/user.routes.js";
import { viewsRoutes } from "./routes/views.routes.js";

const app = express();
const PORT = 5000;

// Express config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../public")));

// Handlebars config
// Configuración del motor (engine)
app.engine(
  "hbs",
  handlebars.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

// Configuración de la carpeta de las vistas
app.set("views", path.join(__dirname, "views"));

// Configurar el motor de plantillas en nuestra aplicación
app.set("view engine", "hbs");

// Routes
app.use("/api/users", userRoutes);
app.use("/", viewsRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
