import express from "express";

const app = express();
const PORT = 5000;

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Entidad Usuario
// "DB"
const users = [
  { id: 1, name: "Tamara", email: "tamara@gmail.com" },
  { id: 2, name: "Cristian", email: "cristian@gmail.com" },
  { id: 3, name: "Gustavo", email: "gustavo@gmail.com" },
];

// ------------------------------
// GET /users
// ------------------------------
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// ------------------------------
// GET /users/:id
// ------------------------------
app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id)))
    return res.status(400).json({ error: "El ID debe ser un número válido" });

  const user = users.find((user) => user.id === Number(id));

  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  res.send({ user });
});

// ------------------------------
// POST /users
// ------------------------------
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email)
    return res.status(400).json({ error: "Todos los campos son requeridos" });

  const userExists = users.some((user) => user.email === email);

  if (userExists)
    return res
      .status(409)
      .json({ error: "El usuario con ese email ya existe" });

  const newUser = {
    id: users[users.length - 1].id + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "Usuario creado exitosamente",
    user: newUser,
  });
});

// ------------------------------
// PUT /users/:id
// ------------------------------
app.put("/users/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id)))
    return res.status(400).json({ error: "El ID debe ser un número válido" });

  const { name, email } = req.body;

  if (!name || !email)
    return res.status(400).json({ error: "Todos los campos son requeridos" });

  const user = users.find((user) => user.id === Number(id));

  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  const index = users.findIndex((user) => user.id === Number(id));

  user.name = name ?? user.name;
  user.email = email ?? user.email;

  users[index] = user;

  res.status(200).json({
    message: "Usuario actualizado exitosamente",
    user,
  });
});

// ------------------------------
// DELETE /users/:id
// ------------------------------
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id)))
    return res.status(400).json({ error: "El ID debe ser un número válido" });

  const userExists = users.find((user) => user.id === Number(id));

  if (!userExists)
    return res.status(404).json({ error: "Usuario no encontrado" });

  const index = users.findIndex((user) => user.id === Number(id));

  users.splice(index, 1);

  res.status(200).json({
    message: "Usuario eliminado exitosamente",
    user: userExists,
  });
});

// App Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
