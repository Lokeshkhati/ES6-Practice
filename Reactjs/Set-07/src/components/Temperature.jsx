//1.  Create a React component that fetches weather data from an API endpoint using useEffect hook and displays the current temperature, humidity, and wind speed on the screen using the useState hook. Add a button which toggles between Celsius and Fahrenheit units for the temperature.

import { useEffect, useState } from "react";
import { fakeFetch, url } from "../constants/fakeFetch01";
const Temperature = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isInCelsius, setIsInCelsius] = useState(true);
  const { temperature, humidity, windSpeed } = weather;

  useEffect(() => {
    getWeatherData(url);
  }, []);

  const getWeatherData = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setWeather(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) return <h1> Loading... </h1>;
  if (error) return <h1> {error} </h1>;

  const temperatureHandler = (temperature) => {
    if (isInCelsius) {
      const updatedWeather = {
        ...weather,
        temperature: Math.round((temperature * 9) / 5 + 32),
      };
      setWeather(updatedWeather);
      setIsInCelsius(false);
    } else {
      const updatedWeather = {
        ...weather,
        temperature: Math.round(((temperature - 32) * 5) / 9),
      };
      setWeather(updatedWeather);
      setIsInCelsius(true);
    }
  };

  return (
    <div>
      <h1>Weather</h1>
      <p>
        {" "}
        Temperature : {temperature} {isInCelsius ? "°C" : "°F"}
      </p>
      <p> Humidity : {humidity} % </p>
      <p> Wind Speed : {windSpeed}km/h </p>
      <button onClick={() => temperatureHandler(temperature)}>
        {isInCelsius ? "Switch to Fahrenheit" : " Switch to Celsius"}
      </button>
    </div>
  );
};
export default Temperature;
