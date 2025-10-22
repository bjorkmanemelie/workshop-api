const container = document.createElement("div"); 
document.body.appendChild(container);
container.classList.add("products-container");

async function getMoM() {
    try { //try betyder att koden försöker köra något som KAN gå fel.
    const url = "https://rickandmortyapi.com/api"; //fetchar endpointen 
    const res = await fetch (url);

        if (!res.ok) throw Error("Error")
            const data = await res.json();
            console.log(data);

        data.forEach((tvShow) => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                const characters = document.createElement("p");
                container.appendChild(characters);
            

        });
    } catch (err) {
        console.error("nu blev det fel", err.message);
    }
}

getMoM();