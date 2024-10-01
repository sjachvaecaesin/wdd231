const chillElement = document.querySelector("#chill");
const currentTemp = document.querySelector("#temp-value");
const windSpeed = document.querySelector("#wind-value");
const weatherIcon = document.querySelector("#weather-icon");
const castElement = document.querySelector("#forecast");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=37.70&lon=-85.86&units=imperial&appid=7e9cd116eaeea412c1716645e87192aa";
const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=37.70&lon=-85.86&units=imperial&appid=7e9cd116eaeea412c1716645e87192aa";

async function apiFetch() {
    try {
        const response = await fetch(url);
        const cast = await fetch(forecast);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
        if (cast.ok) {
            const fore = await cast.json();
            displayCast(fore);
        }
        else {
            throw Error(await cast.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayCast(data) {
    castElement.innerHTML = `3 Day Temperature Forecast: ${data.list[1].main.temp}&deg;F | ${data.list[2].main.temp}&deg;F | ${data.list[3].main.temp}&deg;F`
}

function displayResults(data) {
    if (data.main.temp <= 50 && data.wind.speed > 3) {
        let chill = 35.74 + (0.6215 * data.main.temp) - (35.75 * data.wind.speed**0.16) + (0.4275 * data.main.temp * data.wind.speed**0.16);
        chillElement.textContent = `Wind Chill: ${chill.toFixed(2)}`;
    }
    else {
        chillElement.textContent = "Wind Chill: N/A";
    }

    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    windSpeed.innerHTML = `${data.wind.speed}`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "Weather Img");
    captionDesc.textContent = `${desc.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}`;
}