import { useQuery } from "@tanstack/react-query";
import { fetchWeatherFromAN } from "../../services/weatherApi";
import { CityData } from "../../types/city";

export const useWeatherQuery = (city: CityData | null) => {
  return useQuery({
    queryKey: ["weather", city?.latitude, city?.longitude],
    queryFn: () =>
      city ? fetchWeatherFromAN(city.latitude, city.longitude) : null,
    enabled: !!city,
  });
};
