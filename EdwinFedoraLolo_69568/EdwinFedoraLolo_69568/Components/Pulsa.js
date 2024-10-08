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
    navigation.navigate("Payment", { nominal, harga, phoneNumber, operator });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pulsa & Paket Data</Text>
      </View>

      {/* Input Nomor Ponsel */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nomor Ponsel</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Contoh : 082370323318"
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
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "pulsa" && styles.activeTab]}
          onPress={() => setSelectedTab("pulsa")}
        >
          <Text
            style={[styles.tabText, selectedTab === "pulsa" && styles.textTab]}
          >
            Isi Pulsa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "paket" && styles.activeTab]}
          onPress={() => setSelectedTab("paket")}
        >
          <Text
            style={[styles.tabText, selectedTab === "paket" && styles.textTab]}
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
                    style={styles.nominalCard}
                    onPress={() =>
                      handleNominalPress(option.nominal, option.harga)
                    }
                  >
                    <Text style={styles.nominalText}>
                      {option.nominal.toLocaleString("id-ID")}
                    </Text>
                    <Text style={styles.nominalHarga}>Harga</Text>
                    <Text style={styles.hargaText}>
                      Rp {option.harga.toLocaleString("id-ID")}
                    </Text>
                  </TouchableOpacity>
                  {pulsaOptions[index + 1] && (
                    <TouchableOpacity
                      style={styles.nominalCard}
                      onPress={() =>
                        handleNominalPress(
                          pulsaOptions[index + 1].nominal,
                          pulsaOptions[index + 1].harga
                        )
                      }
                    >
                      <Text style={styles.nominalText}>
                        {pulsaOptions[index + 1].nominal.toLocaleString(
                          "id-ID"
                        )}
                      </Text>
                      <Text style={styles.nominalHarga}>Harga</Text>
                      <Text style={styles.hargaText}>
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
        <View style={styles.infoContainer}>
          <Ionicons
            name="newspaper"
            size={30}
            color="black"
            style={styles.infoIcon}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
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
    paddingTop: 60,
    backgroundColor: "#f4f4f4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 80,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  icon: {
    paddingHorizontal: 10,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#16247d",
  },
  textTab: {
    color: "#fff",
  },
  tabText: {
    color: "#333",
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
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    flex: 1,
    marginHorizontal: 5,
    height: 120,
    justifyContent: "center",
  },
  nominalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  nominalHarga: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
  hargaText: {
    fontSize: 14,
    color: "#000",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
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
    color: "#666",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
  validText: {
    color: "green",
    marginTop: 5,
  },
});

export default Pulsa;
