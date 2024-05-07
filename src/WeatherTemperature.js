import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTempearature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|{" "}
          <a href="/" onclick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTempearature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onclick={showCelsius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}