var $tempWrapper = $("#temp-wrapper");
var $locationWrapper = $("#location");
var $weatherIconWrapper = $("#weather-icon-wrapper");
var $weatherStatusWrapper = $("#weather-status");

$( document ).ready(function() {






$.ajax({url: "http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=bae4b37551ad15c5be94bb6d7178601d", success: function(result){
          var $city = result.name;
          var $country = result.sys.country;
          var $weatherDesc = result.weather[0].description;
          var $weatherIcon = result.weather[0].icon;
          var $tempC = result.main.temp - 273.15;
          var $tempF = result.main.temp * (9/5) - 459.67;

          $locationWrapper.html("<h1>" + $city + ", " + $country + "</h1>");
          $weatherIconWrapper.html("<img src=\"http://openweathermap.org/img/w/" + $weatherIcon + ".png\" alt=\"weather icon\">");
          $weatherStatusWrapper.html("<h1>" + $weatherDesc + "</h1>");
          $tempWrapper.html("<h1>" + $tempC.toFixed(1) + "°C</h1>");
}});
});
