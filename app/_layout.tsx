import { Slot } from "expo-router";
import { CartProvider } from "@/src/context/CartContext";
import { OrdersProvider } from "@/src/context/OrdersContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <OrdersProvider>
        <Slot />
      </OrdersProvider>
    </CartProvider>
  );
}
