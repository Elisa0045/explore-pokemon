const path = "pokemon/1/";
const baseURL = "https://pokeapi.co/api/v2/";
fetch(baseURL + path)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
