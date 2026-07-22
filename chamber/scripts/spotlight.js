const spotlight_url = "data/members.json";
const container = document.querySelector("#spotlight-cards");

async function getSpotlights() {
    const response = await fetch(spotlight_url);
    const members = await response.json();

    // Select only Gold and Silver members
    const qualified = members.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    // Randomize the order
    qualified.sort(() => Math.random() - 0.5);

    // Display 3 random members
    displaySpotlights(qualified.slice(0, 3));
}

function displaySpotlights(members) {

    container.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="images/${member.image}" alt="${member.name}">

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Membership:</strong> ${member.membership}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>
        `;

        container.appendChild(card);
    });
}
getSpotlights();