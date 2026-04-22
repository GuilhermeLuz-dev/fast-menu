import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: colors.primary, // Vermelho vibrante da imagem
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24, // Bordas bem arredondadas
    alignItems: "center",
    justifyContent: "center",
    elevation: 2, // Sombra leve no Android
    shadowColor: "#000", // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: colors.light,
    fontSize: 16,
    fontWeight: "700",
  },
  buttonDisabled: {
    backgroundColor: "#a8a8a8",
    shadowOpacity: 0,
  },
  buttonTextDisabled: {
    color: "#f0f0f0",
  },
});
