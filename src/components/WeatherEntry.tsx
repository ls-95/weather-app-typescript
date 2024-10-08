import React, { FC } from "react";
import { Weather } from "../model/Weather";
import { getIconUrl } from "../services/WeatherService";

interface WeatherEntryProps {
  weather: Weather;
}

function convertUnixTimeToDate(unixUtc: number): Date {
  return new Date(unixUtc * 1000);
}

export const WeatherEntry: FC<WeatherEntryProps> = ({ weather }) => (
  <div>
    <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div>
    <div>
      <strong>{Math.round(weather.main.temp)}°C</strong>
      <div>
        ({Math.round(weather.main.temp_min)}°C /{" "}
        {Math.round(weather.main.temp_max)}°C)
      </div>
    </div>
    <div>Humidity: {weather.main.humidity}%</div>
    {weather.weather.map((condition) => (
      <div key={condition.id}>
        <img src={getIconUrl(condition.icon)} alt={condition.main} />{" "}
        {condition.main} {condition.description}
      </div>
    ))}
  </div>
);
