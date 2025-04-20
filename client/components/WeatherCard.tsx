"use client"
import React, { useState } from "react";

const WeatherCard = () => {
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState("Nairobi");

  const fetchWeather = async () => {
    const res = await fetch(`http://localhost:8000/api/weather?city=${city}`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="card p-6 max-w-md shadow-lg bg-base-200 rounded-2xl">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input input-bordered w-full mb-4"
        placeholder="Enter city"
      />
      <button className="btn btn-primary w-full" onClick={fetchWeather}>
        Get Weather
      </button>

      {weather && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temp: {weather.main.temp} °C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
