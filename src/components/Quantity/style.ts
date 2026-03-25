import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  quantityContainer: {
    marginTop: "auto",
  },
  quantityLabel: {
    color: colors.secondary,
    fontSize: 16,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
  quantityNumber: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "600",
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 16,
  },
});

export default styles;
