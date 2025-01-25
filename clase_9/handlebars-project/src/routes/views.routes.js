import { Router } from "express";
import { users } from "./user.routes.js";

export const viewsRoutes = Router();

viewsRoutes.get("/", (req, res) => {
  const { nombre } = req.query;

  // res.render(<nombre plantilla>, <datos a enviar>)
  res.render("home", {
    title: "Home",
    fechaActual: new Date().toLocaleString(),
    nombre: nombre ? nombre : "Invitado",
  });
});

viewsRoutes.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

viewsRoutes.get("/protected", (req, res) => {
  const user = {
    role: "admin",
  };

  res.render("protected", {
    title: "Protected",
    isAdmin: user.role === "admin",
    datos: users,
  });
});
