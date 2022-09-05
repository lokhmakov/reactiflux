import React, { useEffect, useState } from 'react';

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: { q: 'London', days: '3' },
  headers: {
    'X-RapidAPI-Key': '8cb683f5d8mshca3a682bccc706bp1040d8jsn03538f68c68c',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(options.url);
        setWeatherInfo(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Our Weather App</h1>
      {weatherInfo}
      <p>{weatherInfo.location.name}</p>
    </div>
  );
}
