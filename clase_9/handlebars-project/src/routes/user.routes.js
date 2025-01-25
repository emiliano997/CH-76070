import { Router } from "express";

export const userRoutes = Router();

// "Database"
export const users = [
  { id: 1, name: "Cristian", email: "cristian@gmail.com" },
  { id: 2, name: "Diego", email: "diego@gmail.com" },
  { id: 3, name: "Tamara", email: "tamara@gmail.com" },
];

userRoutes.get("/", (req, res) => {
  res.json(users);
});

userRoutes.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));

  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
});

userRoutes.post("/", (req, res) => {
  const { name, email } = req.body;

  // const fields = ["name", "email"];

  // Object.keys(req.body).forEach((key) => {
  //   if (!fields.includes(key))
  //     return res.status(400).json({ message: "Invalid field" });
  // });

  if (!name || !email)
    return res.status(400).json({ message: "Name and email are required" });

  const userExists = users.some((user) => user.email === email);

  if (userExists)
    return res.status(409).json({ message: "User already exists" });

  const user = {
    id: users[users.length - 1].id + 1,
    name,
    email,
  };

  users.push(user);

  res.status(201).json(user);
});
