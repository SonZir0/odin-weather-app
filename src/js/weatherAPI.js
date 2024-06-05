export default async function getWeatherInCity(city) {
    const result = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=724b6d5d691b45d8b8a84916242705&q=${city}&days=3`,
        { mode: 'cors' }
    );

    if (result.ok) return result.json();
    throw new Error(`${result.status}`);
}
