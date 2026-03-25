import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import hamburguer from "../../../assets/images/hamburguer.png";
import Quantity from "../Quantity";
import styles from "./style";

const CartItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/Home/productPage")}
        >
          <Image style={styles.cartImage} source={hamburguer} />
          <Text style={styles.title}>Cheeseburger</Text>
          <Text style={styles.description}>Wendy&apos;s Burger</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.price}>R$60.24</Text>
        <Quantity />
      </View>
    </View>
  );
};

export default CartItem;
