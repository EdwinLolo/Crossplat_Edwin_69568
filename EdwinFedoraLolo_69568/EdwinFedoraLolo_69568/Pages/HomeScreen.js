import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require("../assets/union.png")} style={styles.logo} />
        <Text style={styles.appName}>All-U-Need</Text>
      </View>

      {/* User Info Section */}
      <View style={styles.userContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Edwin Fedora Lolo</Text>
            <Text style={styles.accountNumber}>2022</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        {/* Service Section */}
        <View style={styles.serviceContainer}>
          <TouchableOpacity
            style={[styles.serviceItem, styles.buttonShadow]}
            onPress={() => navigation.navigate("Pulsa")}
          >
            <Feather name="smartphone" size={40} color="#16247d" />
            <Text style={styles.serviceText}>Pulsa/Data</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.serviceItem, styles.buttonShadow]}
            onPress={() => navigation.navigate("Listrik")}
          >
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={40}
              color="#16247d"
            />
            <Text style={styles.serviceText}>Listrik</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.serviceItem, styles.buttonShadow]}
            onPress={() => navigation.navigate("BPJS")}
          >
            <AntDesign name="medicinebox" size={40} color="#16247d" />
            <Text style={styles.serviceText}>BPJS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceItem, styles.buttonShadow]}>
            <Feather name="more-horizontal" size={30} color="#16247d" />
            <Text style={styles.serviceText}>More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.actionButton, styles.buttonShadow]}>
            <MaterialCommunityIcons name="upload" size={30} color="#16247d" />
            <Text style={styles.actionText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.buttonShadow]}>
            <MaterialCommunityIcons name="download" size={30} color="#16247d" />
            <Text style={styles.actionText}>Tarik Tunai</Text>
          </TouchableOpacity>
        </View>

        {/* Promotional Banner Section */}
        <View style={styles.promoBanner}>
          <Image
            source={require("../assets/promo.jpg")} // Example banner, use your actual asset
            style={styles.promoImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7e2f7", // Light blue background color
    paddingTop: 55,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  appName: {
    fontSize: 28,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#16247d", // Darker blue for text
  },
  userContainer: {
    paddingHorizontal: 20,
  },
  userInfoContainer: {
    backgroundColor: "#b0d4f1", // Slightly darker blue for user info
    borderRadius: 20,
    height: 100,
    // marginBottom: 40,
    // paddingVertical: 10,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  userInfo: {
    // paddingHorizontal: 20,
    // paddingBottom: 10,
  },
  userName: {
    fontSize: 20,
    color: "#16247d", // Dark blue text
  },
  accountNumber: {
    fontSize: 22,
    color: "#16247d",
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "#f3f9ff",
    padding: 15,
    width: "100%",
    alignItems: "center",
    borderRadius: 20,
  },
  actionText: {
    color: "#16247d", // Dark blue for action button text
    marginTop: 5,
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomContainer: {
    backgroundColor: "#c7e2f7",
    padding: 20,
  },
  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  serviceItem: {
    backgroundColor: "#f3f9ff",
    padding: 15,
    alignItems: "center",
    borderRadius: 20,
    width: "23%",
    height: 100,
  },
  serviceText: {
    color: "#16247d",
    height: 40,
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    bottom: 0,
  },
  promoBanner: {
    justifyContent: "center",
    alignItems: "center",
  },
  promoImage: {
    width: "100%",
    height: 250,
    borderRadius: 20,
  },
});

export default HomeScreen;
