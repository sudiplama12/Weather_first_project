const button = document.getElementById("Search-btn");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getdata(city) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=25729e4c1db84ba5b2c10753250507&q=${city}&aqi=yes`);
    return await promise.json();
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getdata(value);

    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = `Local Time: ${result.location.localtime}`;
    cityTemp.innerText = `Temperature: ${result.current.temp_c}°C`;
});
