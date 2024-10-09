// History.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTransaction } from "../Components/TransactionContext"; // Import useTransaction

const History = () => {
  const navigation = useNavigation();
  const { history } = useTransaction(); // Ambil data riwayat transaksi dari context

  const handlePress = (transaction) => {
    navigation.navigate("HistoryDetail", { transaction });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History Transaksi</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.traceNo.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.transactionContainer}>
              <Text>Trace No: {item.traceNo}</Text>
              <Text>Tanggal: {item.date}</Text>
              <Text>Jenis Transaksi: {item.type}</Text>
              <Text>
                {item.type === "Pulsa" ? "Phone Number" : "ID Pelanggan"}:{" "}
                {item.phoneNumber}
              </Text>
              <Text>Total: Rp {item.harga.toLocaleString("id-ID")}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 80,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  transactionContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default History;
