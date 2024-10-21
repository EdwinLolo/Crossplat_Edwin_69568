import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../Components/ThemeContext";

const Bayar = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color={isDarkMode ? "#fff" : "#16247d"}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, isDarkMode && styles.darkText]}>
          Bukti Bayar
        </Text>
      </View>
      <View style={styles.bodyDetail}>
        <Text style={[styles.title, isDarkMode && styles.darkText]}>
          Tunjukkan QR untuk menerima transfer
        </Text>
        <Image
          source={require("../assets/Qris_BCA.jpg")}
          style={styles.qrImage}
        />
        <Text style={[styles.footer, isDarkMode && styles.darkText]}>
          QR berlaku untuk 1 kali transaksi
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  backButton: {
    position: "absolute",
    left: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#16247d",
  },
  darkText: {
    color: "#fff",
  },
  bodyDetail: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  footer: {
    fontSize: 14,
    color: "#555",
  },
});

export default Bayar;
