import React from "react";
import "./Weather.css";
import SearchForm from "./SearchForm";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchForm />
      <h1>Moscow</h1>
      <ul>
        <li>Wednesday 19.00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="#" alt="weather-icon" />
          8C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation</li>
            <li>Humidity 70%</li>
            <li>Wind m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
