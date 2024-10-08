import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const History = () => {
  const route = useRoute();

  // Mengambil data yang dikirim dari halaman Pin
  const { phoneNumber, nominal, harga, operator } = route.params || {};

  console.log(phoneNumber, nominal, harga, operator);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History Transaksi</Text>
      <Text>Nomor HP: {phoneNumber}</Text>
      <Text>Operator: {operator}</Text>
      <Text>Nominal: {nominal}</Text>
      <Text>Harga: Rp {harga ? harga.toLocaleString("id-ID") : ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default History;
