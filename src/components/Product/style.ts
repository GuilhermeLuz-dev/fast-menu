import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    imageContainer: {
        alignItems: "center",
        marginBottom: 16,
    },
    image: {
        marginTop: 18,
        width: 350,
        height: 355,
    },
    descriptionContainer: {
        color: colors.textGray,
        fontSize: 16,
        paddingHorizontal: 16,
        marginTop: 16,
    },
    title: {
        color: colors.secondary,
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 16,
    },
    price: {
        paddingLeft:16,
        color: colors.primary,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30,
    },
});

export default styles;