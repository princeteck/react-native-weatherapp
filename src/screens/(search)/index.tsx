// src/screens/(search)/index.tsx

import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/store";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../../App";
import SearchBar from "../../components/SearchBar";
import { useCitySearchQuery } from "../../hooks/queries/useCitySearchQuery";
import { setSelectedCity } from "../../store/features/citySlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { CityData } from "../../types/city";
import { useWeatherQuery } from "../../hooks/queries/useWeatherQuery";

type SearchScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Search">;
};

export default function SearchScreen({
  navigation,
}: Readonly<SearchScreenProps>) {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const [tempSelectedCity, setTempSelectedCity] = useState<CityData | null>(
    null
  );
  const { data: cities, isLoading: isSearching } = useCitySearchQuery(query);
  const { isLoading: isLoadingWeather } = useWeatherQuery(tempSelectedCity);

  const handleSelectCity = async (city: CityData) => {
    setTempSelectedCity(city);
    dispatch(setSelectedCity(city));
  };

  React.useEffect(() => {
    if (tempSelectedCity && !isLoadingWeather) {
      navigation.goBack();
    }
  }, [tempSelectedCity, isLoadingWeather, navigation]);

  const isLoading = isSearching || isLoadingWeather;

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <SafeAreaView>
        <SearchBar value={query} onChangeText={setQuery} onSubmit={() => {}} />

        {isLoading && (
          <View className="absolute top-0 left-0 right-0 bottom-0 z-50">
            <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 items-center justify-center">
              <ActivityIndicator size="large" color="white" />
            </View>
          </View>
        )}

        {cities?.map((city) => (
          <TouchableOpacity
            key={`${city.latitude},${city.longitude}`}
            className="py-2 border-b border-gray-700"
            onPress={() => handleSelectCity(city)}
            disabled={isLoading}
          >
            <Text className="text-white text-lg">
              {city.name}, {city.country}
            </Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </View>
  );
}
