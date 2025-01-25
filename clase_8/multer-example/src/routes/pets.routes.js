import { Router } from "express";
import { validateId } from "../middlewares/validateId.js";
import { uploader } from "../middlewares/multer.middleware.js";

export const petRouter = Router();

const pets = [
  { id: 1, name: "Firulais", breed: "Perro" },
  { id: 2, name: "Mishi", breed: "Gato" },
  { id: 3, name: "Pepito", breed: "Carpincho" },
];

// ------------------------------
// GET /pets
// ------------------------------
petRouter.get("/", (req, res) => {
  res.status(200).json(pets);
});

// ------------------------------
// GET /pets/:id
// ------------------------------
petRouter.get("/:id", validateId, (req, res) => {
  console.log("Handler GET /pets/:id");
  const { id } = req.params;

  const pet = pets.find((pet) => pet.id === Number(id));

  if (!pet) return res.status(404).json({ error: "Mascota no encontrada" });

  res.status(200).json({ pet });
});

// ------------------------------
// POST /pets
// ------------------------------
petRouter.post("/", uploader.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Imagen requerida" });
  }

  console.log(req.file);

  const { name, breed } = req.body;

  if (!name || !breed)
    return res.status(400).json({ error: "Todos los campos son requeridos" });

  const pet = {
    id: pets[pets.length - 1].id + 1,
    name,
    breed,
  };

  pets.push(pet);

  res.status(201).json({
    message: "Mascota creada",
    pet,
  });
});

// ------------------------------
// TODO: PUT /pets/:id
// ------------------------------

// ------------------------------
// TODO: DELETE /pets/:id
// ------------------------------
