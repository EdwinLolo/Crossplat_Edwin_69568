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
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const Bpjs = () => {
  const navigation = useNavigation();
  const [bpjsNumber, setBpjsNumber] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [isBpjsNumberValid, setIsBpjsNumberValid] = useState(false);
  const [months, setMonths] = useState(1);

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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="#16247d" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bayar BPJS</Text>
      </View>

      {/* Input Nomor BPJS */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nomor BPJS</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nomor BPJS"
            keyboardType="numeric"
            maxLength={13}
            value={bpjsNumber}
            onChangeText={handleBpjsNumberChange}
          />
          <TouchableOpacity style={styles.icon}>
            <AntDesign
              name="close"
              size={24}
              color="gray"
              onPress={() => setBpjsNumber("")}
            />
          </TouchableOpacity>
        </View>
        {validationMessage ? (
          <Text style={styles.errorText}>{validationMessage}</Text>
        ) : bpjsNumber ? (
          <Text style={styles.validText}>Nomor BPJS valid</Text>
        ) : null}
      </View>

      {/* Pilihan Jumlah Bulan (Jika Nomor Valid) */}
      {isBpjsNumberValid && (
        <ScrollView style={styles.nominalContainer}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <View style={styles.nominalRow} key={num}>
              <TouchableOpacity
                style={[
                  styles.nominalCard,
                  months === num && styles.selectedCard,
                ]}
                onPress={() => setMonths(num)}
              >
                <Text
                  style={[
                    styles.nominalText,
                    months === num && styles.selectedText,
                  ]}
                >
                  {num} Bulan
                </Text>
                <Text
                  style={[
                    styles.nominalHarga,
                    months === num && styles.selectedText,
                  ]}
                >
                  Nominal
                </Text>
                <Text
                  style={[
                    styles.hargaText,
                    months === num && styles.selectedText,
                  ]}
                >
                  Rp {(num * 50000).toLocaleString("id-ID")}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}

      {/* Info Panel */}
      {!isBpjsNumberValid && (
        <View style={styles.infoContainer}>
          <Ionicons
            name="newspaper"
            size={30}
            color="black"
            style={styles.infoIcon}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
              Masukkan nomor BPJS yang valid untuk menampilkan menu pembayaran.
            </Text>
          </View>
        </View>
      )}

      {/* Tombol Konfirmasi */}
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
    padding: 20,
    paddingTop: 55,
    backgroundColor: "#c7e2f7", // Light blue background color similar to HomeScreen
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
  selectedCard: {
    backgroundColor: "#16247d", // Dark blue for selected card
  },
  selectedText: {
    color: "#fff", // White text for selected card
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
