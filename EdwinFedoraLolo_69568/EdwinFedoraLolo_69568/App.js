import { StyleSheet, View, TextInput, Button } from "react-native";
import Counter from "./Components/Counter";
import { useState } from "react";
import Profile from "./Components/Profile";

export default function App() {
  const [count, setCount] = useState(0);
  const [nama, setNama] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedCount, setSubmittedCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleSubmit = () => {
    setSubmittedName(nama);
    setSubmittedCount(count);
  };
  return (
    <View style={styles.container}>
      <Profile nama={submittedName} value={submittedCount} />
      <TextInput
        placeholder="Masukkan Nama"
        onChangeText={(text) => setNama(text)}
        value={nama}
        style={[styles.inputteks, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Counter
        Value={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Button title="Submit" onPress={handleSubmit} />
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
  inputteks: {
    borderWidth: 1,
    borderColor: "black",
    width: 200,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  inputFocused: {
    borderWidth: 2, // Perubahan ukuran border
    borderColor: "blue", // Perubahan warna saat fokus
    backgroundColor: "#f0f8ff", // Contoh perubahan warna background
  },
});
