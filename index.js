const express = require('express');
const { WeatherService } = require('./weatherservice'); 

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  const forecast = WeatherService.getForecast();
  console.log(forecast);
  res.json(forecast);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
