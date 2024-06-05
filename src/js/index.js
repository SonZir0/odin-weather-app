/* global document */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import 'normalize.css';
import '../css/main.css';
import getWeatherInCity from './weatherAPI';
import fillData from './fillData';

const location = document.querySelector('input[type="search"]');
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', () => {
    getWeatherInCity(location.value)
        .then((result) => {
            fillData(result);
        })
        .catch((error) => {
            let alertText = 'Something went wrong...';
            if (error.message === '400')
                alertText =
                    'Location not found. Try again using city name or ZIP code.';
            // eslint-disable-next-line no-undef
            alert(`${alertText}\nError code: ${error.message}`);
        });
});
