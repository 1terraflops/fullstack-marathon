document.querySelector("button").addEventListener("click", async () => {
    const button = document.querySelector("button");
    button.disabled = true;
    button.textContent = "Loading...";

    const res = await fetch("/api/characters");
    const data = await res.json();

    const container = document.getElementById("characters");
    container.innerHTML = "";

    data.results.forEach(char => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <h3>${char.name}</h3>
        <img src="${char.thumbnail.path}.${char.thumbnail.extension}" alt="${char.name}" />
        <p>${char.description}</p>
        `;
        container.appendChild(card);
    });

    button.remove();
});