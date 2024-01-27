import React from "react";
import WeatherIcon from "./WeatherIcon"; // eslint-disable-next-line
console.log("eslint is disabled for the current line");

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day"> {props[0].dt}</div>
      <WeatherIcon code={props[0].weather[0].icon} size={42} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-max"> {maxTemperature()}</span>
        <span className="WeatherForecast-min"> {minTemperature()}</span>
      </div>
    </div>
  );
}
