import { Image, Text, View } from "react-native";
import hamburguer from "../../../assets/images/hamburguer.png";
import styles from "./style";

const Product = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={hamburguer} />
      </View>
      <View>
        <Text style={styles.title}>Cheeseburger Wendy&apos;s Burger</Text>
      </View>
      <View>
        <Text style={styles.descriptionContainer}>
          O Cheeseburger do Wendy&apos;s é um hambúrguer clássico de fast food
          que oferece uma explosão de sabor em cada mordida. Feito com um
          suculento hambúrguer de carne bovina cozido à perfeição, ele é coberto
          com queijo americano derretido, alface crocante, tomate maduro e
          picles crocantes.
        </Text>
      </View>
      <View>
        <Text style={styles.price}>R$60.24</Text>
      </View>
    </View>
  );
};

export default Product;
