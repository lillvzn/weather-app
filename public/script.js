"use strict";
const searchEl = document.querySelector("[data-loc-search");
const searchBox = new google.maps.places.SearchBox(searchEl);
const locEl = document.querySelector("[data-loc]");
const statEl = document.querySelector("[data-status]");
const windEl = document.querySelector("[data-wind]");
const tempEl = document.querySelector("[data-temp]");
const humidEl = document.querySelector("[data-humid]");

const skycons = new Skycons({ color: "#0a9396" });
const weatherConditions = {
  "11d": "RAIN",
  "11n": "RAIN",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "WIND",
  "50n": "WIND",
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLEAR_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "PARTLY_CLOUDY_DAY",
  "03n": "PARTLY_CLOUDY_NIGHT",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
};

function setWeatherIcon(data) {
  return weatherConditions[data.weather[0].icon];
}

searchBox.addListener("places_changed", () => {
  const place = searchBox.getPlaces()[0];
  if (place == null) return;
  const lat = place.geometry.location.lat();
  const lon = place.geometry.location.lng();
  fetch("/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      latitude: lat,
      longitude: lon,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setWeatherData(data, place.formatted_address);
      console.log(data);
    });
});

// default icon
skycons.set("weather-icon", "CLEAR_DAY");
skycons.play();

function setWeatherData(data, place) {
  locEl.textContent = place;
  statEl.textContent = data.weather[0].description;
  tempEl.textContent = `${data.temp} °C`;
  windEl.textContent = `${data.wind_speed} kmph`;
  humidEl.textContent = `${data.humidity} %`;
  skycons.set("weather-icon", setWeatherIcon(data));
  skycons.play();
}
