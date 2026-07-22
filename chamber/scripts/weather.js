const key = "be85596064c96f6afa787afb9e38be29";

const weather_url = `https://api.openweathermap.org/data/2.5/forecast?q=Calabar&units=metric&appid=${key}`;

async function getWeather() {

    const response = await fetch(weather_url);

    const data = await response.json();

    displayWeather(data);

}

function displayWeather(data) {

    document.querySelector("#temperature").textContent =
        `${data.list[0].main.temp.toFixed(1)}°C`;

    document.querySelector("#description").textContent =
        data.list[0].weather[0].description;

    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    const days = [8, 16, 24];

    days.forEach(day => {

        const p = document.createElement("p");

        p.textContent =
            `${new Date(data.list[day].dt_txt).toLocaleDateString("en", { weekday: "short" })}: ${data.list[day].main.temp.toFixed(0)}°C`;

        forecast.appendChild(p);

    });

}

getWeather();