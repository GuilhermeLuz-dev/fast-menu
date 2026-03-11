import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardItem: {
    width: "100%",
    height: "100%",
    maxWidth: 158,
    maxHeight: 209,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBlockColor: colors.secondary,
    borderRadius: 20,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  description: {
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
