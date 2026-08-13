const url = "data/services.json";
const cards = document.querySelector("#services");

//Display Cards
function displayServices(services) {

    services.forEach(service => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${service.title}</h2>
            <img src="images/${service.image}" alt="${service.title}">
            <p><strong>Price:</strong> ${service.price}</p>
            <p><strong>Description:</strong> ${service.description}</p>
            `;

        cards.appendChild(card);

    });

}

// Grid/List Toggle
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#services");

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");

    gridButton.classList.add("active");
    listButton.classList.remove("active");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");

    listButton.classList.add("active");
    gridButton.classList.remove("active");
});

//Call to JSON file
async function getServices() {

    const response = await fetch(url);

    const data = await response.json();

    displayServices(data);

}
gridButton.classList.add("active");
getServices();