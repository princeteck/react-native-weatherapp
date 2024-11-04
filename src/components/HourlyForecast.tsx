import React from "react";
import { View, Text } from "react-native";
import CurvedContainer from "./CurvedContainer";

const HourlyForecast: React.FC = () => {
  const forecastData = [
    { time: "05:00 AM", temp: "23°", icon: "☀️" },
    { time: "08:00 AM", temp: "20°", icon: "⛅" },
    { time: "11:00 AM", temp: "17°", icon: "🌧️" },
    { time: "02:00 PM", temp: "16°", icon: "🌧️" },
  ];

  return (
    <CurvedContainer>
      <Text className="text-gray-800 font-semibold mb-4 mx-4">
        Hourly Forecast
      </Text>
      <View className="flex-row justify-between mx-4">
        {forecastData.map((item, index) => (
          <View key={index} className="items-center">
            <View className="w-16 h-16 mb-2 rounded-full bg-gray-100 flex items-center justify-center">
              <Text className="text-2xl my-2">{item.icon}</Text>
            </View>
            <Text className="text-gray-600 text-xs">{item.time}</Text>
            <Text className="text-gray-800 font-semibold text-lg">
              {item.temp}
            </Text>
          </View>
        ))}
      </View>
      <View className="mt-4 pt-4 border-t border-gray-200  mx-4">
        <Text className="text-gray-800 font-semibold">Tomorrow</Text>
        <View className="border-2 border-gray-100 shadow-sm rounded-3xl bg-white p-4 mt-2">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center flex-auto">
              <View className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                <Text className="text-2xl my-2">🌧️</Text>
              </View>
              <View className="flex-column ml-4">
                <Text className="text-gray-800 font-semibold">Tomorrow</Text>
                <Text className="text-gray-400 font-semibold text-xs">
                  Light Rain Showers
                </Text>
              </View>
            </View>
            <View className="flex-row flex-1">
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↑</Text>
                <Text className="text-gray-800 font-semibold ml-1">17°</Text>
              </View>
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↓</Text>
                <Text className="text-gray-800 font-semibold ml-1">10°</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-4 pt-4 border-t border-gray-200  mx-4">
        <Text className="text-gray-800 font-semibold">Tomorrow</Text>
        <View className="border-2 border-gray-100 shadow-sm rounded-3xl bg-white p-4 mt-2">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center flex-auto">
              <View className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                <Text className="text-2xl my-2">🌧️</Text>
              </View>
              <View className="flex-column ml-4">
                <Text className="text-gray-800 font-semibold">Tomorrow</Text>
                <Text className="text-gray-400 font-semibold text-xs">
                  Light Rain Showers
                </Text>
              </View>
            </View>
            <View className="flex-row flex-1">
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↑</Text>
                <Text className="text-gray-800 font-semibold ml-1">17°</Text>
              </View>
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↓</Text>
                <Text className="text-gray-800 font-semibold ml-1">10°</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-4 pt-4 border-t border-gray-200  mx-4">
        <Text className="text-gray-800 font-semibold">Tomorrow</Text>
        <View className="border-2 border-gray-100 shadow-sm rounded-3xl bg-white p-4 mt-2">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center flex-auto">
              <View className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                <Text className="text-2xl my-2">🌧️</Text>
              </View>
              <View className="flex-column ml-4">
                <Text className="text-gray-800 font-semibold">Tomorrow</Text>
                <Text className="text-gray-400 font-semibold text-xs">
                  Light Rain Showers
                </Text>
              </View>
            </View>
            <View className="flex-row flex-1">
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↑</Text>
                <Text className="text-gray-800 font-semibold ml-1">17°</Text>
              </View>
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↓</Text>
                <Text className="text-gray-800 font-semibold ml-1">10°</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-4 pt-4 border-t border-gray-200  mx-4">
        <Text className="text-gray-800 font-semibold">Tomorrow</Text>
        <View className="border-2 border-gray-100 shadow-sm rounded-3xl bg-white p-4 mt-2">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center flex-auto">
              <View className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                <Text className="text-2xl my-2">🌧️</Text>
              </View>
              <View className="flex-column ml-4">
                <Text className="text-gray-800 font-semibold">Tomorrow</Text>
                <Text className="text-gray-400 font-semibold text-xs">
                  Light Rain Showers
                </Text>
              </View>
            </View>
            <View className="flex-row flex-1">
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↑</Text>
                <Text className="text-gray-800 font-semibold ml-1">17°</Text>
              </View>
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↓</Text>
                <Text className="text-gray-800 font-semibold ml-1">10°</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-4 pt-4 border-t border-gray-200  mx-4">
        <Text className="text-gray-800 font-semibold">Tomorrow</Text>
        <View className="border-2 border-gray-100 shadow-sm rounded-3xl bg-white p-4 mt-2">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center flex-auto">
              <View className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                <Text className="text-2xl my-2">🌧️</Text>
              </View>
              <View className="flex-column ml-4">
                <Text className="text-gray-800 font-semibold">Tomorrow</Text>
                <Text className="text-gray-400 font-semibold text-xs">
                  Light Rain Showers
                </Text>
              </View>
            </View>
            <View className="flex-row flex-1">
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↑</Text>
                <Text className="text-gray-800 font-semibold ml-1">17°</Text>
              </View>
              <View className="flex-row flex-1">
                <Text className="text-gray-400 font-semibold">↓</Text>
                <Text className="text-gray-800 font-semibold ml-1">10°</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CurvedContainer>
  );
};

export default HourlyForecast;
