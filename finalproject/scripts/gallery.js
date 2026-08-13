import { projects } from "../data/gallery.mjs";

const cards = document.querySelector("#gallery-cards");

function displayProjects() {
    projects.forEach(project => {
        const card = document.createElement("section");
        card.classList.add("gallery-card");

        card.innerHTML = `
            <h2>${project.title}</h2>

            <figure>
                <img src="${project.image}"
                     alt="${project.title}"
                     loading="lazy"
                     width="300" 
                     height="200">
            </figure>

            <p>${project.description}</p>

            <button> <a href="services.html" title="Check our service offers"> Learn More </a></button>
        `;

        cards.appendChild(card);
    });
}
displayProjects();

// Visitor Message

const message = document.querySelector("#visit-message");

const today = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {

    message.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const days = Math.floor(
        (today - Number(lastVisit)) /
        (1000 * 60 * 60 * 24)
    );

    if (days < 1) {

        message.textContent =
            "Back so soon! Awesome!";

    } else if (days === 1) {

        message.textContent =
            "You last visited 1 day ago.";

    } else {

        message.textContent =
            `You last visited ${days} days ago.`;
    }

}

localStorage.setItem("lastVisit", today);