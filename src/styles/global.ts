import {StyleSheet} from "react-native";

export const colors = {
    light: "#fff",
    dark: "#000",
    primary: "#F71C1C",
    secondary: "#3C2F2F",
    buttons: "#F71C1C",
    inputBackground: "#F5F5F5",
    inputBorder: "#E0E0E0",
};

export const global = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
    },

    // Só para conseguir navegar até a tela de cadastro, não tem relação com o design
    cadast: {
        marginTop: 20,
    }
});