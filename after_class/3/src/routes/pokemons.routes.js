import { Router } from "express";
import { io } from "../server.js";

export const pokemonRoutes = Router();

// "DB"
export const pokemons = [
  { name: "Pikachu", type: "Electric" },
  { name: "Bulbasaur", type: "Grass" },
  { name: "Charmander", type: "Fire" },
  { name: "Squirtle", type: "Water" },
];

pokemonRoutes.get("/", (req, res) => {
  res.json(pokemons);
});

pokemonRoutes.post("/", (req, res) => {
  const { name, type } = req.body;
  pokemons.push({ name, type });

  // Send new pokemon to all clients
  io.emit("new-pokemon", { name, type });

  res.json({ name, type });
});
