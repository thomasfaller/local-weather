// VARIABLES

var x = $("");
var $tempWrapper = $("#temp-wrapper");
var $locationWrapper = $("#location");
var $weatherIconWrapper = $("#weather-icon-wrapper");
var $weatherStatusWrapper = $("#weather-status");

$( document ).ready(function() {               // LOADS THE FOLLOWING CODE WHEN THE PAGE IS LOADED
  navigator.geolocation.getCurrentPosition(function(position) {   // HTML Geolocation API
    var $lat = position.coords.latitude;
    var $long = position.coords.longitude;
        $.ajax({

            url: "http://api.openweathermap.org/data/2.5/weather?lat=" + $lat + "&lon=" + $long + "&APPID=bae4b37551ad15c5be94bb6d7178601d",
            type: "GET",
            dataType: "jsonp",
            success: function(result){   // retrieve the JSON

          var $city = result.name;                                // City
          var $country = result.sys.country;                      // Country
          var $weatherDesc = result.weather[0].description;       // Description of Weather
          var $weatherIcon = result.weather[0].icon;              // Icon code from openweathermap
          var $tempC = result.main.temp - 273.15;                 // Temp in Celsius
          var $tempF = result.main.temp * (9/5) - 459.67;         // Temp in Farenheit



          // if (result.weather[0].main === "Rain") {
          //   $('body').css("background-image: url(\"../Files/sky-rainy-bg.jpeg\");background-position:center;background-size: cover;");
          // } else if (result.weather[0].main == "clouds") {
          //
          // } else if (result.weather[0].main == "sunny") {
          //
          // } // weather background images

          var $weatherImage = "../Files/sky-" + result.weather[0].main + "-bg.jepg";
          console.log($weatherImage);

          // DISPLAYING THE INFO IN THE WEB APP

          $locationWrapper.html("<h1>" + $city + ", " + $country + "</h1>");
          // $weatherIconWrapper.html("<img style=\"width: 120px;\" src=\"..Files/Rain-icon.ico\" alt=\"weather icon\">");
          $weatherStatusWrapper.html("<h1>" + $weatherDesc + "</h1>");
          $tempWrapper.html("<h1>" + $tempC.toFixed(0) + " °C</h1>");     // toFixed(0) to make sure the temp is a whole number
          // $(".wrapper").css();



        }});
  });
      });
