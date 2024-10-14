import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "../Components/ThemeContext"; // Import useTheme for dark mode

// Daftar operator berdasarkan prefix
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

// Daftar nominal dan harga pulsa
const pulsaOptions = [
  { nominal: 5000, harga: 6500 },
  { nominal: 10000, harga: 11500 },
  { nominal: 15000, harga: 16500 },
  { nominal: 20000, harga: 21500 },
  { nominal: 25000, harga: 26500 },
  { nominal: 30000, harga: 31500 },
  { nominal: 40000, harga: 41500 },
  { nominal: 50000, harga: 51500 },
  { nominal: 75000, harga: 76500 },
  { nominal: 100000, harga: 101500 },
];

const Pulsa = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme(); // Use dark mode from theme context
  const [selectedTab, setSelectedTab] = React.useState("pulsa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const validatePhoneNumber = (phone) => {
    if (!phone.startsWith("08")) {
      return "Nomor harus diawali dengan 08";
    }
    if (phone.length < 10 || phone.length > 13) {
      return "Nomor harus terdiri dari 10 hingga 13 digit";
    }
    const prefix = phone.substring(0, 4);
    return operatorPrefix.Telkomsel.includes(prefix) ||
      operatorPrefix.Indosat.includes(prefix) ||
      operatorPrefix.XL.includes(prefix) ||
      operatorPrefix.Axis.includes(prefix) ||
      operatorPrefix.Tri.includes(prefix) ||
      operatorPrefix.Smartfren.includes(prefix)
      ? ""
      : "Prefix nomor tidak valid";
  };

  const getOperator = (phone) => {
    const prefix = phone.substring(0, 4);
    for (const [operator, prefixes] of Object.entries(operatorPrefix)) {
      if (prefixes.includes(prefix)) {
        return operator;
      }
    }
    return "Unknown";
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    const validationResult = validatePhoneNumber(text);
    setValidationMessage(validationResult);
    setIsPhoneNumberValid(validationResult === "");
  };

  const handleNominalPress = (nominal, harga) => {
    const operator = getOperator(phoneNumber);
    navigation.navigate("Payment", {
      nominal,
      harga,
      type: "Pulsa",
      phoneNumber,
    });
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Header */}
      <View style={styles.header}>
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
          Pulsa & Paket Data
        </Text>
      </View>

      {/* Input Nomor Ponsel */}
      <View style={styles.inputContainer}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>
          Nomor Ponsel
        </Text>
        <View
          style={[styles.inputWrapper, isDarkMode && styles.darkInputWrapper]}
        >
          <TextInput
            style={[styles.input, isDarkMode && styles.darkText]}
            placeholder="Contoh : 082370323318"
            placeholderTextColor={isDarkMode ? "#ccc" : "#999"}
            keyboardType="numeric"
            maxLength={13}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />
          <TouchableOpacity style={styles.icon}>
            <AntDesign
              name="close"
              size={24}
              color="gray"
              onPress={() => setPhoneNumber("")}
            />
          </TouchableOpacity>
        </View>
        {validationMessage ? (
          <Text style={styles.errorText}>{validationMessage}</Text>
        ) : phoneNumber ? (
          <Text style={styles.validText}>Nomor valid</Text>
        ) : null}
      </View>

      {/* Tab Pilihan */}
      <View
        style={[styles.tabContainer, isDarkMode && styles.darkTabContainer]}
      >
        <TouchableOpacity
          style={[styles.tab, selectedTab === "pulsa" && styles.activeTab]}
          onPress={() => setSelectedTab("pulsa")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "pulsa" && styles.textTab,
              isDarkMode && styles.darkText,
            ]}
          >
            Isi Pulsa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "paket" && styles.activeTab]}
          onPress={() => setSelectedTab("paket")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "paket" && styles.textTab,
              isDarkMode && styles.darkText,
            ]}
          >
            Paket Data
          </Text>
        </TouchableOpacity>
      </View>

      {/* Daftar Nominal Pulsa (Tampilkan jika nomor valid) */}
      {isPhoneNumberValid && selectedTab === "pulsa" && (
        <ScrollView style={styles.nominalContainer}>
          {pulsaOptions.map((option, index) => {
            if (index % 2 === 0) {
              // Setiap dua item dibungkus dalam satu row
              return (
                <View style={styles.nominalRow} key={index}>
                  <TouchableOpacity
                    style={[
                      styles.nominalCard,
                      isDarkMode && styles.darkNominalCard,
                    ]}
                    onPress={() =>
                      handleNominalPress(option.nominal, option.harga)
                    }
                  >
                    <Text
                      style={[
                        styles.nominalText,
                        isDarkMode && styles.darkText,
                      ]}
                    >
                      {option.nominal.toLocaleString("id-ID")}
                    </Text>
                    <Text
                      style={[
                        styles.nominalHarga,
                        isDarkMode && styles.darkText,
                      ]}
                    >
                      Harga
                    </Text>
                    <Text
                      style={[styles.hargaText, isDarkMode && styles.darkText]}
                    >
                      Rp {option.harga.toLocaleString("id-ID")}
                    </Text>
                  </TouchableOpacity>
                  {pulsaOptions[index + 1] && (
                    <TouchableOpacity
                      style={[
                        styles.nominalCard,
                        isDarkMode && styles.darkNominalCard,
                      ]}
                      onPress={() =>
                        handleNominalPress(
                          pulsaOptions[index + 1].nominal,
                          pulsaOptions[index + 1].harga
                        )
                      }
                    >
                      <Text
                        style={[
                          styles.nominalText,
                          isDarkMode && styles.darkText,
                        ]}
                      >
                        {pulsaOptions[index + 1].nominal.toLocaleString(
                          "id-ID"
                        )}
                      </Text>
                      <Text
                        style={[
                          styles.nominalHarga,
                          isDarkMode && styles.darkText,
                        ]}
                      >
                        Harga
                      </Text>
                      <Text
                        style={[
                          styles.hargaText,
                          isDarkMode && styles.darkText,
                        ]}
                      >
                        Rp{" "}
                        {pulsaOptions[index + 1].harga.toLocaleString("id-ID")}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }
          })}
        </ScrollView>
      )}

      {/* Info Panel */}
      {!isPhoneNumberValid && (
        <View
          style={[styles.infoContainer, isDarkMode && styles.darkInfoContainer]}
        >
          <Ionicons
            name="newspaper"
            size={30}
            color={isDarkMode ? "#fff" : "black"} // Adjust icon color for dark mode
            style={styles.infoIcon}
          />
          <View style={styles.infoTextContainer}>
            <Text style={[styles.infoText, isDarkMode && styles.darkText]}>
              Isi ID Pelanggan yang valid untuk menampilkan menu pembelian.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 55,
    backgroundColor: "#c7e2f7", // Light blue background color similar to HomeScreen
  },
  darkContainer: {
    backgroundColor: "#333", // Dark mode background color
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
    color: "#fff", // White text for dark mode
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#16247d", // Dark blue label to match HomeScreen theme
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f9ff", // Light blue background for input
    padding: 10,
    borderRadius: 20, // Rounded corners to match HomeScreen
    borderWidth: 1,
    borderColor: "#b0d4f1", // Blue border color
  },
  darkInputWrapper: {
    backgroundColor: "#444", // Dark mode background for input
    borderColor: "#666", // Dark mode border
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#16247d", // Dark blue input text
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#b0d4f1", // Light blue background for tab section
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
  },
  darkTabContainer: {
    backgroundColor: "#444", // Dark mode background for tab section
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#16247d", // Dark blue active tab background
  },
  textTab: {
    color: "#fff", // White text for active tab
  },
  tabText: {
    color: "#16247d", // Dark blue for inactive tab
    fontSize: 16,
  },
  nominalContainer: {
    marginTop: 10,
  },
  nominalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  nominalCard: {
    backgroundColor: "#f3f9ff", // Light blue background for card
    padding: 20,
    borderRadius: 20, // Rounded corners to match HomeScreen
    borderWidth: 1,
    borderColor: "#b0d4f1", // Light blue border
    flex: 1,
    marginHorizontal: 5,
    height: 120,
    justifyContent: "center",
  },
  darkNominalCard: {
    backgroundColor: "#444", // Dark mode background for nominal card
    borderColor: "#666", // Dark mode border for nominal card
  },
  nominalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#16247d", // Dark blue text
  },
  nominalHarga: {
    marginTop: 5,
    fontSize: 14,
    color: "#16247d", // Matching dark blue for pricing text
  },
  hargaText: {
    fontSize: 14,
    color: "#16247d",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f3f9ff", // Light blue background for info panel
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#b0d4f1", // Light blue border for info box
  },
  darkInfoContainer: {
    backgroundColor: "#444", // Dark mode background for info panel
    borderColor: "#666", // Dark mode border for info panel
  },
  infoIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  infoTextContainer: {
    width: "90%",
  },
  infoText: {
    fontSize: 14,
    color: "#16247d", // Dark blue for informational text
  },
  errorText: {
    color: "#d32f2f", // Red for error messages
    marginTop: 5,
  },
  validText: {
    color: "#388e3c", // Green for valid messages
    marginTop: 5,
  },
});

export default Pulsa;
