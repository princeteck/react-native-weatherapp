import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  getANFullUrl,
  API_CONFIG,
  API_RESOURCES,
} from "../../services/apiResource";
import { CityData } from "../../types/city";

const searchCities = async (query: string): Promise<CityData[]> => {
  const response = await axios.get(getANFullUrl(API_RESOURCES.CITY_SEARCH), {
    params: { name: query, limit: 30 },
    headers: API_CONFIG.headers,
  });
  return response.data;
};

export const useCitySearchQuery = (query: string) => {
  return useQuery({
    queryKey: ["cities", query],
    queryFn: () => searchCities(query),
    enabled: query.length > 2,
  });
};
