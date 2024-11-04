// src/utils/formatters.ts

// Convert temperature from Celsius to Fahrenheit
export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

// Format temperature with degree symbol
export const formatTemperature = (
  temp: number,
  unit: "C" | "F" = "C"
): string => {
  const formattedTemp = Math.round(temp);
  return `${formattedTemp}°${unit}`;
};

// Convert wind speed from m/s to km/h
export const msToKmh = (speedMs: number): number => {
  return speedMs * 3.6;
};

// Format wind speed
export const formatWindSpeed = (
  speed: number,
  unit: "ms" | "kmh" = "ms"
): string => {
  if (unit === "kmh") {
    speed = msToKmh(speed);
  }
  return `${speed.toFixed(1)} ${unit === "ms" ? "m/s" : "km/h"}`;
};

// Format date
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Format time
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Convert Unix timestamp to formatted time string
export const formatUnixTime = (unixTimestamp: number): string => {
  const date = new Date(unixTimestamp * 1000);
  return formatTime(date);
};

// Get weather icon based on cloud percentage
export const getWeatherIcon = (cloudPct: number): string => {
  if (cloudPct < 20) return "☀️"; // Sunny
  if (cloudPct < 50) return "⛅"; // Partly cloudy
  if (cloudPct < 80) return "☁️"; // Cloudy
  return "🌧️"; // Rainy (assuming high cloud coverage might indicate rain)
};

// Format humidity
export const formatHumidity = (humidity: number): string => {
  return `${humidity}%`;
};

// Format cloud percentage
export const formatCloudPct = (cloudPct: number): string => {
  return `${cloudPct}%`;
};
