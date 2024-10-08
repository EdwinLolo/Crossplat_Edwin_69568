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

// Format tanggal lahir DDMMYY yang diharuskan (ganti dengan tanggal lahir kalian)
const correctPin = "080704";

const Pin = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Ambil parameter dari halaman sebelumnya

  const [pin, setPin] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [pinError, setPinError] = useState(false);

  // Data dari halaman sebelumnya (yang dikirim saat navigasi)
  const { phoneNumber, nominal, harga, operator } = route.params || {}; // Pastikan 'route.params' ada atau undefined

  const handlePinSubmit = () => {
    if (pin === correctPin) {
      Alert.alert("Transaksi Berhasil", "PIN yang Anda masukkan benar!");

      // Navigasi ke halaman Riwayat dengan mengirim data props
      navigation.navigate("Riwayat", {
        phoneNumber: phoneNumber,
        nominal: nominal,
        harga: harga,
        operator: operator,
      });
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setPinError(true);

      if (newAttempts >= 3) {
        Alert.alert(
          "Transaksi Gagal",
          "Anda telah mencapai batas kesalahan PIN. Transaksi berstatus gagal."
        );
        navigation.navigate("Riwayat"); // Ganti halaman tujuan ketika gagal
      } else {
        Alert.alert(
          "PIN Salah",
          `PIN yang Anda masukkan salah. Anda memiliki ${
            3 - newAttempts
          } percobaan lagi.`
        );
      }

      setPin(""); // Reset PIN input field
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan PIN</Text>
      <TextInput
        style={[styles.pinInput, pinError && { borderColor: "red" }]}
        value={pin}
        onChangeText={(text) => setPin(text)}
        keyboardType="numeric"
        maxLength={6}
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
