// API Key (parts to hide the key, this is not secure for production)
var part1 = "b5d";
var part2 = "86c5d2";
var part3 = "831543cd";
var part4 = "a2a87e91";
var part5 = "d425171";
var API_KEY = part1 + part2 + part3 + part4 + part5;

// Function to fetch the weather for a given city
function fetchWeather(cityName) {
  var currentWeatherURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    API_KEY +
    "&units=metric";
  var forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    API_KEY +
    "&units=metric";

  // Fetch current weather
  fetch(currentWeatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Display current weather details
      var weatherDetails = "City: " + data.name;
      weatherDetails += "<br>Temperature: " + data.main.temp + "°C";
      weatherDetails += "<br>Wind Speed: " + data.wind.speed + " m/s";
      weatherDetails += "<br>Humidity: " + data.main.humidity + "%";
      document.getElementById("currentWeather").innerHTML = weatherDetails;
    })
    .catch(function (error) {
      console.error("Error fetching the current weather data:", error);
    });

  // Fetch 5-day forecast
  fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Display 5-day forecast
      var forecastDetails = "<h3>5-Day Forecast:</h3>";
      for (var i = 4; i < data.list.length; i += 8) {
        var dailyData = data.list[i];

        // Convert the UTC date string to a JavaScript Date object
        var date = new Date(dailyData.dt_txt);

        // Format the date in the American way (MM/DD/YYYY)
        var formattedDate =
          date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

        forecastDetails += "<div>";
        forecastDetails += "Date: " + formattedDate;
        forecastDetails += "<br>Temperature: " + dailyData.main.temp + "°C";
        forecastDetails += "<br>Wind Speed: " + dailyData.wind.speed + " m/s";
        forecastDetails += "<br>Humidity: " + dailyData.main.humidity + "%";
        forecastDetails += "</div>";
      }
      document.getElementById("forecast").innerHTML = forecastDetails;
    })
    .catch(function (error) {
      console.error("Error fetching the 5-day forecast data:", error);
    });
}
