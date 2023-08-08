// Define your API Key
const API_KEY = "b5d86c5d2831543cda2a87e91d425171";

// Function to fetch the weather for a given city
function fetchWeather(cityName) {
    // Construct the URL for fetching the current weather
    const weatherEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + API_KEY + "&units=metric";

    // Use the fetch API to get the data
    fetch(weatherEndpoint)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            // Simply display city, temperature, and description
            var weatherDisplay = "City: " + data.name + ", Temperature: " + data.main.temp + "°C, Description: " + data.weather[0].description;

            // Display the result in the forecast div
            document.getElementById('forecast').innerText = weatherDisplay;
        })
        .catch(function(error) {
            console.error("Error fetching the weather data:", error);
        });
}

