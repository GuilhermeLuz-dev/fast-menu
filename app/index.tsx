import SearchBar from "@/src/components/SearchBar";
import {View, TouchableOpacity, Text, ScrollView} from "react-native";

import ListProducts from "@/src/components/ListProducts";
import {global} from "../src/styles/global";
import {router} from "expo-router";

export default function Index() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={global.container}>
                <TouchableOpacity onPress={() => router.push("../../register")}>
                    <Text style={global.cadast}>Cadastrar Usuário</Text>
                </TouchableOpacity>
                <SearchBar/>
                <ListProducts/>
            </View>
        </ScrollView>
    );
}
