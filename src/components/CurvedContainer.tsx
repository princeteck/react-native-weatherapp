import React from "react";
import { Dimensions, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

interface CurvedContainerProps {
  children: React.ReactNode;
}
const { width } = Dimensions.get("window");
const CurvedContainer: React.FC<CurvedContainerProps> = ({ children }) => {
  return (
    <View className="relative  bg-gray-50">
      <View className="absolute -top-20 left-0 right-0">
        <Svg width={width} height={150} viewBox="0 0 1081 222">
          <G transform="matrix(1,0,0,1,0.969479,-399.425)">
            <Path
              d="M956.902,414.142C988.139,410.407 1019.48,420.221 1043.01,441.104C1066.54,461.987 1080,491.941 1080,523.4L1080,620.467L-0.969,620.467L-0.969,523.401C-0.969,491.942 12.495,461.988 36.024,441.105C59.552,420.222 90.893,410.409 122.129,414.143C231.469,427.216 387.04,445.816 474.071,456.221C517.53,461.417 561.453,461.417 604.912,456.222C691.952,445.816 847.55,427.215 956.902,414.142Z"
              fill="#F9FAFB"
            />
          </G>
        </Svg>
      </View>
      <View className="bg-transparent pt-8 px-4 pb-12 -mt-8 rounded-t-3xl">
        {children}
      </View>
    </View>
  );
};

export default CurvedContainer;
