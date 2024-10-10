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

// Daftar nominal dan harga token listrik
const listrikOptions = [
  { nominal: 20000, harga: 21500 },
  { nominal: 25000, harga: 26500 },
  { nominal: 35000, harga: 36500 },
  { nominal: 50000, harga: 52500 },
  { nominal: 65000, harga: 67500 },
  { nominal: 80000, harga: 82500 },
  { nominal: 100000, harga: 102500 },
  { nominal: 200000, harga: 202500 },
  { nominal: 500000, harga: 502500 },
  { nominal: 1000000, harga: 1002500 },
];

const Listrik = () => {
  const navigation = useNavigation();
  const [customerId, setCustomerId] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [isCustomerIdValid, setIsCustomerIdValid] = useState(false);

  const validateCustomerId = (id) => {
    if (id.startsWith("0")) {
      return "ID pelanggan tidak boleh diawali dengan 0";
    }
    if (id.length > 12) {
      return "ID pelanggan tidak boleh lebih dari 12 digit";
    }
    return "";
  };

  const handleCustomerIdChange = (text) => {
    setCustomerId(text);
    const validationResult = validateCustomerId(text);
    setValidationMessage(validationResult);
    setIsCustomerIdValid(validationResult === "" && text.length <= 12);
  };

  const handleNominalPress = (nominal, harga) => {
    navigation.navigate("Payment", {
      nominal,
      harga,
      customerId, // Pass the customer ID as a parameter
      type: "Listrik", // Specify the type as "Listrik"
      phoneNumber: "", // Ensure phoneNumber is defined, even if empty
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#16247d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Token Listrik</Text>
      </View>

      {/* Input ID Pelanggan */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID Pelanggan</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Contoh: 123456789012"
            keyboardType="numeric"
            maxLength={12}
            value={customerId}
            onChangeText={handleCustomerIdChange}
          />
          <TouchableOpacity style={styles.icon}>
            <AntDesign
              name="close"
              size={24}
              color="gray"
              onPress={() => setCustomerId("")}
            />
          </TouchableOpacity>
        </View>
        {validationMessage ? (
          <Text style={styles.errorText}>{validationMessage}</Text>
        ) : customerId ? (
          <Text style={styles.validText}>ID pelanggan valid</Text>
        ) : null}
      </View>

      {/* Daftar Nominal Token Listrik (Tampilkan jika ID valid) */}
      {isCustomerIdValid && (
        <ScrollView style={styles.nominalContainer}>
          {listrikOptions.map((option, index) => {
            if (index % 2 === 0) {
              // Group two items into a row
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
                  {listrikOptions[index + 1] && (
                    <TouchableOpacity
                      style={styles.nominalCard}
                      onPress={() =>
                        handleNominalPress(
                          listrikOptions[index + 1].nominal,
                          listrikOptions[index + 1].harga
                        )
                      }
                    >
                      <Text style={styles.nominalText}>
                        {listrikOptions[index + 1].nominal.toLocaleString(
                          "id-ID"
                        )}
                      </Text>
                      <Text style={styles.nominalHarga}>Harga</Text>
                      <Text style={styles.hargaText}>
                        Rp{" "}
                        {listrikOptions[index + 1].harga.toLocaleString(
                          "id-ID"
                        )}
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
      {!isCustomerIdValid && (
        <View style={styles.infoContainer}>
          <Ionicons
            name="newspaper"
            size={30}
            color="#16247d"
            style={styles.infoIcon}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
              Masukkan ID pelanggan yang valid untuk menampilkan menu pembelian.
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#16247d", // Dark blue for header title
    marginLeft: 80,
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
  input: {
    flex: 1,
    fontSize: 16,
    color: "#16247d", // Dark blue input text
  },
  icon: {
    paddingHorizontal: 10,
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

export default Listrik;
