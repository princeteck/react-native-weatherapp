import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

type SearchBarProps = {
  value: string;
  onChangeText?: (text: string) => void;
  onSubmit?: () => void;
  editable?: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText = () => {},
  onSubmit = () => {},
  editable = true,
}) => {
  return (
    <View className="flex-row items-center bg-gray-800 rounded-full px-4 py-2">
      <Feather name="search" size={20} color="white" />
      <TextInput
        className="flex-1 text-white ml-2"
        placeholder="Search for city"
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="search"
        editable={editable}
      />
      {editable && value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText("")}>
          <Feather name="x" size={20} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
