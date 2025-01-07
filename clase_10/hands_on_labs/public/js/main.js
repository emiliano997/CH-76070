// Client de websocket
const socket = io();

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const level = document.getElementById("level").value;

  if (!name || !type || !level) {
    return alert("Todos los campos son obligatorios");
  }

  const data = {
    name,
    type,
    level,
  };

  socket.emit("create-pokemon", data);
});

socket.on("pokemon-list", (data) => {
  const pokemones = document.getElementById("pokemones");

  pokemones.innerHTML = "";

  data.forEach((pokemon) => {
    const li = document.createElement("li");
    li.innerHTML = `${pokemon.name} - ${pokemon.type} - ${pokemon.level}`;
    li.className = "collection-item";
    pokemones.appendChild(li);
  });
});
