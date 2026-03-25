import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

interface TotalPriceProps {
  total?: string;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ total = "120,48" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Preço total:</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.value}>R${total}</Text>
      </View>
    </View>
  );
};

export default TotalPrice;
