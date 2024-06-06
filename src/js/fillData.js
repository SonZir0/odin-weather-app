/*  global document */
//  export at the very bottom
function displayCurrentWeather(data) {
    const todayTab = document.querySelector('.todayTab');
    const details = document.querySelector('.details .addInfo');

    todayTab.querySelector('.location').textContent =
        `${data.location.name}, ${data.location.country}`;
    todayTab.querySelector('.date').textContent =
        `${data.forecast.forecastday[0].date}`;
    todayTab.querySelector('.temperature span').textContent =
        `${data.current.temp_c}`;
    todayTab.querySelector('.minTemp span').textContent =
        `${data.forecast.forecastday[0].day.mintemp_c}`;
    todayTab.querySelector('.maxTemp span').textContent =
        `${data.forecast.forecastday[0].day.maxtemp_c}`;
    todayTab.querySelector('.condition').textContent =
        data.current.condition.text;
    todayTab.querySelector('img').src = data.current.condition.icon;

    // details tab
    details.querySelector('.feelsLike p+p').textContent =
        `${data.current.feelslike_c}`;
    details.querySelector('.wind p+p').textContent = `${data.current.wind_kph}`;
    details.querySelector('.humidity p+p').textContent =
        `${data.current.humidity}`;
    details.querySelector('.UV p+p').textContent = `${data.current.uv}`;
    details.querySelector('.visibility p+p').textContent =
        `${data.current.vis_km}`;
    details.querySelector('.rainChance p+p').textContent =
        `${data.forecast.forecastday[0].day.daily_chance_of_rain}`;
}

function displayForecastData(dayCard, data) {
    const date = dayCard.querySelector('.date');
    date.textContent = `${data.date}`;

    const avgTemp = dayCard.querySelector('.temperature span');
    avgTemp.textContent = `${data.day.avgtemp_c}`;

    const minTemp = dayCard.querySelector('.minTemp span');
    minTemp.textContent = `${data.day.mintemp_c}`;

    const maxTemp = dayCard.querySelector('.maxTemp span');
    maxTemp.textContent = `${data.day.maxtemp_c}`;

    const condition = dayCard.querySelector('.condition');
    condition.textContent = data.day.condition.text;

    const icon = dayCard.querySelector('img');
    icon.src = data.day.condition.icon;

    const UVindex = dayCard.querySelector('.UV p+p');
    UVindex.textContent = data.day.uv;

    const rainChance = dayCard.querySelector('.rainChance p+p');
    rainChance.textContent = data.day.daily_chance_of_rain;

    const avgHumidity = dayCard.querySelector('.humidity p+p');
    avgHumidity.textContent = data.day.avghumidity;

    const totalPrecipitation = dayCard.querySelector('.totalPrecipitation p+p');
    totalPrecipitation.textContent = data.day.totalprecip_mm;
}

export default function fillData(weatherData) {
    // console.log(weatherData);
    displayCurrentWeather(weatherData);
    const forecastCards = document.querySelectorAll('.forecastTab > div');
    forecastCards.forEach((card, index) => {
        displayForecastData(card, weatherData.forecast.forecastday[index + 1]);
    });
}
