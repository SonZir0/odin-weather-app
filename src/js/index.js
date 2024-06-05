/* global document */
import 'normalize.css';
import '../css/main.css';
import getWeatherInCity from './weatherAPI';

const location = document.querySelector('input[type="search"]');
document.querySelector('form').addEventListener('submit', () => {
    getWeatherInCity(location.value)
        .then((result) => {
            console.log(result);
            console.log(`Last updated: ${result.current.last_updated}`);
            console.log(`Temp in C: ${result.current.temp_c}`);
            console.log(`Feels like C: ${result.current.feelslike_c}`);
            console.log(`Humidity: ${result.current.humidity} %`);
            console.log(`Wind speed: ${result.current.wind_kph} km/h`);
            console.log(`UV: ${result.current.uv}`);

            result.forecast.forecastday.forEach((date) => {
                console.log(`Average temperature: ${date.day.avgtemp_c}`);
                console.log(`Max temperature: ${date.day.maxtemp_c}`);
                console.log(`Min temperature: ${date.day.mintemp_c}`);
                console.log(`Average humidity: ${date.day.avghumidity} %`);
                console.log(`Max wind speed: ${date.day.maxwind_kph} km/h`);
                console.log(`UV: ${date.day.uv}`);
            });
        })
        .catch((error) => {
            let alertText = 'Something went wrong...';
            if (error.message === '400')
                alertText =
                    'Location not found. Try again using city name or ZIP code.';
            alert(`${alertText}\nError code: ${error.message}`);
        });
});
