import express from "express";

const app = express();

// Express config
app.use(express.urlencoded({ extended: true }));

// "/" => Ruta raíz (http://localhost:5000)
app.get("/", (request, response) => {
  console.log(request);

  response.send("<h1>Hola Coderhouses</h1>");
});

// "/saludo" -> Endpoint
app.get("/saludo", (req, res) => {
  res.send(`
    <div style="width: 100%; background-color: #fef; padding: 20px 0px; text-align: center;">
      <h1 style="color: darkblue;">Hola Coderhouse</h1>
    </div>  
  `);
});

// "/usuario" -> Endpoint
app.get("/usuario", (req, res) => {
  const user = {
    nombre: "Javier",
    apellido: "Aparicio",
    edad: 35,
    email: "javi@gmail.com",
  };

  res.json(user);
});

// "Base de Datos"
const users = [
  {
    id: 1,
    nombre: "Tamara",
    edad: 37,
    email: "tamara@gmail.com",
    curso: "Fullstack",
  },
  {
    id: 2,
    nombre: "Juan",
    edad: 30,
    email: "juan@gmail.com",
    curso: "Data Science",
  },
  {
    id: 3,
    nombre: "Pedro",
    edad: 25,
    email: "pedro@gmail.com",
    curso: "Backend",
  },
  {
    id: 4,
    nombre: "Tamara",
    edad: 20,
    email: "tamara@gmail.com",
    curso: "Backend",
  },
  {
    id: 5,
    nombre: "Javier",
    edad: 35,
    email: "javi@gmail.com",
    curso: "Fullstack",
  },
  {
    id: 6,
    nombre: "Laureano",
    edad: 27,
    email: "lau@gmail.com",
    curso: "Data Science",
  },
  {
    id: 7,
    nombre: "Arturo",
    edad: 40,
    email: "arturo@gmail.com",
    curso: "Fullstack",
  },
  {
    id: 8,
    nombre: "Yesica",
    edad: 23,
    email: "yesi@gmail.com",
    curso: "Data Science",
  },
  {
    id: 9,
    nombre: "Javier",
    edad: 35,
    email: "javi2@gmail.com",
    curso: "Fullstack",
  },
  {
    id: 10,
    nombre: "Gabriel",
    edad: 30,
    email: "gabi@gmail.com",
    curso: "Backend",
  },
];

// ------------------------
// req.param
// ------------------------
// app.get("/usuarios/:nombre", (req, res) => {
app.get("/usuarios/:id", (req, res) => {
  // const nombre = req.params.nombre; //  ❌ Anticuada
  // const { nombre } = req.params; // ✅ Moderna
  const { id } = req.params; // ✅ Moderna

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.json({ error: "Usuario no encontrado" });
  }

  res.json(user);
});

app.get("/cursos/:curso/:nombre", (req, res) => {
  const { nombre, curso } = req.params; // ✅ Moderna

  const user = users.find(
    (user) => user.nombre === nombre && user.curso === curso
  );

  if (!user) {
    return res.json({ error: "Usuario no encontrado" });
  }

  res.json(user);
});

// ------------------------
// req.query
// ------------------------
app.get("/usuarios", (req, res) => {
  const { curso, edad } = req.query;

  let respuesta = [];

  console.log(curso);

  if (curso) {
    const usuariosFiltrados = users.filter((user) => user.curso === curso);
    respuesta = usuariosFiltrados;
  }

  console.log(respuesta);

  if (edad) {
    if (respuesta.length > 0) {
      const usuariosFiltrados = respuesta.filter(
        (user) => user.edad === Number(edad)
      );
      respuesta = usuariosFiltrados;
    } else {
      const usuariosFiltrados = users.filter(
        (user) => user.edad === Number(edad)
      );
      respuesta = usuariosFiltrados;
    }
  }

  res.json({
    usuarios: respuesta.length > 0 && !curso && !edad ? users : respuesta,
  });
});

app.listen(5000, () => {
  console.log("Server listening on port http://localhost:5000");
});
