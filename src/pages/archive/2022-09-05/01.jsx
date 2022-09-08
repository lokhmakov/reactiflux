import React, { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: { q: 'London', days: '3' },
  headers: {},
};

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios(options);
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
      <p>{weatherInfo?.location?.name}</p>
    </div>
  );
}
