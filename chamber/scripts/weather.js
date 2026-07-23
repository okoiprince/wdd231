
const apiKey = "be85596064c96f6afa787afb9e38be29";

const latitude = 5.002646651503561;
const longitude = 8.35434003707949;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data could not be retrieved.");
        }

        const data = await response.json();

        // Display current weather
        document.querySelector("#temperature").textContent =
            `${Math.round(data.list[0].main.temp)}°C`;

        document.querySelector("#description").textContent =
            data.list[0].weather[0].description;

        // Display 3-day forecast
        const forecast = document.querySelector("#forecast");
        forecast.innerHTML = "";

        const days = [8, 16, 24];

        days.forEach(index => {
            const item = data.list[index];
            const date = new Date(item.dt_txt);

            const card = document.createElement("div");

            card.innerHTML = `
                <h4>${date.toLocaleDateString("en-US", { weekday: "short" })}</h4>
                <p>${Math.round(item.main.temp)}°C</p>
            `;

            forecast.appendChild(card);
        });

    } catch (error) {
        console.error(error);
    }
}

getWeather();