/* global document */

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

    details.querySelector('.feelsLike p+p').textContent =
        `${data.current.feelslike_c}`;
    details.querySelector('.wind p+p').textContent = `${data.current.wind_kph}`;
    details.querySelector('.humidity p+p').textContent =
        `${data.current.humidity}`;
    details.querySelector('.UV p+p').textContent = `${data.current.uv}`;
    details.querySelector('.visibility p+p').textContent =
        `${data.current.vis_km}`;
    details.querySelector('.precipitation p+p').textContent =
        `${data.current.precip_mm}`;
}

export default function fillData(weatherData) {
    displayCurrentWeather(weatherData);
    console.log(weatherData);

    /* weatherData.forecast.forecastday.forEach((date) => {
        console.log(`Average temperature: ${date.day.avgtemp_c}`);
        console.log(`Max temperature: ${date.day.maxtemp_c}`);
        console.log(`Min temperature: ${date.day.mintemp_c}`);
        console.log(`Average humidity: ${date.day.avghumidity} %`);
        console.log(`Max wind speed: ${date.day.maxwind_kph} km/h`);
        console.log(`UV: ${date.day.uv}`);
    }); */
}
