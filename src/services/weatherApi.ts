import axios from "axios";
import {
  getANFullUrl,
  getOWNFullUrl,
  API_CONFIG,
  API_RESOURCES,
} from "./apiResource";
import { OwnWeatherResponse, ANWeatherResponse } from "../types/weather";

export const fetchWeatherFromAN = async (
  lat: number,
  lon: number
): Promise<ANWeatherResponse> => {
  try {
    const finalUrl = getANFullUrl(API_RESOURCES.WEATHER);
    console.log("getANFullUrl finalUrl: ", finalUrl);
    const response = await axios.get<ANWeatherResponse>(finalUrl, {
      params: { lat, lon },
      headers: API_CONFIG.headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchWeatherFromOWN = async (
  lat: number,
  lon: number
): Promise<OwnWeatherResponse> => {
  try {
    const finalUrl = getOWNFullUrl(API_RESOURCES.WEATHER);
    console.log("getOWNFullUrl finalUrl: ", finalUrl);

    const response = await axios.get<OwnWeatherResponse>(finalUrl, {
      params: { lat, lon },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
