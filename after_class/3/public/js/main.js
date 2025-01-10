const socket = io();

const pokemonList = document.getElementById("pokemons");

socket.on("init", (pokemons) => {
  pokemons.forEach((pokemon) => {
    const li = createPokemon(pokemon);
    pokemonList.appendChild(li);
  });
});

socket.on("new-pokemon", (pokemon) => {
  const li = createPokemon(pokemon);
  pokemonList.appendChild(li);
});

function createPokemon(pokemon) {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${pokemon.name}</strong>: ${pokemon.type}
  `;
  li.className = "collection-item";

  return li;
}
