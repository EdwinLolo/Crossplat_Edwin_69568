import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Transaksi_Gagal = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { date } = route.params || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Fail.png")} style={styles.checkmark} />

      <Text style={styles.title}>Pembelian Gagal!</Text>
      <Text style={styles.date}>{date}</Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Tutup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F72F2F",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  checkmark: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  date: {
    fontSize: 14,
    color: "#999",
    marginBottom: 20,
  },
  buttonContainer: {
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

export default Transaksi_Gagal;
