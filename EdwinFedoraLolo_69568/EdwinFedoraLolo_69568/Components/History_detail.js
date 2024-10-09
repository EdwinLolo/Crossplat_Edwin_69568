// History_detail.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const HistoryDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { transaction } = route.params || {};

  console.log(transaction);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bukti Transaksi</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Trace No:</Text>
        <Text style={styles.detailValue}>{transaction.traceNo}</Text>

        <Text style={styles.detailLabel}>Tanggal:</Text>
        <Text style={styles.detailValue}>{transaction.date}</Text>

        <Text style={styles.detailLabel}>Nominal:</Text>
        <Text style={styles.detailValue}>{transaction.nominal}</Text>

        <Text style={styles.detailLabel}>Phone Number:</Text>
        <Text style={styles.detailValue}>{transaction.phoneNumber}</Text>

        <Text style={styles.detailLabel}>Jenis Transaksi:</Text>
        <Text style={styles.detailValue}>{transaction.type}</Text>

        <Text style={styles.detailLabel}>Total:</Text>
        <Text style={styles.detailValue}>
          Rp{" "}
          {transaction.harga
            ? transaction.harga.toLocaleString("id-ID")
            : "N/A"}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  detailValue: {
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#16247d",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HistoryDetail;
