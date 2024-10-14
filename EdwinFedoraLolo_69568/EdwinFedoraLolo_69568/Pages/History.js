import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTransaction } from "../Components/TransactionContext";
import { useTheme } from "../Components/ThemeContext";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const History = () => {
  const navigation = useNavigation();
  const { history } = useTransaction();
  const { isDarkMode } = useTheme();

  const handlePress = (transaction) => {
    navigation.navigate("HistoryDetail", { transaction });
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>
        History Transaksi
      </Text>
      {history.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MaterialCommunityIcons
            name="clipboard-check-multiple-outline"
            size={100}
            color={isDarkMode ? "#fff" : "#808080"}
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
              <View style={styles.transactionContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={[isDarkMode && styles.darkText]}>
                    Trace No.{item.traceNo}
                  </Text>
                  <Text style={[isDarkMode && styles.darkText]}>
                    {" "}
                    {item.date}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={[isDarkMode && styles.darkText]}>
                    {item.type}
                  </Text>
                  <Text style={[isDarkMode && styles.darkText]}>
                    {item.phoneNumber}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: item.status === "Berhasil" ? "green" : "red",
                    }}
                  >
                    {item.status}
                  </Text>
                  <Text
                    style={[
                      isDarkMode && styles.darkText,
                      { fontWeight: "bold" },
                    ]}
                  >
                    Rp {item.harga.toLocaleString("id-ID")}
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
    backgroundColor: "#333",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  darkText: {
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  transactionContainer: {
    // backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#777",
  },
});

export default History;
