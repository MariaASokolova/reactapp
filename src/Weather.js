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
      <div className="row mt-4">
        <div className="col-6">
          <div className="clearfix">
            <img src="#" alt="weather-icon" className="float-left" />

            <div className="float-left">
              <span className="temperature">8</span>
              <span className="unit">C°</span>
            </div>
          </div>
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
