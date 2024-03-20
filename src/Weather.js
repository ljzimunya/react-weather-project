import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="Serch" placeholder="Enter a city..." className="form" />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>Harare</h1>
      <ul>
        <li>Wednesday, 07:00hrs </li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="sunny" />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind Speed: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
