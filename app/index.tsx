import SearchBar from "@/src/components/SearchBar";
import { View } from "react-native";

import ListProducts from "@/src/components/ListProducts";
import { global } from "../src/styles/global";

export default function Index() {
  return (
    <View style={global.container}>
      <SearchBar />
      <ListProducts />
    </View>
  );
}
