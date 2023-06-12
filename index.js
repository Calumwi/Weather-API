const express = require('express'); // import express
const app = express(); // initialize express
const cors = require('cors'); // import cors package
const fakeWeatherData = require('./data.js'); //import fake data

app.use(cors());

// GET route 
app.get('/weather', function(req, res) {
  let cityName = req.query.city.toLowerCase()

  for (let i = 0; i < fakeWeatherData.length; i++)

  if (!cityName) {
    return res.send({"status": "error", "message": "Please enter a city name"})
  }
  else if (cityName == fakeWeatherData[i].city.toLowerCase()) {
    return res.send(fakeWeatherData[i])
  }

res.send({"status": "error", "message": "This city isn't in our database"})
});


// Listen on port 3000
app.listen(3000, function() {
  console.log('listening on port 3000...');
})
