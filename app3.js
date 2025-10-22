const container = document.createElement("div"); 
document.body.appendChild(container);
container.classList.add("products-container");

async function getRecipes() {
    try { //try betyder att koden försöker köra något som KAN gå fel.
    const url = 'https://dummyjson.com/recipes'; //fetchar endpointen 
    const res = await fetch (url);

}