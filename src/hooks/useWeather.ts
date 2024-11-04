import { useState, useEffect } from "react";
import {
  fetchWeatherFromAN,
  fetchWeatherFromOWN,
} from "../services/weatherApi";
import { ANWeatherResponse } from "../types/weather";

export const useWeather = (lat: number, lon: number) => {
  const [weather, setWeather] = useState<ANWeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        setLoading(true);
        const data = await fetchWeatherFromAN(lat, lon);
        // const dataOWN = await fetchWeatherFromOWN(lat, lon);
        setWeather(data);
        // console.log("dataOWN: ", dataOWN);
        setError(null);
      } catch (err) {
        setError("Failed to fetch weather data: " + err);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [lat, lon]);

  return { weather, loading, error };
};
