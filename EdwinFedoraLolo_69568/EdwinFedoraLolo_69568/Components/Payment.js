import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Daftar prefix untuk setiap operator
const operatorPrefix = {
  Telkomsel: [
    "0811",
    "0812",
    "0813",
    "0821",
    "0822",
    "0823",
    "0851",
    "0852",
    "0853",
  ],
  Indosat: ["0814", "0815", "0816", "0855", "0856", "0857", "0858"],
  XL: ["0817", "0818", "0819", "0859", "0877", "0878"],
  Axis: ["0831", "0832", "0833", "0838"],
  Tri: ["0895", "0896", "0897", "0898", "0899"],
  Smartfren: [
    "0881",
    "0882",
    "0883",
    "0884",
    "0885",
    "0886",
    "0887",
    "0888",
    "0889",
  ],
};

// Fungsi untuk mendapatkan ikon operator berdasarkan prefix nomor telepon
const getOperatorIcon = (prefix) => {
  if (operatorPrefix.Telkomsel.includes(prefix)) {
    return (
      <Image
        source={require("../assets/telkomsel.jpeg")} // Example banner, use your actual asset
        style={styles.operatorIcon}
      />
    ); // Ikon Telkomsel (sim merah)
  } else if (operatorPrefix.Indosat.includes(prefix)) {
    return (
      <Image
        source={require("../assets/indosat.png")} // Example banner, use your actual asset
        style={styles.operatorIcon}
      />
    ); // Ikon Indosat (sim kuning)
  } else if (operatorPrefix.XL.includes(prefix)) {
    return (
      <Image
        source={require("../assets/XL.png")} // Example banner, use your actual asset
        style={styles.operatorIcon}
      />
    ); // Ikon XL (sim biru)
  } else if (operatorPrefix.Axis.includes(prefix)) {
    return (
      <Image
        source={require("../assets/Axis.png")} // Example banner, use your actual asset
        style={styles.operatorIcon}
      />
    ); // Ikon Axis (ungu)
  } else if (operatorPrefix.Tri.includes(prefix)) {
    return (
      <Image
        source={require("../assets/Tri.jpeg")} // Example banner, use your actual asset
        style={styles.operatorIcon}
      />
    ); // Ikon Tri (biru muda)
  } else if (operatorPrefix.Smartfren.includes(prefix)) {
    return (
      <Image
        source={require("../assets/smartfren.jpg")} // Example banner, use your actual asset
        style={styles.operatorIcon}
      />
    ); // Ikon Smartfren (oranye)
  } else {
    return <Ionicons name="ios-cellular" size={32} color="#000" />; // Default icon
  }
};

const Payment = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Data yang dikirim dari halaman sebelumnya
  const { nominal, harga, phoneNumber, operator } = route.params;

  // Ambil prefix dari nomor telepon (4 digit pertama)
  const prefix = phoneNumber.substring(0, 4);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Konfirmasi Pembayaran</Text>
      </View>

      {/* Informasi Operator dan Nomor */}
      <View style={styles.paymentInfo}>
        {/* Ikon Operator */}
        {getOperatorIcon(prefix)}
        <View style={styles.operatorInfo}>
          <Text style={styles.operator}>{operator}</Text>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
        <Text style={styles.amount}>Rp {harga.toLocaleString("id-ID")}</Text>
      </View>

      {/* Metode Pembayaran */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
        <View style={styles.paymentMethod}>
          <Ionicons name="wallet-outline" size={24} color="#000" />
          <View style={styles.methodInfo}>
            <Text style={styles.methodName}>Saldo saya</Text>
            <Text style={styles.methodBalance}>Rp 900.000</Text>
          </View>
          <Text style={styles.amount}>Rp {harga.toLocaleString("id-ID")}</Text>
        </View>
      </View>

      {/* Detail Pembayaran */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detail Pembayaran</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Harga Voucher</Text>
          <Text style={styles.detailValue}>
            Rp {harga.toLocaleString("id-ID")}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Biaya Transaksi</Text>
          <Text style={styles.detailValue}>Rp 0</Text>
        </View>
        <View style={styles.spacer}></View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Total Pembayaran</Text>
          <Text style={styles.detailValue}>
            Rp {harga.toLocaleString("id-ID")}
          </Text>
        </View>
      </View>

      {/* Tombol Konfirmasi */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Pin")} // Arahkan ke halaman PIN Input
      >
        <Text style={styles.buttonText}>Konfirmasi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f4f4f4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 60,
  },
  operatorIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  paymentInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 15,
  },
  operatorInfo: {
    flex: 1,
  },
  operator: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phoneNumber: {
    fontSize: 14,
    color: "#666",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  methodInfo: {
    flex: 1,
    marginLeft: 10,
  },
  methodName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  methodBalance: {
    fontSize: 14,
    color: "#666",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: "#666",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  spacer: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
  button: {
    position: "absolute",
    bottom: 20,
    left: 20,
    width: "100%",
    backgroundColor: "#16247d",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Payment;
