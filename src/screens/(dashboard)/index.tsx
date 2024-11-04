import React, { useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Animated,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
} from "react-native";
import WeatherCard from "../../components/WeatherCard";
import HourlyForecast from "../../components/HourlyForecast";
import SettingsSheet from "../../components/SettingsSheet";
import { useWeatherQuery } from "../../hooks/queries/useWeatherQuery";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SolidIcons from "react-native-heroicons/solid";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { fetchCurrentLocation } from "../../store/features/citySlice";
import { MapPinIcon } from "react-native-heroicons/solid";
import { CityData } from "../../types/city";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const HEADER_MAX_HEIGHT = SCREEN_HEIGHT * 0.7;
const HEADER_MIN_HEIGHT = 90;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const DashboardScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city.selectedCity);
  const locationError = useAppSelector((state) => state.city.locationError);
  const isLoadingLocation = useAppSelector(
    (state) => state.city.isLoadingLocation
  );
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const { data: weather, isLoading, error } = useWeatherQuery(selectedCity);

  const handleSearchPress = (): void => {
    navigation.navigate("Search");
  };

  const handleGetCurrentLocation = () => {
    dispatch(fetchCurrentLocation());
  };

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  if (!selectedCity) {
    return (
      <View className="flex-1 justify-center items-center bg-purple-900">
        <Text className="text-white text-lg mb-4">No city selected</Text>
        <TouchableOpacity
          className="bg-white px-6 py-3 rounded-full"
          onPress={handleSearchPress}
        >
          <Text className="text-purple-900 font-semibold">Select a City</Text>
        </TouchableOpacity>
        <View className="flex-row justify-between items-center px-4 w-full">
          <TouchableOpacity onPress={handleSearchPress}>
            <View className="flex-row items-center">
              <SolidIcons.MapPinIcon size={20} color="white" />
              <Animated.Text style={[styles.headerTitle] as TextStyle}>
                {selectedCity
                  ? `${(selectedCity as CityData).name}, ${(selectedCity as CityData).country}`
                  : "Select City"}
              </Animated.Text>
            </View>
          </TouchableOpacity>
          <View className="flex-row gap-4">
            <TouchableOpacity
              onPress={handleGetCurrentLocation}
              disabled={isLoadingLocation}
            >
              <MapPinIcon
                size={24}
                color="white"
                className={isLoadingLocation ? "opacity-50" : ""}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsSettingsVisible(true)}>
              <SolidIcons.Cog8ToothIcon size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {locationError && (
          <View className="absolute bottom-4 left-4 right-4">
            <View className="bg-red-500 p-4 rounded-lg">
              <Text className="text-white">{locationError}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }

  // if (isLoading) {
  //   return (
  //     <View className="flex-1 justify-center items-center bg-purple-900">
  //       <ActivityIndicator size="large" color="white" />
  //     </View>
  //   );
  // }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-purple-900">
        <Text className="text-white text-lg">{error.message}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image
        source={require("../../../assets/bg-night.jpg")}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
        blurRadius={1}
      />
      <Animated.View
        style={[styles.header, { height: headerHeight }] as ViewStyle}
      >
        <Animated.View>
          <SafeAreaView>
            <View className="flex-row justify-between items-center px-4 w-full">
              <TouchableOpacity onPress={handleSearchPress}>
                <View className="flex-row items-center">
                  <SolidIcons.MapPinIcon size={20} color="white" />
                  <Animated.Text style={[styles.headerTitle] as TextStyle}>
                    {selectedCity.name}, {selectedCity.country}
                  </Animated.Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsSettingsVisible(true)}>
                <SolidIcons.Cog8ToothIcon size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View className="p-4">
              <Text className="text-white text-xs font-light mb-4">
                Today, {format(new Date(), "MMM dd hh:mm")}
              </Text>
              {weather && <WeatherCard weather={weather} />}
            </View>
          </SafeAreaView>
        </Animated.View>
      </Animated.View>
      <ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View className="mt-4">
          <HourlyForecast />
        </View>
      </ScrollView>
      <SettingsSheet
        isVisible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    overflow: "hidden",
    zIndex: 1,
  } as ViewStyle,
  headerContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
  } as ViewStyle,
  heroContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 4,
  } as TextStyle,
});

export default DashboardScreen;
