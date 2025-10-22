const container = document.createElement("div");
document.body.appendChild(container);
container.textContent = "container";
container.classList.add("products-container");


async function getClothes() {
  try {
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);

    if (!res.ok) throw Error("ERROOOOR");
    const data = await res.json();
    console.log(data);

    data.forEach((item) => {
        const productCard = document.createElement("div");
        productCard.classList.add("")

      const price = document.createElement("p");
      price.textContent = item.price;
      container.appendChild(price);

      const description = document.createElement("p");
      description.textContent = item.description;
      container.appendChild(description);

      const category = document.createElement("p");
      category.textContent = item.category;
      container.appendChild(category);

    });


  } catch (err) {
    console.error("feeeel", err.message);
  }
}

getClothes();
