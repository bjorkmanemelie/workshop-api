const container = document.createElement("div");
document.body.appendChild(container);
container.textContent = "container";


async function getClothes() {
try {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);

  if (!res.ok) throw Error("ERROOOOR MTH");
  const data = await res.json();
  console.log(data);
    data.forEach((item) => {
        const price = document.createElement("p");
        price.textContent = item.price;
        container.appendChild(price);

        const description = document.createElement("p");
        description.textContent = item.description;
        container.appendChild(description);
    });



} catch (err){
    console.error("feeeel", err.message);
}

};

getClothes();

