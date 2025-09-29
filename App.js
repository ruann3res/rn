import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { CartIcon } from "./src/components/CartIcon";
import { Cart } from "./src/screens/Cart";
import { ProductDetails } from "./src/screens/ProductDetails";
import { ProductsList } from "./src/screens/ProductList";
import { getProduct } from "./src/services/productsService";

const App = () => {
  const Stack = createNativeStackNavigator();
  const [itensCarrinho, setItensCarrinho] = useState([]);

  const addItemToCart = async (id) => {
    try {
      const product = await getProduct(id);
      if (product) {
        setItensCarrinho((prevItems) => {
          const item = prevItems.find((item) => item.id == id);
          if (!item) {
            return [
              ...prevItems,
              {
                id,
                qty: 1,
                product,
              },
            ];
          } else {
            return prevItems.map((item) => {
              if (item.id == id) {
                item.qty++;
              }
              return item;
            });
          }
        });
      }
    } catch (error) {
      console.error("Erro ao adicionar item ao carrinho:", error);
    }
  };

  const removeItemFromCart = (id) => {
    setItensCarrinho((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const updateItemQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeItemFromCart(id);
      return;
    }

    setItensCarrinho((prevItems) => {
      return prevItems.map((item) => {
        if (item.id == id) {
          return { ...item, qty: newQty };
        }
        return item;
      });
    });
  };

  const getItemsCount = () => {
    return itensCarrinho.reduce((sum, item) => sum + item.qty, 0);
  };

  const getTotalPrice = () => {
    return itensCarrinho.reduce(
      (sum, item) => sum + item.product.price * item.qty,
      0
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsList}
          options={({ navigation }) => ({
            title: "Produtos",
            headerTitleStyle: styles.headerTitle,
            headerRight: () => (
              <CartIcon navigation={navigation} getItemsCount={getItemsCount} />
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          options={({ navigation }) => ({
            title: "Detalhes do produto",
            headerTitleStyle: styles.headerTitle,
            headerRight: () => (
              <CartIcon navigation={navigation} getItemsCount={getItemsCount} />
            ),
          })}
        >
          {(props) => (
            <ProductDetails {...props} addItemToCart={addItemToCart} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Cart"
          options={({ navigation }) => ({
            title: "Meu carrinho",
            headerTitleStyle: styles.headerTitle,
            headerRight: () => (
              <CartIcon navigation={navigation} getItemsCount={getItemsCount} />
            ),
          })}
        >
          {(props) => (
            <Cart
              {...props}
              items={itensCarrinho}
              getTotalPrice={getTotalPrice}
              removeItemFromCart={removeItemFromCart}
              updateItemQuantity={updateItemQuantity}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default App;
