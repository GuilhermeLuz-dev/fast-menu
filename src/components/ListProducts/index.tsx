import { Product } from "@/src/data/products";
import { FlatList, Text } from "react-native";
import ProductCard from "../ProductCard";
import { styles } from "./styles";

type ListProductsProps = {
  products: Product[];
};

const ListProducts = ({ products }: ListProductsProps) => {
  if (!products.length) {
    return <Text style={styles.emptyText}>Nenhum item encontrado.</Text>;
  }

  return (
    <FlatList
      style={styles.listContainer}
      data={products} // O array de dados
      keyExtractor={(item) => item.id.toString()} // A chave única
      renderItem={({ item }) => (
        // O componente que será repetido
        <ProductCard product={item} />
      )}
      numColumns={2}
      columnWrapperStyle={{ gap: 20, justifyContent: "space-between" }}
      scrollEnabled={true}
      // Opcional: melhora a performance e evita que o conteúdo cole nas bordas
      contentContainerStyle={{ paddingBottom: 20, rowGap: 20 }}
    />
  );
};

export default ListProducts;
