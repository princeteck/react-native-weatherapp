import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
const INITIAL_TRANSLATE_Y = -SCREEN_HEIGHT * 0.33; // 33% of screen height

type BottomSheetProps = {
  onClose: () => void;
};

const BottomSheet: React.FC<BottomSheetProps> = ({ onClose }) => {
  const translateY = useSharedValue(INITIAL_TRANSLATE_Y);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context: { startY: number }) => {
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateY.value = Math.max(
        Math.min(context.startY + event.translationY, INITIAL_TRANSLATE_Y),
        MAX_TRANSLATE_Y
      );
    },
    onEnd: () => {
      if (translateY.value > -SCREEN_HEIGHT / 2) {
        translateY.value = withSpring(INITIAL_TRANSLATE_Y, { damping: 50 });
      } else {
        translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 });
      }
    },
  });

  useEffect(() => {
    translateY.value = withSpring(INITIAL_TRANSLATE_Y, { damping: 50 });
  }, [translateY]);

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[styles.bottomSheetContainer, rBottomSheetStyle]}
        className="bg-white rounded-t-3xl shadow-lg"
      >
        <View className="w-16 h-1 bg-gray-300 rounded-full self-center mt-2" />
        <View className="p-4">
          <Text className="text-xl font-bold mb-4">Bottom Sheet Content</Text>
          {/* Add your bottom sheet content here */}
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
});

export default BottomSheet;
