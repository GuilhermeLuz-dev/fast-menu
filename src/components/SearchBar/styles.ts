import {colors} from "@/src/styles/global";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.light,
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginTop: 40,
    },
    input: {
        flex: 1,
        backgroundColor: colors.light,
        color: colors.secondary,
        opacity: 0.4,
        fontSize: 18,
        height: 20,
        marginLeft: 24,
    },
});
