import CartItem from "@/src/components/CartItem";
import HeaderCustumer from "@/src/components/HeaderCustumer";
import PrimaryButton from "@/src/components/PrimaryButton";
import TotalPrice from "@/src/components/TotalPrice";
import { global } from "@/src/styles/global";
import { ScrollView, View } from "react-native";

export default function CartScreen() {
  return (
    <>
      <HeaderCustumer />
      <View style={global.container}>
        <ScrollView
          style={{ height: 610 }}
          showsVerticalScrollIndicator={false}
        >
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TotalPrice />
          <PrimaryButton title="Fazer Pedido" />
        </View>
      </View>
    </>
  );
}
