import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTransaction } from "./TransactionContext"; // Import useTransaction
import { useTheme } from "../Components/ThemeContext"; // Import useTheme for dark mode

const Pin = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { addTransaction } = useTransaction(); // Ambil fungsi addTransaction dari context
  const { isDarkMode } = useTheme(); // Access dark mode state

  const {
    phoneNumber,
    customerId,
    nominal,
    harga,
    type,
    operator,
    bpjsNumber,
  } = route.params || {};

  const [pin, setPin] = useState(""); // PIN yang dimasukkan
  const [attempts, setAttempts] = useState(0); // State untuk melacak percobaan PIN
  const maxAttempts = 3; // Batas maksimal percobaan
  const correctPin = "080704"; // PIN yang benar
  const [isError, setIsError] = useState(false); // Untuk menandai jika PIN salah

  const handlePinSubmit = () => {
    const formattedDate = new Date().toLocaleString();
    if (pin === correctPin) {
      const newTransaction = {
        traceNo: Math.floor(Math.random() * 1000000).toString(),
        phoneNumber:
          type === "Pulsa"
            ? phoneNumber
            : type === "Listrik"
            ? customerId
            : bpjsNumber,
        nominal,
        harga,
        operator:
          type === "Pulsa" ? operator : type === "Listrik" ? "Listrik" : "BPJS",
        date: formattedDate,
        type,
        status: "Berhasil",
      };

      addTransaction(newTransaction);

      navigation.navigate("TransaksiBerhasil", { harga, date: formattedDate });
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setIsError(true);

      if (newAttempts >= maxAttempts) {
        Alert.alert(
          "PIN Salah",
          "Anda telah melebihi batas maksimal percobaan."
        );

        const transaction = {
          traceNo: Math.floor(Math.random() * 1000000).toString(),
          phoneNumber:
            type === "Pulsa"
              ? phoneNumber
              : type === "Listrik"
              ? customerId
              : bpjsNumber,
          nominal,
          harga,
          operator:
            type === "Pulsa"
              ? operator
              : type === "Listrik"
              ? "Listrik"
              : "BPJS",
          date: formattedDate,
          type,
          status: "Gagal",
        };

        addTransaction(transaction);

        navigation.navigate("TransaksiGagal", { date: formattedDate });
      } else {
        Alert.alert(
          "PIN Salah",
          `PIN yang Anda masukkan salah. Anda memiliki ${
            maxAttempts - newAttempts
          } kesempatan lagi.`
        );
      }
    }
  };

  const renderPinDots = () => {
    const pinLength = pin.length;
    const dots = [];

    for (let i = 0; i < 6; i++) {
      dots.push(
        <View
          key={i}
          style={[
            styles.dot,
            {
              backgroundColor:
                pinLength > i
                  ? isError
                    ? "red"
                    : isDarkMode
                    ? "white"
                    : "blue"
                  : isDarkMode
                  ? "#666"
                  : "lightgray",
            },
          ]}
        />
      );
    }

    return <View style={styles.dotsContainer}>{dots}</View>;
  };

  const handleInput = (value) => {
    if (pin.length < 6) {
      setPin(pin + value);
      setIsError(false);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>
        Masukkan PIN Anda
      </Text>
      {isError ? (
        <Text style={[styles.errorText, isDarkMode && styles.darkErrorText]}>
          PIN salah. Silakan coba lagi.
        </Text>
      ) : (
        <Text style={[styles.subtitle, isDarkMode && styles.darkText]}>
          Masukkan PIN aplikasi Anda.
        </Text>
      )}
      {renderPinDots()}

      <TextInput
        style={styles.hiddenInput}
        value={pin}
        onChangeText={setPin}
        maxLength={6}
        keyboardType="numeric"
        autoFocus
        secureTextEntry
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.button,
            pin.length < 6 && { backgroundColor: "gray" },
            isDarkMode && styles.darkButton,
          ]}
          onPress={handlePinSubmit}
          disabled={pin.length < 6}
        >
          <Text
            style={[styles.buttonText, isDarkMode && styles.darkButtonText]}
          >
            Konfirmasi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f4f4f4",
  },
  darkContainer: {
    backgroundColor: "#333", // Dark mode background color
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  darkText: {
    color: "#fff", // White text for dark mode
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  errorText: {
    fontSize: 16,
    marginBottom: 20,
    color: "red",
  },
  darkErrorText: {
    color: "#ff6666", // Lighter red for better contrast in dark mode
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    marginHorizontal: 5,
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    height: 40,
    width: 200,
  },
  buttonRow: {
    flexDirection: "row",
    width: "80%",
  },
  button: {
    backgroundColor: "#16247d",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    width: "100%",
    alignItems: "center",
  },
  darkButton: {
    backgroundColor: "#555", // Dark mode button background
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  darkButtonText: {
    color: "#ddd", // Slightly dimmed white for dark mode button text
  },
});

export default Pin;
