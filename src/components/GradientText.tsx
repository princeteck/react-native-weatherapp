import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

interface GradientTextProps {
  text: string;
  customClassName?: string;
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  customClassName = "",
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
}) => {
  return (
    <MaskedView
      maskElement={
        <Text className={`${customClassName} bg-transparent`}>{text}</Text>
      }
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={{ flex: 1 }}
      >
        <Text className={`${customClassName} bg-transparent opacity-0`}>
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;