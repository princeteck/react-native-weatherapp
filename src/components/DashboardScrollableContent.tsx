import React from "react";
import { ScrollView, View, Text } from "react-native";

const DashboardScrollableContent: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-lg mb-4">Scrollable Content</Text>
        {/* Add more content here */}
        {[...Array(20)].map((_, index) => (
          <View key={index} className="bg-gray-200 p-4 mb-4 rounded-md">
            <Text>Item {index + 1}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DashboardScrollableContent;
