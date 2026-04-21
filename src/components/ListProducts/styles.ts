import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  emptyText: {
    textAlign: "center",
    color: colors.textGray,
    marginTop: 24,
    fontSize: 16,
  },
});
