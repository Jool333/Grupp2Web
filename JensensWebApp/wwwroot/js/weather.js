const weatherCodeMap = new Map();
weatherCodeMap.set(0, 'Unknown');
weatherCodeMap.set(1000, 'Clear');
weatherCodeMap.set(1001, 'Cloudy');
weatherCodeMap.set(1100, 'Mostly Clear');
weatherCodeMap.set(1101, 'Partly Cloudy');
weatherCodeMap.set(1102, 'Mostly Cloudy');
weatherCodeMap.set(2000, 'Fog');
weatherCodeMap.set(2100, 'Light Fog');
weatherCodeMap.set(3000, 'Light Wind');
weatherCodeMap.set(3001, 'Wind');
weatherCodeMap.set(3002, 'Strong Wind');
weatherCodeMap.set(4000, 'Drizzle');
weatherCodeMap.set(4001, 'Rain');
weatherCodeMap.set(4200, 'Light Rain');
weatherCodeMap.set(4201, 'Heavy Rain');
weatherCodeMap.set(5000, 'Snow');
weatherCodeMap.set(5001, 'Flurries');
weatherCodeMap.set(5100, 'Light Snow');
weatherCodeMap.set(5101, 'Heavy Snow');
weatherCodeMap.set(6000, 'Freezing Drizzle');
weatherCodeMap.set(6001, 'Freezing Rain');
weatherCodeMap.set(6200, 'Light Freezing Rain');
weatherCodeMap.set(6201, 'Heavy Freezing Rain');
weatherCodeMap.set(7000, 'Ice Pellets');
weatherCodeMap.set(7101, 'Heavy Ice Pellets');
weatherCodeMap.set(7102, 'Light Ice Pellets');
weatherCodeMap.set(8000, 'Thunderstorm');

const dayCodeMap = new Map();
// weatherModel.js
const WeatherModel = {
    fetchWeatherData: async (lat, long) => {
        const apiKey = 'QwLHgOoFjKpuhJgwJjXDAzSB1jdtbNrd';
        const mainUrl = "https://api.tomorrow.io/v4/timelines?location=";
        const optionsUrl = `${lat},${long}&fields=temperature,weatherCode&timesteps=1d&units=metric&apikey=${apiKey}`;
        const apiUrl = mainUrl + optionsUrl;
        //const apiUrl = "https://api.tomorrow.io/v4/timelines?location=55.17,13.19&fields=temperature,weatherCode&timesteps=1d&units=metric&apikey=QwLHgOoFjKpuhJgwJjXDAzSB1jdtbNrd";
        const options = { method: 'GET', headers: { accept: 'application/json' } };

        fetch(apiUrl, options)
            .then(response => response.json())
            .then(data => {
                const mainData = data.timelines[0].intervals;
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });        
    }
}
// weatherView
const WeatherView = {
    updateUI: (weatherInfo) => {
        const temperatureElement = document.getElementById('temperature');
        const conditionElement = document.getElementById('condition');
        // Update DOM elements with weather information
        temperatureElement.textContent = `${weatherInfo[0].temperature}°C`;
        conditionElement.textContent = weatherInfo.weatherCode;
    },
};

const weatherButton = document.getElementById('weatherButton');

weatherButton.addEventListener('click', () => {
    // Request user's geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const temperatureElement = document.getElementById('temperature');
                temperatureElement.textContent = `lat: ${latitude} long: ${longitude}`;
                
                // Call the model to fetch weather data with coordinates
                const weatherData = await WeatherModel.fetchWeatherData(latitude, longitude);
                console.log(weatherData);
                // Update the view with the retrieved weather data
                WeatherView.updateUI(weatherData);
            },
            (error) => {
                console.error('Error retrieving geolocation:', error);
            }
        );
    }
    else {
        console.error('Geolocation is not supported by this browser.');
    }
});
