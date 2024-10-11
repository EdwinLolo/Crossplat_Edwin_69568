import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Notif = () => {
  return (
    <View style={styles.container}>
      <Text>Notif</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Notif;
