const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// generateJoke();

async function generateJoke() {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const url = "https://icanhazdadjoke.com";
    const res = await fetch(url, config);

    if (!res.ok) throw Error("Couldnt fetch joke");
    const data = await res.json();
    // console.log(data);
    jokeElement.textContent = data.joke;
  } catch (err) {
    console.error("Couldnt fetch", err.message);
  }
}

jokeBtn.addEventListener("click", () => {
  generateJoke();
});
