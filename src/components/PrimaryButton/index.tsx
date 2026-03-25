import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface ButtonProps {
  title: string;
}

const PrimaryButton = ({ title }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => router.push("/(tabs)/Cart/Checkout")}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
