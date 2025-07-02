const searchBtn = document.querySelector("button");
const div = document.querySelector("div");

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    displayWeather();
});

function getCity() {
    return document.querySelector("input").value.toLowerCase();
}

function getEmoji(code) {
    switch (code) {
        case 0: return "☀️";
        case 1:
        case 2: return "⛅️";
        case 3: return "☁️";
        case 45:
        case 48: return "🌫️";
        case 51:
        case 53:
        case 55: return "🌦️";
        case 61:
        case 63:
        case 65: return "🌧️";
        case 66:
        case 67: return "🌨️";
        case 71:
        case 73:
        case 75: return "❄️";
        case 95: return "⛈️";
        case 96:
        case 99: return "⛈️⚡";
        default: return "☁️";
    }
}

async function fetchCoordinates(city) {
    if (!city) city = 'Kyiv';
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
    }
    return {
        name: data.results[0].name,
        lat: data.results[0].latitude,
        lon: data.results[0].longitude
    };
}

async function fetchForecast(lat, lon) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    return await response.json();
}

async function displayWeather() {
    try {
        div.innerHTML = "";
        const cityInput = getCity();
        const { name, lat, lon } = await fetchCoordinates(cityInput);
        const forecast = await fetchForecast(lat, lon);

        document.querySelector("h1").textContent = name;

        for (let i = 0; i < 7; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("dayDiv");

            const date = forecast.daily.time[i];
            const emoji = getEmoji(forecast.daily.weathercode[i]);
            const tempMin = forecast.daily.temperature_2m_min[i];
            const tempMax = forecast.daily.temperature_2m_max[i];

            dayDiv.innerHTML = `
                <h3>${i === 0 ? "Today" : new Date(date).toDateString()}</h3>
                <p style="font-size: 40px; margin: 5px 0;">${emoji}</p>
                <p>${tempMin}°C | ${tempMax}°C</p>
            `;

            div.appendChild(dayDiv);
        }

    } catch (error) {
        console.error(error);
        div.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

displayWeather();