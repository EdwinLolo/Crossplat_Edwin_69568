import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../Components/ThemeContext"; // Import useTheme

const HistoryDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { transaction } = route.params || {};
  const { isDarkMode } = useTheme(); // Use the theme context

  console.log(transaction);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color={isDarkMode ? "#fff" : "#16247d"}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, isDarkMode && styles.darkText]}>
          Bukti Void
        </Text>
      </View>

      <View
        style={[
          styles.detailContainer,
          isDarkMode && styles.darkDetailContainer,
        ]}
      >
        <View style={styles.HistoryLogo}>
          <Image
            style={styles.UnionImage}
            source={require("../assets/union.png")} // Replace with your image URL or local image
          />
          <Text style={[styles.UnionName, isDarkMode && styles.darkText]}>
            Union-X
          </Text>
        </View>

        <View style={styles.detailContainers}>
          <Text style={[styles.detailLabel, isDarkMode && styles.darkText]}>
            Status:
          </Text>
          <Text
            style={[
              { color: transaction.status === "Berhasil" ? "green" : "red" },
              styles.detailValue,
              isDarkMode && styles.darkText,
            ]}
          >
            {transaction.status}
          </Text>
        </View>

        <View style={styles.detailContainers}>
          <Text style={[styles.detailLabel, isDarkMode && styles.darkText]}>
            Trace No:
          </Text>
          <Text style={[styles.detailValue, isDarkMode && styles.darkText]}>
            {transaction.traceNo}
          </Text>
        </View>

        <View style={styles.detailContainers}>
          <Text style={[styles.detailLabel, isDarkMode && styles.darkText]}>
            Tanggal:
          </Text>
          <Text style={[styles.detailValue, isDarkMode && styles.darkText]}>
            {transaction.date}
          </Text>
        </View>

        <View style={styles.detailContainers}>
          <Text style={[styles.detailLabel, isDarkMode && styles.darkText]}>
            Nominal:
          </Text>
          <Text style={[styles.detailValue, isDarkMode && styles.darkText]}>
            {transaction.nominal}
          </Text>
        </View>

        <View style={styles.detailContainers}>
          <Text style={[styles.detailLabel, isDarkMode && styles.darkText]}>
            Jenis Transaksi:
          </Text>
          <Text style={[styles.detailValue, isDarkMode && styles.darkText]}>
            {transaction.type}
          </Text>
        </View>

        <View style={styles.detailContainers}>
          <Text style={[styles.detailLabel, isDarkMode && styles.darkText]}>
            {transaction.type === "Pulsa"
              ? "Phone Number"
              : transaction.type === "Listrik"
              ? "ID Pelanggan"
              : "BPJS ID"}
            :
          </Text>
          <Text style={[styles.detailValue, isDarkMode && styles.darkText]}>
            {transaction.phoneNumber}
          </Text>
        </View>

        <View style={styles.detailContainers}>
          <Text style={[styles.detailLabel, isDarkMode && styles.darkText]}>
            Total:
          </Text>
          <Text style={[styles.detailValue, isDarkMode && styles.darkText]}>
            Rp{" "}
            {transaction.harga
              ? transaction.harga.toLocaleString("id-ID")
              : "N/A"}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, isDarkMode && styles.darkButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Selesai</Text>
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
  darkContainer: {
    backgroundColor: "#333",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Untuk membuat teks di tengah
    height: 60, // Sesuaikan dengan kebutuhan tinggi header
  },
  backButton: {
    position: "absolute", // Pastikan back button berada di kiri
    left: 15, // Atur jarak kiri dari tepi layar
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#16247d", // Dark blue header text
  },
  darkText: {
    color: "#fff",
  },
  detailContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  darkDetailContainer: {
    backgroundColor: "#444",
  },
  HistoryLogo: {
    alignItems: "center",
  },
  UnionImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  UnionName: {
    marginTop: -10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#16247d",
  },
  detailContainers: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginTop: 10,
    borderColor: "#f4f4f4",
    borderBottomWidth: 1,
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
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    width: "100%",
  },
  darkButton: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HistoryDetail;
