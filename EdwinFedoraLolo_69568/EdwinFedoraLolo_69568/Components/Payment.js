import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../Components/ThemeContext"; // Import useTheme for dark mode

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
    );
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
    );
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
    );
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
    );
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
    );
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
    );
  } else {
    return <Ionicons name="ios-cellular" size={40} color="#000" />; // Default icon
  }
};

// Fungsi untuk mendapatkan nama operator berdasarkan prefix nomor telepon
const getOperatorName = (prefix) => {
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
    return "Unknown Operator";
  }
};

const Payment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { isDarkMode } = useTheme(); // Access dark mode state

  const { nominal, harga, phoneNumber, customerId, type, bpjsNumber } =
    route.params;

  const prefix = phoneNumber?.substring(0, 4);
  const operatorIcon = getOperatorIcon(prefix, phoneNumber);
  const operatorName = getOperatorName(prefix);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={[styles.header, isDarkMode && styles.darkHeader]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color={isDarkMode ? "#fff" : "black"} // Adjust icon color for dark mode
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, isDarkMode && styles.darkText]}>
          Konfirmasi Pembayaran
        </Text>
      </View>

      <View>
        {type === "Pulsa" ? (
          <View
            style={[
              styles.infoContainer,
              isDarkMode && styles.darkInfoContainer,
            ]}
          >
            {operatorIcon}
            <Text style={[styles.amount, isDarkMode && styles.darkText]}>
              Rp {harga.toLocaleString("id-ID")}
            </Text>
          </View>
        ) : type === "Listrik" ? (
          <View
            style={[
              styles.infoContainer,
              isDarkMode && styles.darkInfoContainer,
            ]}
          >
            <Avatar.Icon size={40} icon="cellphone" />
            <View style={styles.infoTextContainer}>
              <Text style={[styles.title, isDarkMode && styles.darkText]}>
                Token Listrik
              </Text>
              <Text style={[styles.subtitle, isDarkMode && styles.darkText]}>
                {customerId}
              </Text>
            </View>
            <Text style={[styles.amount, isDarkMode && styles.darkText]}>
              Rp {harga.toLocaleString("id-ID")}
            </Text>
          </View>
        ) : (
          <View
            style={[
              styles.infoContainer,
              isDarkMode && styles.darkInfoContainer,
            ]}
          >
            <Avatar.Icon size={40} icon="cellphone" />
            <View style={styles.infoTextContainer}>
              <Text style={[styles.title, isDarkMode && styles.darkText]}>
                BPJS
              </Text>
              <Text style={[styles.subtitle, isDarkMode && styles.darkText]}>
                {customerId}
              </Text>
            </View>
            <Text style={[styles.amount, isDarkMode && styles.darkText]}>
              Rp {harga.toLocaleString("id-ID")}
            </Text>
          </View>
        )}
      </View>

      {/* Metode pembayaran */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
          Metode Pembayaran
        </Text>
        <View
          style={[styles.paymentMethod, isDarkMode && styles.darkPaymentMethod]}
        >
          <Avatar.Icon size={40} icon="wallet" />
          <View style={styles.paymentTextContainer}>
            <Text style={[styles.title, isDarkMode && styles.darkText]}>
              Saldo saya
            </Text>
            <Text style={[styles.subtitle, isDarkMode && styles.darkText]}>
              Rp 900.000
            </Text>
          </View>
          <Text style={[styles.amount, isDarkMode && styles.darkText]}>
            Rp {harga.toLocaleString("id-ID")}
          </Text>
        </View>
      </View>

      {/* Detail Pembayaran */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
          Detail Pembayaran
        </Text>
        <View style={styles.detailRow}>
          <Text style={[styles.detailLabel, isDarkMode && styles.darkText]}>
            Harga Voucher
          </Text>
          <Text style={[styles.detailValue, isDarkMode && styles.darkText]}>
            Rp {harga.toLocaleString("id-ID")}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={[styles.detailLabel, isDarkMode && styles.darkText]}>
            Biaya Transaksi
          </Text>
          <Text style={[styles.detailValue, isDarkMode && styles.darkText]}>
            Rp 0
          </Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={[styles.totalLabel, isDarkMode && styles.darkText]}>
            Total Pembayaran
          </Text>
          <Text style={[styles.totalValue, isDarkMode && styles.darkText]}>
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
        style={[styles.button, isDarkMode && styles.darkButton]}
      >
        <Text style={[styles.buttonText, isDarkMode && styles.darkButtonText]}>
          Konfirmasi
        </Text>
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
  darkContainer: {
    backgroundColor: "#333", // Dark mode background color
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 10,
  },
  darkHeader: {
    borderBottomColor: "#666", // Dark mode border color for header
  },
  backButton: {
    position: "absolute",
    left: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  darkText: {
    color: "#fff", // White text for dark mode
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  darkInfoContainer: {
    backgroundColor: "#444", // Dark mode background for info container
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
  darkPaymentMethod: {
    backgroundColor: "#444", // Dark mode background for payment method
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
  darkButton: {
    backgroundColor: "#555", // Dark mode background for button
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  darkButtonText: {
    color: "#fff", // White text for dark mode button
  },
});

export default Payment;
