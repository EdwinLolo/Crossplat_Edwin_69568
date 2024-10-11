import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-paper";
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
const getOperatorIcon = (prefix, phoneNumber) => {
  if (operatorPrefix.Telkomsel.includes(prefix)) {
    return (
      <>
        <Image
          source={require("../assets/telkomsel.jpeg")} // Example banner, use your actual asset
          style={{ width: 40, height: 40, borderRadius: 15 }}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.title}>Telkomsel</Text>
          <Text style={styles.subtitle}>{phoneNumber}</Text>
        </View>
      </>
    ); // Ikon Telkomsel (sim merah)
  } else if (operatorPrefix.Indosat.includes(prefix)) {
    return (
      <>
        <Image
          source={require("../assets/indosat.png")} // Example banner, use your actual asset
          style={{ width: 40, height: 40, borderRadius: 15 }}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.title}>Indosat</Text>
          <Text style={styles.subtitle}>{phoneNumber}</Text>
        </View>
      </>
    ); // Ikon Indosat (sim kuning)
  } else if (operatorPrefix.XL.includes(prefix)) {
    return (
      <>
        <Image
          source={require("../assets/XL.png")} // Example banner, use your actual asset
          style={{ width: 40, height: 40, borderRadius: 15 }}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.title}>XL</Text>
          <Text style={styles.subtitle}>{phoneNumber}</Text>
        </View>
      </>
    ); // Ikon XL (sim biru)
  } else if (operatorPrefix.Axis.includes(prefix)) {
    return (
      <>
        <Image
          source={require("../assets/Axis.png")} // Example banner, use your actual asset
          style={{ width: 40, height: 40, borderRadius: 15 }}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.title}>Axis</Text>
          <Text style={styles.subtitle}>{phoneNumber}</Text>
        </View>
      </>
    ); // Ikon Axis (ungu)
  } else if (operatorPrefix.Tri.includes(prefix)) {
    return (
      <>
        <Image
          source={require("../assets/Tri.jpeg")} // Example banner, use your actual asset
          style={{ width: 40, height: 40, borderRadius: 15 }}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.title}>Tri</Text>
          <Text style={styles.subtitle}>{phoneNumber}</Text>
        </View>
      </>
    ); // Ikon Tri (biru muda)
  } else if (operatorPrefix.Smartfren.includes(prefix)) {
    return (
      <>
        <Image
          source={require("../assets/smartfren.jpg")} // Example banner, use your actual asset
          style={{ width: 40, height: 40, borderRadius: 15 }}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.title}>Smartfren</Text>
          <Text style={styles.subtitle}>{phoneNumber}</Text>
        </View>
      </>
    ); // Ikon Smartfren (oranye)
  } else {
    return <Ionicons name="ios-cellular" size={40} color="#000" />; // Default icon
  }
};

// Fungsi untuk mendapatkan nama operator berdasarkan prefix nomor telepon
const getOperatorName = (prefix) => {
  // Cek operator berdasarkan prefix
  if (operatorPrefix.Telkomsel.includes(prefix)) {
    return "Telkomsel";
  } else if (operatorPrefix.Indosat.includes(prefix)) {
    return "Indosat";
  } else if (operatorPrefix.XL.includes(prefix)) {
    return "XL";
  } else if (operatorPrefix.Axis.includes(prefix)) {
    return "Axis";
  } else if (operatorPrefix.Tri.includes(prefix)) {
    return "Tri";
  } else if (operatorPrefix.Smartfren.includes(prefix)) {
    return "Smartfren";
  } else {
    return "Unknown Operator"; // Jika tidak ditemukan
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

  // Dapatkan ikon operator
  const operatorIcon = getOperatorIcon(prefix, phoneNumber);
  const operatorName = getOperatorName(prefix);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Konfirmasi Pembayaran</Text>
      </View>

      {/* Informasi Operator dan Nomor */}
      <View>
        {type === "Pulsa" ? (
          <View style={styles.infoContainer}>
            {operatorIcon}
            <Text style={styles.amount}>
              Rp {harga.toLocaleString("id-ID")}
            </Text>
          </View>
        ) : type === "Listrik" ? (
          <View style={styles.infoContainer}>
            <Avatar.Icon size={40} icon="cellphone" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.title}>Token Listrik</Text>
              <Text style={styles.subtitle}>{customerId}</Text>
            </View>
            <Text style={styles.amount}>
              Rp {harga.toLocaleString("id-ID")}
            </Text>
          </View>
        ) : (
          <View style={styles.infoContainer}>
            <Avatar.Icon size={40} icon="cellphone" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.title}>BPJS</Text>
              <Text style={styles.subtitle}>{customerId}</Text>
            </View>
            <Text style={styles.amount}>
              Rp {harga.toLocaleString("id-ID")}
            </Text>
          </View>
        )}
      </View>

      {/* Metode pembayaran */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
        <View style={styles.paymentMethod}>
          <Avatar.Icon size={40} icon="wallet" />
          <View style={styles.paymentTextContainer}>
            <Text style={styles.title}>Saldo saya</Text>
            <Text style={styles.subtitle}>Rp 900.000</Text>
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
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Pembayaran</Text>
          <Text style={styles.totalValue}>
            Rp {harga.toLocaleString("id-ID")}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Pin", {
            nominal,
            harga,
            phoneNumber,
            customerId,
            type,
            bpjsNumber,
            operator: prefix ? operatorName : null,
          })
        }
        style={styles.button}
      >
        <Text>Konfirmasi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Untuk membuat teks di tengah
    height: 60, // Sesuaikan dengan kebutuhan tinggi header
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 10,
  },
  backButton: {
    position: "absolute", // Pastikan back button berada di kiri
    left: 15, // Atur jarak kiri dari tepi layar
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#777",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
  },
  paymentTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  detailLabel: {
    color: "#777",
  },
  totalLabel: {
    fontWeight: "bold",
  },
  totalValue: {
    fontWeight: "bold",
  },
  button: {
    // marginTop: 20,
    // padding: 10,
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

export default Payment;
