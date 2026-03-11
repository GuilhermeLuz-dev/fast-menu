import { View } from "react-native";
import ProductCard from "../ProductCard";
import { styles } from "./styles";

const ListProducts = () => {
  return (
    <View style={styles.listContainer}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </View>
  );
};

export default ListProducts;
