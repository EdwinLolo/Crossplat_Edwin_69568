import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTransaction } from "../Components/TransactionContext"; // Import useTransaction
import { useTheme } from "../Components/ThemeContext"; // Import useTheme for dark mode
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Notif = () => {
  const navigation = useNavigation();
  const { history } = useTransaction(); // Ambil data riwayat transaksi dari context
  const { isDarkMode } = useTheme(); // Use dark mode from theme context

  const handlePress = (transaction) => {
    navigation.navigate("HistoryDetail", { transaction });
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>
        Notification
      </Text>
      {history.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MaterialCommunityIcons
            name="clipboard-check-multiple-outline"
            size={100}
            color={isDarkMode ? "#fff" : "#808080"} // Adjust icon color based on dark mode
          />
          <Text style={[styles.emptyText, isDarkMode && styles.darkText]}>
            Tidak ada data transaksi
          </Text>
        </View>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => item.traceNo.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View
                style={[
                  styles.transactionContainer,
                  isDarkMode && styles.darkTransactionContainer,
                ]}
              >
                <MaterialIcons
                  name="notifications-active"
                  size={24}
                  color={isDarkMode ? "#fff" : "black"} // Adjust icon color based on dark mode
                  style={{ marginRight: 10 }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={isDarkMode && styles.darkText}>
                    Transaksi Anda {item.status} dengan nominal
                  </Text>
                  <Text
                    style={[
                      styles.transactionDetail,
                      isDarkMode && styles.darkText,
                    ]}
                  >
                    Rp {item.harga.toLocaleString("id-ID")} untuk pembayaran{" "}
                    {item.type === "Pulsa"
                      ? "Pulsa"
                      : item.type === "Listrik"
                      ? "Listrik"
                      : "BPJS"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 80,
    backgroundColor: "#f4f4f4",
  },
  darkContainer: {
    backgroundColor: "#333", // Dark background color for dark mode
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  darkText: {
    color: "#fff", // White text for dark mode
  },
  transactionContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  darkTransactionContainer: {
    backgroundColor: "#444", // Dark mode background for transaction containers
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#777",
  },
  transactionDetail: {
    color: "#333",
  },
});

export default Notif;
