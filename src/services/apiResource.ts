import {
  API_BASE_OWM_URL,
  API_BASE_AN_URL,
  API_NINJA_KEY,
  API_OWM_KEY,
} from "@env";

export const API_RESOURCES = {
  API_BASE_OWM_URL: API_BASE_OWM_URL,
  API_BASE_AN_URL: API_BASE_AN_URL,
  WEATHER: "weather",
  CITY_SEARCH: "city",
};

export const API_CONFIG = {
  headers: {
    "X-Api-Key": API_NINJA_KEY,
  },
};

export const getANFullUrl = (resource: string): string => {
  return `${API_RESOURCES.API_BASE_AN_URL}/${resource}`;
};
export const getOWNFullUrl = (resource: string): string => {
  return `${API_RESOURCES.API_BASE_OWM_URL}/${resource}?&appid=${API_OWM_KEY}`;
};
