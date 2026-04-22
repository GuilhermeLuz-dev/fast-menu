import { Href, router } from "expo-router";
import React from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./style";

interface ButtonProps {
  title: string;
  path?: Href;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({
  title,
  path,
  buttonStyle,
  textStyle,
  onPress,
  disabled = false,
}: ButtonProps) => {
  const handlePress = () => {
    if (disabled) {
      return;
    }

    if (onPress) {
      onPress();
      return;
    }

    if (path) {
      router.push(path);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={disabled ? 1 : 0.8}
      disabled={disabled}
    >
      <View
        style={[styles.button, buttonStyle, disabled && styles.buttonDisabled]}
      >
        <Text
          style={[
            styles.buttonText,
            textStyle,
            disabled && styles.buttonTextDisabled,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
