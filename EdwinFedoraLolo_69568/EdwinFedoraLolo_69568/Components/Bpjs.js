import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Bpjs = () => {
  const navigation = useNavigation();
  const [bpjsNumber, setBpjsNumber] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [isBpjsNumberValid, setIsBpjsNumberValid] = useState(false);
  const [months, setMonths] = useState(1);

  // Validate BPJS Number
  const validateBpjsNumber = (number) => {
    if (!number.startsWith("0")) {
      return "Nomor BPJS harus diawali dengan 0";
    }
    if (number.length !== 13) {
      return "Nomor BPJS harus terdiri dari 13 digit";
    }
    return "";
  };

  const handleBpjsNumberChange = (text) => {
    setBpjsNumber(text);
    const validationResult = validateBpjsNumber(text);
    setValidationMessage(validationResult);
    setIsBpjsNumberValid(validationResult === "");
  };

  const handlePayment = () => {
    const harga = months * 50000; // Rp50,000 per month
    const nominal = harga;
    navigation.navigate("Payment", {
      harga,
      nominal,
      type: "BPJS",
      bpjsNumber,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bayar BPJS</Text>

      {/* Input BPJS Number */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nomor BPJS</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nomor BPJS"
          keyboardType="numeric"
          maxLength={13}
          value={bpjsNumber}
          onChangeText={handleBpjsNumberChange}
        />
        {validationMessage ? (
          <Text style={styles.errorText}>{validationMessage}</Text>
        ) : bpjsNumber ? (
          <Text style={styles.validText}>Nomor BPJS valid</Text>
        ) : null}
      </View>

      {/* Select Number of Months */}
      {isBpjsNumberValid && (
        <View style={styles.monthContainer}>
          <Text style={styles.label}>Jumlah Bulan</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <TouchableOpacity
                key={num}
                style={[
                  styles.monthButton,
                  months === num && styles.selectedButton,
                ]}
                onPress={() => setMonths(num)}
              >
                <Text style={styles.buttonText}>{num} Bulan</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.nominalText}>Nominal: Rp {months * 50000}</Text>
        </View>
      )}

      {/* Confirm Payment Button */}
      {isBpjsNumberValid && (
        <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
          <Text style={styles.paymentButtonText}>Konfirmasi Pembayaran</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
  validText: {
    color: "green",
    marginTop: 5,
  },
  monthContainer: {
    marginTop: 20,
  },
  monthButton: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: "#16247d",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  nominalText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentButton: {
    marginTop: 30,
    backgroundColor: "#16247d",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  paymentButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Bpjs;
