import * as Location from "expo-location";
import axios from "axios";
import { CityData } from "../types/city";
import { API_NINJA_KEY } from "@env";

interface ReverseGeocodingResponse {
  name: string;
  country: string;
}

export const getCurrentLocation = async (): Promise<CityData> => {
  try {
    // Request location permission
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      throw new Error("Permission to access location was denied");
    }

    // Get current position
    const location = await Location.getCurrentPositionAsync({});

    // Reverse geocode to get city information
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/reversegeocoding?lat=${location.coords.latitude}&lon=${location.coords.longitude}`,
      {
        headers: {
          "X-Api-Key": API_NINJA_KEY,
        },
      }
    );

    if (response.data && response.data[0]) {
      const cityData: CityData = {
        name: response.data[0].name,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        country: response.data[0].country,
        population: 0, // API doesn't provide this
        is_capital: false, // API doesn't provide this
      };
      return cityData;
    }

    throw new Error("Unable to find city information");
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Location error: ${error.message}`);
    }
    throw new Error("An unknown error occurred");
  }
};
