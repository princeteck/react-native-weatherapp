export interface WeatherApiResponse {
  wind_speed: number;
  wind_degrees: number;
  temp: number;
  humidity: number;
  sunset: number;
  min_temp: number;
  cloud_pct: number;
  feels_like: number;
  sunrise: number;
  max_temp: number;
}

export interface WeatherData extends WeatherApiResponse {
  city: string;
  country: string;
  dateTime: Date;
}

export enum WeatherCondition {
  Sunny = "Sunny",
  PartlyCloudy = "Partly Cloudy",
  Cloudy = "Cloudy",
  Rainy = "Rainy",
  Stormy = "Stormy",
  Snowy = "Snowy",
}

export interface ANWeatherResponse {
  wind_speed: number;
  wind_degrees: number;
  temp: number;
  humidity: number;
  sunset: number;
  min_temp: number;
  cloud_pct: number;
  feels_like: number;
  sunrise: number;
  max_temp: number;
}

export interface HourlyForecast {
  time: Date;
  temp: number;
  condition: WeatherCondition;
}

export interface DailyForecast {
  date: Date;
  minTemp: number;
  maxTemp: number;
  condition: WeatherCondition;
}

export type TemperatureUnit = "C" | "F";

export type WindSpeedUnit = "ms" | "kmh" | "mph";

export interface WeatherPreferences {
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
  useCurrentLocation: boolean;
}

export interface WeatherState {
  currentWeather: WeatherData | null;
  hourlyForecast: HourlyForecast[];
  dailyForecast: DailyForecast[];
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

export interface SearchBarProps {
  value: string;
  onChangeText: () => void;
  onSubmit: () => void;
  editable: boolean;
}

export interface OwnWeatherResponse {
  coord: OwnCoord;
  weather: OwnWeather[];
  base: string;
  main: OwnMain;
  visibility: number;
  wind: OwnWind;
  rain?: {
    "1h": number;
  };
  clouds: OwnClouds;
  dt: number;
  sys: OwnSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface OwnCoord {
  lon: number;
  lat: number;
}

interface OwnWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface OwnMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface OwnWind {
  speed: number;
  deg: number;
}

interface OwnClouds {
  all: number;
}
interface OwnSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface OwnWeatherForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}

interface ForecastItem {
  dt: number;
  main: MainWeather;
  weather: OwnWeatherResponse["weather"];
  clouds: OwnWeatherResponse["clouds"];
  wind: OwnWeatherResponse["wind"];
  visibility: number;
  pop: number;
  rain?: {
    "1h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface MainWeather extends OwnMain {
  temp_kf: number;
}

interface City {
  id: number;
  name: string;
  coord: OwnWeatherResponse["coord"];
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
