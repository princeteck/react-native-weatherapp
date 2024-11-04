import React from "react";
import { View, Text, Image } from "react-native";
import * as OutlineIcons from "react-native-heroicons/outline";
import { ANWeatherResponse } from "../types/weather";
import { BlurView } from "expo-blur";
import GlassMorphicContainer from "./GrassMorphicContainer";
import GradientText from "./GradientText";
type WeatherCardProps = {
  weather: ANWeatherResponse;
};

export default function WeatherCard({ weather }: Readonly<WeatherCardProps>) {
  return (
    <View>
      <View className="rounded-lg m-4">
        <View className="flex-row justify-between">
          <View className="flex-row h-28 opacity-90">
            <GradientText
              text={`${weather.temp}`}
              customClassName={"text-9xl tracking-tighter font-bold"}
              colors={["#FFFFFF", "#FFFFFF", "#8983E6", "#8983E6"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
            <GradientText
              text={`°C`}
              customClassName={"text-7xl tracking-tighter font-bold "}
              colors={["#FFFFFF", "#FFFFFF", "#8983E6", "#8983E6"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>
          <View className="flex-row -rotate-90 items-end">
            <OutlineIcons.CloudIcon className=" text-white" size={24} />
            <Text className=" text-white tracking-widest font-bold ml-1">
              {" "}
              Mostly Cloudy
            </Text>
          </View>
        </View>
        <View className="relative">
          <View className=" absolute inset-0 py-3 px-6 mt-6 rounded-3xl flex-row justify-center bg-blue-50 opacity-5 border border-white top-0 left-0 right-0 bottom-0"></View>
          <View className="flex-row justify-between items-center border border-gray-50 rounded-full py-3 px-6 mt-6">
            <View className="flex-row justify-center items-center">
              <Text className="text-white">Today {weather.feels_like}°C</Text>
            </View>
            <View className="flex-row justify-center items-center">
              <Text className="text-white">Tomorrow: {weather.humidity}%</Text>
            </View>
          </View>
        </View>
        {/* <GlassMorphicContainer
          customClassName="flex-row justify-between items-center"
          padding="p-4"
          margin="my-6"
          borderRadius="rounded-3xl"
        >
          <View>
            <GradientText
              text={`${weather.temp}`}
              customClassName={"text-9xl tracking-tighter font-san font-bold"}
              colors={["#FFFFFF", "#FFFFFF", "#bdc3c7", "#7F8A94"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>
        </GlassMorphicContainer> */}
        <BlurView
          intensity={20}
          tint="light"
          className="shadow-lg bg-white-300/5 py-8 my-6 rounded-3xl flex-row justify-center border border-gray-50 overflow-hidden"
        >
          {/* <Image
            source={require("../../assets/bg-night.jpg")}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: -1 }}
            blurRadius={1}
          /> */}
          <View>
            <Text className="w-28 px-2 text-center text-lg font-bold text-white">
              {weather.cloud_pct}
            </Text>

            <Text className="w-28 px-2 text-center text-xs font-light tracking-wide text-white">
              Slight chance of rain
            </Text>
          </View>
          <View>
            <Text className="w-28 px-2 text-center text-lg font-bold text-white">
              {weather.wind_speed} km/h
            </Text>

            <Text className="w-28 px-2 text-center text-xs font-light tracking-wide text-white">
              Slight chance of rain
            </Text>
          </View>
          <View>
            <Text className="w-28 px-2 text-center text-lg font-bold text-white">
              {weather.humidity}%
            </Text>

            <Text className="w-28 px-2 text-center text-xs font-light tracking-wide text-white">
              Current Humidity Recorded
            </Text>
          </View>
        </BlurView>
      </View>
    </View>
  );
}
