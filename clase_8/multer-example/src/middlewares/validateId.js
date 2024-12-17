export function validateId(req, res, next) {
  console.log("Middleware validateId");

  const { id } = req.params;

  if (isNaN(Number(id)))
    return res.status(400).json({ error: "El ID debe ser un número válido" });

  next();
}
