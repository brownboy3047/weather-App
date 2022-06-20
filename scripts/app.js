const cityForm = document.querySelector('.form-field');

const weatherInfo = document.querySelector('.weather-info');

const weatherDisplay = document.querySelector('.d-none');

// to display the weather information on the app
const updateUserInterface = (data) => {

    const cityDetails = data.cityDetails;

    const weather = data.weather;

    weatherInfo.innerHTML = `
      <h2>${cityDetails.EnglishName}</h2>
        <p>${weather.WeatherText}</p>
           <div class="temp">
               <span>${weather.Temperature.Metric.Value}</span>
               <span>&deg;C</span>
            </div>
    `;

    if (weatherDisplay.classList.contains('d-none')) {
        weatherDisplay.classList.remove('d-none');
    };
};


const updateCity = async (city) => {

    const cityDetails = await getCity(city);

    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    };
};

cityForm.addEventListener('submit', (e) => {
    //prevent default action
    e.preventDefault();

    const city = cityForm.city.value.trim();

    cityForm.reset();

    //return promise to get the data
    updateCity(city).then((data) => {
        updateUserInterface(data);
    }).catch((err) => {
        console.log(err);
    })
});