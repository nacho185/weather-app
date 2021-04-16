let inputValue = document.getElementById("searchbar");
let button = document.getElementById("button-123");
let feels = document.getElementById("feelslike");
let city = document.getElementById("name-for-city");
let todayHigh = document.getElementById("high-for-today");
let todayLow = document.getElementById("low-for-today");
let icons = document.getElementById("weather-icon");
let image = document.querySelector(".image-for-weather");
let theDescription = document.querySelector(".description-for-weather");
let temperature = document.querySelector(".temperature-at-moment");
button.addEventListener("click", () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=1424062b25fa9c1dbb01d67b4f382fa4"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      /*set variables*/
      let feelsLike = data["main"]["feels_like"];
      let cityName = data["name"];
      let todayVeryHigh = data["main"]["temp_max"];
      let todayVeryLow = data["main"]["temp_min"];
      let icon =
        "https://api.openweathermap.org/img/w/" +
        data["weather"][0]["icon"] +
        ".png";
      let description = data["weather"][0]["description"];
      let temp = data["main"]["temp"];
      /*set variables textcontent*/
      image.setAttribute("src", icon);
      city.textContent = cityName;
      feels.textContent = "Feels like " + feelsLike;
      todayHigh.textContent = "High " + todayVeryHigh;
      todayLow.textContent = "Low " + todayVeryLow;
      theDescription.textContent = description;
      temperature.textContent = temp;
    })
    .catch((err) => {
      console.log(err);
    });
});
