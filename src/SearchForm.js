import React, { useState } from "react";
import axios from "axios";
import "./searchform.css";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState({});

  function showTemp(response) {
    setLoaded(true);
    setForecast({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "15132c0c33ce6e6df2635ad5416e41db";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city.."
        autoFocus="on"
        onChange={updateCity}
      />
      <button type="Submit" className="btn btn-success">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(forecast.temperature)}°C</li>
          <li>Description: {forecast.description}</li>
          <li>Humidity: {forecast.humidity}%</li>
          <li>Wind: {forecast.wind}km/h</li>
          <li>
            <img src={forecast.icon} alt={forecast.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
