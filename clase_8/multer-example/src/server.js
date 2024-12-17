import express from "express";
import { userRoutes } from "./routes/users.routes.js";
import { petRouter } from "./routes/pets.routes.js";
import { __dirname } from "./dirname.js";
import path from "path";

const app = express();
const PORT = 5000;

// Express configuration
app.use(express.json()); // JSON.parse()
app.use(express.urlencoded({ extended: true }));
// Public con ruta relativa
// app.use(express.static("public"));
// app.use("/public", express.static("public"));

// Public con ruta absoluta ✅
app.use(express.static(path.resolve(__dirname, "../public")));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/pets", petRouter);

// App Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
