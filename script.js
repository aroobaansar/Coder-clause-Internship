document.getElementById('searchButton').addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=16c3dff80bc8d671d3d62d44893207b7&units=metric`)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Description: ${data.weather[0].description}`;
        })
        .catch(error => console.error('Error:', error));

    cityInput.value = '';
});
