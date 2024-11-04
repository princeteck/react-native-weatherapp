import React from "react";
import { View, Text, Switch } from "react-native";
import { BottomSheet } from "react-native-btr";

type SettingsSheetProps = {
  isVisible: boolean;
  onClose: () => void;
};

export default function SettingsSheet({
  isVisible,
  onClose,
}: Readonly<SettingsSheetProps>) {
  return (
    <BottomSheet
      visible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <View className="bg-white p-4 rounded-t-lg">
        <Text className="text-lg font-bold mb-4">Weather Updates</Text>
        <View className="flex-row justify-between items-center mb-2">
          <Text>Precipitation Updates</Text>
          <Switch />
        </View>
        {/* Add more settings options */}
      </View>
    </BottomSheet>
  );
}
