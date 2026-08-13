import { projects } from "../data/gallery.mjs";

const cards = document.querySelector("#gallery-cards");
const message = document.querySelector("#visit-message");

// Display Gallery Projects
function displayProjects() {
    try {
        if (!cards) {
            throw new Error("Gallery cards container was not found.");
        }

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

                <a class="gallery-btn"
                   href="services.html"
                   title="Check our service offers">
                   Learn More
                </a>
            `;

            cards.appendChild(card);
        });

    } catch (error) {
        console.error("Error displaying gallery projects:", error);

        if (cards) {
            cards.innerHTML = `
                <p class="error-message">
                    Sorry, we could not load the gallery projects.
                    Please try again later.
                </p>
            `;
        }
    }
}

displayProjects();


// Visitor Message
function displayVisitorMessage() {
    try {
        if (!message) {
            throw new Error("Visitor message element was not found.");
        }

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

    } catch (error) {
        console.error("Error displaying visitor message:", error);

        if (message) {
            message.textContent =
                "Welcome to Buzz Printing Press!";
        }
    }
}

displayVisitorMessage();