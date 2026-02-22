const CityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')
const apiCountryURL = `https://flagsapi.com/`

const cityElement = document.querySelector("#city");
const TempElement = document.querySelector("#temperature");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const weatherContainer = document.querySelector("#weather-data")

// funções

const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
    const res = await fetch(apiWeatherURL)
    const data = await res.json();
    return data
};

const ShowWeatherData = async (city) => {
    const data = await getWeatherData(city);

    // unsplash - mudança de background
    try {
        const photoRes = await fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_KEY}`);
        const photoData = await photoRes.json();

        if (photoData.results.length > 0) {
            const photoURL = photoData.results[0].urls.regular;
            document.body.style.backgroundImage = `url(${photoURL})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
        } else {
            document.body.style.backgroundImage = "";
        }
    } catch (error) {
        document.body.style.backgroundImage = "";
    }

    // clima
    cityElement.innerText = data.name;
  TempElement.innerText = parseInt(data.main.temp) + "°C";
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `${apiCountryURL}${data.sys.country}/flat/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");
};

// eventos
searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const city = CityInput.value;
    ShowWeatherData(city)
});

CityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        ShowWeatherData(city);
    }
});