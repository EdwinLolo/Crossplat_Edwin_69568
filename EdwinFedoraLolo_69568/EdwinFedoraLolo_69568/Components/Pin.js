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

  const {
    phoneNumber,
    customerId,
    nominal,
    harga,
    type,
    operator,
    bpjsNumber,
  } = route.params || {};
  const [pin, setPin] = useState("");
  const [attempts, setAttempts] = useState(0); // State untuk melacak percobaan PIN
  const maxAttempts = 3; // Batas maksimal percobaan
  const correctPin = "080704"; // PIN yang benar

  const handlePinSubmit = () => {
    if (pin === correctPin) {
      Alert.alert("Transaksi Berhasil", "PIN yang Anda masukkan benar!");

      // Buat objek transaksi baru
      const newTransaction = {
        traceNo: Math.floor(Math.random() * 1000000).toString(),
        phoneNumber:
          type === "Pulsa"
            ? phoneNumber
            : type === "PLN"
            ? customerId
            : bpjsNumber,
        nominal,
        harga,
        operator: type === "Pulsa" ? operator : type === "PLN" ? "PLN" : "BPJS",
        date: new Date().toLocaleString(),
        type,
        status: "Berhasil",
      };

      // Tambahkan transaksi ke dalam context
      addTransaction(newTransaction);

      // Navigasi ke halaman History
      navigation.navigate("History");
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      // Jika jumlah percobaan sudah mencapai batas maksimal
      if (newAttempts >= maxAttempts) {
        Alert.alert(
          "PIN Salah",
          "Anda telah melebihi batas maksimal percobaan."
        );

        // Transaksi gagal karena melebihi batas maksimal
        const transaction = {
          traceNo: Date.now().toString(), // Atau gunakan UUID sebagai nomor transaksi unik
          date: new Date().toLocaleString(),
          nominal,
          harga,
          phoneNumber: phoneNumber || "", // Bisa jadi null jika bukan transaksi pulsa
          customerId: customerId || "", // Bisa jadi null jika bukan transaksi listrik
          type,
          status: "Gagal", // Set status transaksi gagal
        };

        // Tambahkan transaksi gagal ke context
        addTransaction(transaction);

        // Navigasi ke halaman History
        navigation.navigate("History");
      } else {
        Alert.alert(
          "PIN Salah",
          `PIN yang Anda masukkan salah. Anda memiliki ${
            maxAttempts - newAttempts
          } kesempatan lagi.`
        );
      }
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
        editable={attempts < maxAttempts} // Disable input jika sudah mencapai batas maksimal
      />
      <TouchableOpacity
        style={[
          styles.button,
          attempts >= maxAttempts && { backgroundColor: "gray" },
        ]}
        onPress={handlePinSubmit}
        disabled={attempts >= maxAttempts} // Disable tombol jika sudah mencapai batas maksimal
      >
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
