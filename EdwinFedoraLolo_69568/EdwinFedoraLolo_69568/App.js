import { StyleSheet, View, TextInput, Button } from "react-native";
import Counter from "./Components/Counter";
import { useState } from "react";
import Profile from "./Components/Profile";

export default function App() {
  const [count, setCount] = useState(0);
  const [nama, setNama] = useState("");
  const [submittedName, setSubmittedName] = useState(""); // State untuk menyimpan nama yang disubmit
  const [submittedCount, setSubmittedCount] = useState(0); // State untuk menyimpan count yang disubmit
  const [isFocused, setIsFocused] = useState(false); // state untuk mengatur focus

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleSubmit = () => {
    setSubmittedName(nama); // Set nama yang disubmit
    setSubmittedCount(count); // Set count yang disubmit
  };
  return (
    <View style={styles.container}>
      <Profile nama={submittedName} value={submittedCount} />
      <TextInput
        placeholder="Masukkan Nama"
        onChangeText={(text) => setNama(text)}
        value={nama}
        style={[styles.inputteks, isFocused && styles.inputFocused]} // Mengubah gaya berdasarkan focus
        onFocus={() => setIsFocused(true)} // Set focus jadi true ketika aktif
        onBlur={() => setIsFocused(false)} // Set focus jadi false ketika tidak aktif
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
