import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 4,
    fontWeight: "400",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  value: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.secondary,
  },
});
