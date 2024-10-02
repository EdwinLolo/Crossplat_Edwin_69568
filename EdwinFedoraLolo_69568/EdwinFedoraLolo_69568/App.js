import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Input from "./Input";

export default function App() {
  const [name, setName] = useState("");
  const [nim, setNIM] = useState("");

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text>
        {name} - {nim}
      </Text>
      <Input
        label="Name"
        placeholder="Input your name"
        value={name}
        onChangeText={setName}
      />
      <Input
        label="NIM"
        placeholder="Input your NIM"
        value={nim}
        onChangeText={setNIM}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
