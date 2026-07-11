const url = "data/members.json";
const cards = document.querySelector("#members");

//Display Cards
function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${member.name}</h2>
            <img src="images/${member.image}" alt="${member.name}">
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Description:</strong> ${member.description}</p>
            <p><strong>Membership Level:</strong> ${member.membership}</p>
            <p class="website">
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>
        `;

        cards.appendChild(card);

    });

}

// Grid/List Toggle
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#members");

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
async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);

}
gridButton.classList.add("active");
getMembers();