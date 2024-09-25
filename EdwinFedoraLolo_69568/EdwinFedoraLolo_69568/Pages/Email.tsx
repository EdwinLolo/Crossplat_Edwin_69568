import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const Email = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Email List Page</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
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

export default Email;
