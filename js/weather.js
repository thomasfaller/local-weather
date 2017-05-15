// VARIABLES

var x = $("");
var $tempWrapper = $("#temp-wrapper");
var $locationWrapper = $("#location");
var $weatherIconWrapper = $("#weather-icon-wrapper");
var $weatherStatusWrapper = $("#weather-status");
var $minTempWrapper = $("#min_temp");
var $maxTempWrapper = $("#max_temp");

// Geolocation

var $lat;
var $long;
$.ajax({
  url: "http://ip-api.com/json",
  success: function(georesult) {
    $lat = georesult.lat;
    $long = georesult.lon;

        $.ajax({

            url: "http://api.openweathermap.org/data/2.5/weather?lat=" + $lat + "&lon=" + $long + "&APPID=bae4b37551ad15c5be94bb6d7178601d",
            success: function(result){   // retrieve the JSON
          var $city = result.name;                                // City
          var $country = result.sys.country;                      // Country
          var $weatherDesc = result.weather[0].description;       // Description of Weather
          var $weatherIcon = result.weather[0].icon;              // Icon code from openweathermap

// TEMPERATURES VARIABLES

          var $tempC = result.main.temp - 273.15;                 // Temp in Celsius
          var $tempF = result.main.temp * (9/5) - 459.67;         // Temp in Farenheit
          var $tempMinC = result.main.temp_min - 273.15;          // Min Temp in Celsius
          var $tempMinF = result.main.temp_min * (9/5) - 459.67;  // Min Temp in Farenheit
          var $tempMaxC = result.main.temp_max - 273.15;          // Max Temp in Celsius
          var $tempMaxF = result.main.temp_max * (9/5) - 459.67;  // Max Temp in Farenheit


          // if (result.weather[0].main === "Rain") {
          //   $('body').css("background-image: url(\"../Files/sky-rainy-bg.jpeg\");background-position:center;background-size: cover;");
          // } else if (result.weather[0].main == "clouds") {
          //
          // } else if (result.weather[0].main == "sunny") {
          //
          // } // weather background images


          // DISPLAYING THE INFO IN THE WEB APP

          $locationWrapper.html("<h1>" + $city + ", " + $country + "</h1>");
          // $weatherIconWrapper.html("<img style=\"width: 120px;\" src=\"..Files/Rain-icon.ico\" alt=\"weather icon\">");
          $weatherStatusWrapper.html("<h1>" + $weatherDesc + "</h1>");
          $tempWrapper.html("<h1>" + $tempC.toFixed(0) + " °C</h1>");     // toFixed(0) to make sure the temp is a whole number
          // $(".wrapper").css();
          // $maxTempWrapper.html("<h3>" + $tempMaxC + "°C</h3>");


        }});

        }});
