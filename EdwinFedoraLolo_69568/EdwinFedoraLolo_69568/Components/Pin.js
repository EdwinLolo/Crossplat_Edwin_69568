import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
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

  console.log(route.params);

  const [pin, setPin] = useState(""); // PIN yang dimasukkan
  const [attempts, setAttempts] = useState(0); // State untuk melacak percobaan PIN
  const maxAttempts = 3; // Batas maksimal percobaan
  const correctPin = "080704"; // PIN yang benar
  const [isError, setIsError] = useState(false); // Untuk menandai jika PIN salah

  const handlePinSubmit = () => {
    if (pin === correctPin) {
      // Alert.alert("Transaksi Berhasil", "PIN yang Anda masukkan benar!");

      // Buat objek transaksi baru
      const newTransaction = {
        traceNo: Math.floor(Math.random() * 1000000).toString(),
        phoneNumber:
          type === "Pulsa"
            ? phoneNumber
            : type === "Listrik"
            ? customerId
            : bpjsNumber,
        nominal,
        harga,
        operator:
          type === "Pulsa" ? operator : type === "Listrik" ? "Listrik" : "BPJS",
        date: new Date().toLocaleString(),
        type,
        status: "Berhasil",
      };

      // Tambahkan transaksi ke dalam context
      addTransaction(newTransaction);

      // Navigasi ke halaman History
      navigation.navigate("TransaksiBerhasil");
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setIsError(true);

      // Jika jumlah percobaan sudah mencapai batas maksimal
      if (newAttempts >= maxAttempts) {
        Alert.alert(
          "PIN Salah",
          "Anda telah melebihi batas maksimal percobaan."
        );

        // Transaksi gagal karena melebihi batas maksimal
        const transaction = {
          traceNo: Math.floor(Math.random() * 1000000).toString(),
          phoneNumber:
            type === "Pulsa"
              ? phoneNumber
              : type === "Listrik"
              ? customerId
              : bpjsNumber,
          nominal,
          harga,
          operator:
            type === "Pulsa"
              ? operator
              : type === "Listrik"
              ? "Listrik"
              : "BPJS",
          date: new Date().toLocaleString(),
          type,
          status: "Gagal",
        };

        // Tambahkan transaksi gagal ke context
        addTransaction(transaction);

        // Navigasi ke halaman History
        navigation.navigate("TransaksiGagal");
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

  const renderPinDots = () => {
    const pinLength = pin.length;
    const dots = [];

    // Membuat dot berdasarkan jumlah input PIN yang sudah dimasukkan
    for (let i = 0; i < 6; i++) {
      dots.push(
        <View
          key={i}
          style={[
            styles.dot,
            {
              backgroundColor:
                pinLength > i
                  ? isError
                    ? "red" // Jika salah, dot berwarna merah
                    : "blue" // Jika benar atau sedang mengetik, dot berwarna biru
                  : "lightgray", // Dot yang belum terisi
            },
          ]}
        />
      );
    }

    return <View style={styles.dotsContainer}>{dots}</View>;
  };

  const handleInput = (value) => {
    if (pin.length < 6) {
      setPin(pin + value);
      setIsError(false); // Reset error saat pengguna mulai mengetik ulang
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan PIN Anda</Text>
      {isError ? (
        <Text style={styles.errorText}>PIN salah. Silakan coba lagi.</Text>
      ) : (
        <Text style={styles.subtitle}>Masukkan PIN aplikasi Anda.</Text>
      )}
      {renderPinDots()}

      {/* Input PIN menggunakan keyboard numeric */}
      <TextInput
        style={styles.hiddenInput} // Input disembunyikan menggunakan opacity
        value={pin}
        onChangeText={setPin}
        maxLength={6} // Batas 6 digit PIN
        keyboardType="numeric" // Tampilkan keyboard numeric
        autoFocus // Fokus otomatis ke input saat layar muncul
        secureTextEntry // Menyembunyikan angka yang dimasukkan
      />

      <View style={styles.buttonRow}>
        {/* <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Hapus</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[styles.button, pin.length < 6 && { backgroundColor: "gray" }]}
          onPress={handlePinSubmit}
          disabled={pin.length < 6} // Disable tombol jika PIN belum 6 digit
        >
          <Text style={styles.buttonText}>Konfirmasi</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  errorText: {
    fontSize: 16,
    marginBottom: 20,
    color: "red",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    marginHorizontal: 5,
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0, // Menyembunyikan input secara visual
    height: 40,
    width: 200,
  },
  buttonRow: {
    flexDirection: "row",
    // justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: "#16247d",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Pin;
