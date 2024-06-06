/* global document */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import 'normalize.css';
import '../css/main.css';
import getWeatherInCity from './weatherAPI';
import fillData from './fillData';

const location = document.querySelector('input[type="search"]');
const searchForm = document.querySelector('form');
const changeTempUnitBtn = document.querySelector('#changeUnit');
let lastOkRequest = null;

changeTempUnitBtn.addEventListener('click', () => {
    if (changeTempUnitBtn.dataset.tempUnit === 'C') {
        changeTempUnitBtn.textContent = 'Change to °C';
        changeTempUnitBtn.dataset.tempUnit = 'F';
    } else {
        changeTempUnitBtn.textContent = 'Change to °F';
        changeTempUnitBtn.dataset.tempUnit = 'C';
    }

    if (lastOkRequest)
        fillData(lastOkRequest, changeTempUnitBtn.dataset.tempUnit);
});

searchForm.addEventListener('submit', () => {
    getWeatherInCity(location.value)
        .then((result) => {
            lastOkRequest = result;
            fillData(lastOkRequest, changeTempUnitBtn.dataset.tempUnit);
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
