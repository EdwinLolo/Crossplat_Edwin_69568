import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../assets/union.png")}
          style={{ width: 55, height: 55, borderRadius: 10 }}
        />
        <Text style={styles.appName}>All-U-Need</Text>
      </View>

      {/* User Info Section */}
      <View style={styles.userContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Edwin Fedora Lolo</Text>
            <Text style={styles.accountNumber}>2022</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.actionButton, { borderRightWidth: 2 }]}
            >
              <MaterialCommunityIcons name="upload" size={30} color="black" />
              <Text>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, { borderRightWidth: 2 }]}
            >
              <MaterialCommunityIcons name="download" size={30} color="black" />
              <Text>Tarik Tunai</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton]}>
              <Feather name="more-horizontal" size={30} color="black" />
              <Text>More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        {/* Service Section */}
        <View style={styles.serviceContainer}>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Pulsa")}
          >
            <Feather
              name="smartphone"
              size={40}
              color="black"
              style={styles.serviceIcon}
            />
            <Text>Pulsa/Data</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Listrik")}
          >
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={40}
              color="black"
              style={styles.serviceIcon}
            />
            <Text>Listrik</Text>
          </TouchableOpacity>
          <View style={styles.serviceItem}>
            <AntDesign
              name="medicinebox"
              size={40}
              color="black"
              style={styles.serviceIcon}
            />
            {/* width: 40, height: 40, marginBottom: 5, */}
            <Text>BJS</Text>
          </View>
        </View>

        {/* Promotional Banner Section */}
        <View style={styles.promoBanner}>
          <Image
            source={require("../assets/promo.jpg")} // Example banner, use your actual asset
            style={styles.promoImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 55,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  appName: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: "bold",
  },
  userContainer: {
    paddingHorizontal: 20,
  },
  userInfoContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    marginBottom: 60,
  },
  userInfo: {
    // marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  userName: {
    fontSize: 18,
    // fontWeight: "bold",
  },
  accountNumber: {
    fontSize: 22,
    color: "#666",
    fontWeight: "bold",
    // marginBottom: 15,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    padding: 10,
    borderTopWidth: 2,
    borderColor: "#e0e0e0",
    width: "33.34%",
    alignItems: "center",
  },
  bottomContainer: {
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  serviceItem: {
    alignItems: "center",
    width: "25%",
  },
  serviceIcon: {
    // width: 40,
    // height: 40,
    marginBottom: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5,
  },
  promoBanner: {
    justifyContent: "center",
    alignItems: "center",
  },
  promoImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
});

export default HomeScreen;
