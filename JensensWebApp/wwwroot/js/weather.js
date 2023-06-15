// weatherModel.js
const WeatherModel = {
    fetchWeatherData: async (latitude, longitude) => {
        const apiKey = 'e59edaa945msh7741d5dd0502b08p1ea22djsnb230a5eabea6';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

        // Use an API library like Fetch or Axios to retrieve weather data
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract relevant weather information from the response
        const weatherInfo = {
            temperature: data.current.temp_c,
            description: data.current.condition.text,
        };

        return weatherInfo;
    },
};
// weatherView.js
const WeatherView = {
    updateUI: (weatherInfo) => {
        const temperatureElement = document.getElementById('temperature');
        const conditionElement = document.getElementById('condition');
        // Update DOM elements with weather information
        temperatureElement.textContent = `${weatherInfo.temperature}°C`;
        conditionElement.textContent = weatherInfo.description;
    },
};

// weatherController.js
const WeatherController = {
    handleWeatherRequest: async () => {
        // Call the model to fetch weather data
        const weatherData = await WeatherModel.fetchWeatherData();
        // Update the view with the retrieved weather data
        WeatherView.updateUI(weatherData);
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

                // Call the model to fetch weather data with coordinates
                const weatherData = await WeatherModel.fetchWeatherData(latitude, longitude);

                // Update the view with the retrieved weather data
                WeatherView.updateUI(weatherData);
            },
            (error) => {
                console.error('Error retrieving geolocation:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
});
