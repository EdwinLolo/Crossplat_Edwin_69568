import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TransactionProvider } from "./Components/TransactionContext";

import BottomNavbar from "./BottomNavbar";
import SplashScreen from "./Pages/Splash";
import Pulsa from "./Components/Pulsa";
import Payment from "./Components/Payment";
import Pin from "./Components/Pin";
import History_detail from "./Components/History_detail";
import Listrik from "./Components/Listrik";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#1e1e1e" barStyle="dark-content" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#FFFFFF" },
            headerTintColor: "#000000",
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <Stack.Screen
            name="Main"
            component={BottomNavbar}
            options={{ headerShown: false }}
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <Stack.Screen
            name="Pulsa"
            component={Pulsa}
            options={{ headerShown: false }}
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ headerShown: false }}
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <Stack.Screen
            name="Pin"
            component={Pin}
            options={{ headerShown: false }}
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <Stack.Screen
            name="HistoryDetail"
            component={History_detail}
            options={{ headerShown: false }}
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <Stack.Screen
            name="Listrik"
            component={Listrik}
            options={{ headerShown: false }}
            style={{ backgroundColor: "#FFFFFF" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}
