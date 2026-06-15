const apiKey = "7e3c3e6fa5ca8d8ecd773ecb9dc64f98"
const city = "kaner"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metri`
async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
getWeather();