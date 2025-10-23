const container = document.createElement("div");
document.body.appendChild(container);
container.classList.add("products-container");

async function getRoM() {
  try {
    //try betyder att koden försöker köra något som KAN gå fel.
    const url = "https://rickandmortyapi.com/api/character"; //fetchar endpointen
    const res = await fetch(url);

    if (!res.ok) throw Error("Error");
    const data = await res.json();
    console.log(data);

    data.results.forEach((tvShow) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const characters = document.createElement("p");
      characters.textContent = `Character: ${tvShow.name}`;
      characters.classList.add("product-characters");

      const location = document.createElement("p");
      location.textContent = `Location: ${tvShow.location.name}`;
      location.classList.add("product-location");

      const episode = document.createElement("p");
      episode.textContent = `Episodes: ${tvShow.episode.length}`;
      episode.classList.add("product-episode");

      productCard.appendChild(episode);
      productCard.appendChild(characters);
      productCard.appendChild(location);
      container.appendChild(productCard);
    });
  } catch (err) {
    //om något går fel så fångas det upp här
    console.error("nu blev det fel", err.message);
  }
}

getRoM();
