import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { colors } from "@/src/styles/global";
import styles from "./style";

const Quantity = () => {
  return (
    <View style={styles.quantityContainer}>
      <Text style={styles.quantityLabel}>Quantidade:</Text>
      <View style={styles.quantity}>
        <View style={styles.button}>
          <MaterialIcons name="remove" size={24} color={colors.light} />
        </View>
        <Text style={styles.quantityNumber}>2</Text>
        <View style={styles.button}>
          <MaterialIcons name="add" size={24} color={colors.light} />
        </View>
      </View>
    </View>
  );
};

export default Quantity;
