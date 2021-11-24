"use strict";

if (process.env.NODE_ENV !== "Production") require("dotenv").config();

const OPENWEATHER_APIKEY = process.env.OPENWEATHER_APIKEY;
const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.body.latitude}&lon=${req.body.longitude}&appid=${OPENWEATHER_APIKEY}&units=metric`;
  axios({
    url: url,
    responseType: "json",
  }).then((data) => res.json(data.data.current));
});

app.listen(3000, () => {
  console.log("Server Ready");
});
