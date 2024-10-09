// Listrik.js
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
  { nominal: 50000, harga: 52500 },
  { nominal: 100000, harga: 102500 },
  { nominal: 200000, harga: 202500 },
  { nominal: 500000, harga: 502500 },
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
          <AntDesign name="arrowleft" size={24} color="black" />
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

      {/* Daftar Nominal Token Listrik */}
      {isCustomerIdValid && (
        <ScrollView style={styles.nominalContainer}>
          {listrikOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.nominalCard}
              onPress={() => handleNominalPress(option.nominal, option.harga)}
            >
              <Text style={styles.nominalText}>
                {option.nominal.toLocaleString("id-ID")}
              </Text>
              <Text style={styles.nominalHarga}>Harga</Text>
              <Text style={styles.hargaText}>
                Rp {option.harga.toLocaleString("id-ID")}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* Info Panel */}
      {!isCustomerIdValid && (
        <View style={styles.infoContainer}>
          <Ionicons
            name="newspaper"
            size={30}
            color="black"
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
  // (same styling as Pulsa.js for consistency)
});

export default Listrik;
