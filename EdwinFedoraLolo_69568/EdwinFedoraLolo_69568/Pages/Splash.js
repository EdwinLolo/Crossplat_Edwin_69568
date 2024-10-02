import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import GmailLogo from "../assets/Gmail_Icon.png";
import { StatusBar } from "expo-status-bar";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={GmailLogo} style={styles.logo} />
      <Text style={styles.text}>Google Workspace</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    position: "absolute", // Allows absolute positioning
    bottom: 80, // Places the text 50 pixels from the bottom
    fontSize: 20,
    color: "#555",
    fontWeight: "bold",
    alignSelf: "center", // Aligns the text horizontally in the center
  },
});

export default Splash;
