class Handler {
  path = "";
  baseURL = "https://pokeapi.co/api/v2/";
  response = {};
  log = [];
  constructor(root) {
    this.root = root;
  }
  fetchPokemon(event) {
    event.preventDefault();
    const inputval = document.getElementsByName("userId")[0].value;
    this.path = `pokemon/${inputval}/`;
    fetch(this.baseURL + this.path)
      .then((res) => res.json())
      .then((data) => {
        this.displayPokemon(data);
        this.log.push({
          handler: "view pokemon",
          object: JSON.parse(JSON.stringify(data)),
        });
      })
      .catch((err) => console.error(err));
  }
  displayPokemon(pokemon) {
    const $div = document.createElement("div");
    const $p = document.createElement("p");
    $p.textContent = pokemon.name;
    const $img = document.createElement("img");
    $img.src = pokemon.sprites.front_shiny;
    $div.appendChild($p);
    $div.appendChild($img);
    this.root.appendChild($div);
  }
}

function eventListeners() {
  const handler = new Handler(document.getElementById("root"));
  document
    .getElementById("choose-pokemon-button")
    .addEventListener("click", (event) => handler.fetchPokemon(event));
}

eventListeners();
