import { Text, View, ScrollView } from "react-native";
import { Avatar, Provider as PaperProvider } from "react-native-paper";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";

import userData from "./data.json";
import styles from "./appStyle.styles.js";

// Import font files
import Akbaal from "./assets/Fonts/akbaal.ttf";
import SF_Black from "./assets/Fonts/SF-UI-Display-Black.otf";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load fonts when the component is mounted
  const loadFonts = async () => {
    await Font.loadAsync({
      Akbaal_regular: Akbaal,
      SF_Black: SF_Black,
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // You can replace this with a loading spinner
  }

  return (
    <ScrollView>
      {userData.map((users) => (
        <View style={styles.container} key={users.name}>
          <View style={styles.card}>
            <Avatar.Image size={80} source={{ uri: users.photo_url }} />
            <View style={styles.textContainer}>
              {/* Menggunakan font custom yang telah di-load */}
              <Text style={[styles.boldText, { fontFamily: "Akbaal_regular" }]}>
                {users.name}
              </Text>
              <Text style={{ fontFamily: "SF_Black" }}>{users.email}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
