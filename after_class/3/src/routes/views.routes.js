import { Router } from "express";
import { pokemons } from "./pokemons.routes.js";

export const viewsRoutes = Router();

viewsRoutes.get("/", (req, res) => {
  res.render("home", { pokemons });
});

viewsRoutes.get("/pokemons", (req, res) => {
  res.render("pokemons");
});
