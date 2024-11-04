import React from "react";
import { BlurView } from "expo-blur";
import { View } from "react-native";
import PropTypes from "prop-types";

const GlassMorphicContainer = ({
  children,
  customClassName = "",
  shadow = "shadow-lg",
  padding = "py-8",
  margin = "my-6",
  border = "border border-gray-50",
  borderRadius = "rounded-3xl",
}: {
  children?: React.ReactNode;
  customClassName?: string;
  shadow?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
}) => {
  return (
    <View>
      <BlurView
        intensity={40}
        tint="light"
        className={`${shadow}  ${margin} ${padding}  ${borderRadius}  ${border} ${customClassName} overflow-hidden`}
      >
        <View className={customClassName}>{children}</View>
      </BlurView>
      {/* <BackdropBlur blur={50} /> */}
    </View>
  );
};

// Define PropTypes for the component
GlassMorphicContainer.propTypes = {
  children: PropTypes.node,
  customClassName: PropTypes.string,
  shadow: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default GlassMorphicContainer;
