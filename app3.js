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
      characters.textContent = tvShow.name;
      characters.classList.add("product-characters");

      productCard.appendChild(characters);
      container.appendChild(productCard);
    });
  } catch (err) {
    console.error("nu blev det fel", err.message);
  }
}

getRoM();
