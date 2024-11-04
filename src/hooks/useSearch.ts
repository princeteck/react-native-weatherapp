import { useState } from "react";
import axios from "axios";
import {
  getANFullUrl,
  API_CONFIG,
  API_RESOURCES,
} from "../services/apiResource";
import { CityData } from "../types/city";

export const useSearch = () => {
  const [results, setResults] = useState<CityData[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchCity = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<CityData[]>(
        getANFullUrl(API_RESOURCES.CITY_SEARCH),
        {
          params: { name: query, limit: 30 },
          headers: API_CONFIG.headers,
        }
      );

      const mappedCityData: CityData[] = response.data.map((city) => ({
        name: city.name,
        latitude: city.latitude,
        longitude: city.longitude,
        country: city.country,
        population: city.population,
        is_capital: city.is_capital,
      }));

      setResults(mappedCityData);
    } catch (err) {
      setError("Failed to fetch city data");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return { searchCity, results, loading, error };
};
