# Weather App

This application fetches current weather of the provided location.

It's built using [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview), [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview) for autocompleting locations and [OpenWeather](https://openweathermap.org/) to fetch weather details, plus credits to [Skycons](https://darkskyapp.github.io/skycons/) for beautiful and engaging weather icons.

Since DarkSky API is no longer public, there was no integration for Skycons (_weather icons_) with OpenWeather. Hence created a function **setWeatherIcon** to fetch IconCode from OpenWeather and convert to Skycons.

### DEMO

![Weather App DEMO](https://s1.gifyu.com/images/weather.gif)

### Dependencies.

```
npm i axios express
npm i --save-dev dotenv nodemon
```

### How to run.

All you need is the API keys from GCP (Places and Maps Javascript API) and from OpenWeather. Place those APIs in index and script files and there you have it.
