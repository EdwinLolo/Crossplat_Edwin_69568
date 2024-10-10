import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
  const { nominal, harga, phoneNumber, customerId, type, bpjsNumber } =
    route.params;

  // Ambil prefix dari nomor telepon (4 digit pertama)
  const prefix = phoneNumber?.substring(0, 4);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Konfirmasi Pembayaran</Text>
      </View>
      <View style={styles.paymentInfo}>
        {type === "Pulsa" ? (
          <>
            <Text style={styles.label}>Phone Number:</Text>
            <Text style={styles.value}>{phoneNumber}</Text>
          </>
        ) : type === "Listrik" ? (
          <>
            <Text style={styles.label}>ID Pelanggan:</Text>
            <Text style={styles.value}>{customerId}</Text>
          </>
        ) : (
          <>
            <Text style={styles.label}>BPJS NUMBER:</Text>
            <Text style={styles.value}>{bpjsNumber}</Text>
          </>
        )}
        <Text style={styles.label}>Nominal:</Text>
        <Text style={styles.value}>{nominal.toLocaleString("id-ID")}</Text>
        <Text style={styles.label}>Total:</Text>
        <Text style={styles.value}>Rp {harga.toLocaleString("id-ID")}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Pin", {
            nominal,
            harga,
            phoneNumber,
            customerId,
            type,
            bpjsNumber,
            operator: prefix ? getOperatorIcon(prefix) : null,
          })
        }
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
    flexDirection: "column",
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
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
