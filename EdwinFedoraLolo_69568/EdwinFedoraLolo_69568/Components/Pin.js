import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTransaction } from "./TransactionContext"; // Import useTransaction

const Pin = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { addTransaction } = useTransaction(); // Ambil fungsi addTransaction dari context

  const { phoneNumber, customerId, nominal, harga, type } = route.params || {};
  const [pin, setPin] = useState("");
  const correctPin = "080704";

  const handlePinSubmit = () => {
    if (pin === correctPin) {
      Alert.alert("Transaksi Berhasil", "PIN yang Anda masukkan benar!");

      // Buat objek transaksi baru
      const newTransaction = {
        traceNo: Math.floor(Math.random() * 1000000).toString(),
        phoneNumber: type === "Pulsa" ? phoneNumber : customerId,
        nominal,
        harga,
        operator: type === "Pulsa" ? "Telkomsel" : "PLN",
        date: new Date().toLocaleString(),
        type,
      };

      // Tambahkan transaksi ke dalam context
      addTransaction(newTransaction);

      // Navigasi ke halaman History
      navigation.navigate("History");
    } else {
      Alert.alert("PIN Salah", "Silakan coba lagi.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan PIN</Text>
      <TextInput
        style={styles.pinInput}
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handlePinSubmit}>
        <Text style={styles.buttonText}>Konfirmasi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pinInput: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#16247d",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Pin;
