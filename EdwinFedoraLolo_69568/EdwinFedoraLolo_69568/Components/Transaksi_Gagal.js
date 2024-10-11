import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Transaksi_Gagal = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Timeout untuk kembali setelah beberapa detik jika diperlukan
    const timer = setTimeout(() => {
      navigation.navigate("Home"); // Kembali ke halaman Home setelah waktu tertentu
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Gambar checkmark */}
      <Image
        source={require("../assets/Fail.png")} // Sesuaikan path gambar
        style={styles.checkmark}
      />

      {/* Judul transaksi gagal */}
      <Text style={styles.title}>Pembelian Gagal!</Text>

      {/* Informasi pembayaran */}
      <Text style={styles.date}>04 Mei 2023, 21:49 PM</Text>

      {/* Tombol tutup */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Tutup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F72F2F", // Warna biru muda
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  checkmark: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  date: {
    fontSize: 14,
    color: "#999",
    marginBottom: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Transaksi_Gagal;
