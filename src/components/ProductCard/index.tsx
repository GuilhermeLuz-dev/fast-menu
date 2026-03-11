import { colors } from "@/src/styles/global";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const ProductCard = () => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/hamburguer.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.description}>
        <Text>Cheeseburger</Text>
        <Text>Wendy&apos;s Burger</Text>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.scoreContainer}>
          <FontAwesome name="star" size={15} color="gold" />
          4.5
        </View>
        <Ionicons
          name="bag-handle-outline"
          size={25}
          color={colors.secondary}
        />
      </View>
    </View>
  );
};

export default ProductCard;
