import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Transaksi_Berhasil = () => {
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
        source={require("../assets/Check.png")} // Sesuaikan path gambar
        style={styles.checkmark}
      />

      {/* Judul transaksi berhasil */}
      <Text style={styles.title}>Pembelian Berhasil!</Text>

      {/* Informasi pembayaran */}
      <Text style={styles.amount}>Pembayaran sebesar</Text>
      <Text style={styles.price}>Rp 6.500</Text>
      <Text style={styles.date}>04 Mei 2023, 21:49 PM</Text>

      {/* Informasi saldo */}
      <Text style={styles.balance}>
        Saldo kamu sudah ditarik, sisa saldo kamu sekarang Rp 983.500.
      </Text>

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
    backgroundColor: "#B7E0FF", // Warna biru muda
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
    color: "#333",
  },
  amount: {
    fontSize: 16,
    color: "#555",
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#333",
  },
  date: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  balance: {
    fontSize: 14,
    textAlign: "center",
    color: "#777",
    marginBottom: 30,
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

export default Transaksi_Berhasil;
