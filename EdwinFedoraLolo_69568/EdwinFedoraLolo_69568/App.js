import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import HomeScreen from "./Pages/Home.js";
import MeetScreen from "./Pages/Meet";
import SplashScreen from "./Pages/Splash";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Komponen Search Bar yang baru
const SearchBar = () => {
  const navigation = useNavigation(); // Mengambil instance navigation

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarContainerss}>
        {/* Drawer Hamburger Icon */}
        <DrawerToggleButton tintColor="#fff" />

        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search in mail"
          placeholderTextColor="#ccc"
        />

        {/* Profile Icon */}
        <View style={styles.profileIconContainer}>
          {/* Anda bisa mengganti ini dengan Image jika memiliki gambar profil */}
          {/* <Image
          source={{
            uri: "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
          }}
          style={styles.profileIconContainer}
        /> */}

          <Text style={styles.profileText}>P</Text>
        </View>
      </View>
    </View>
  );
};

const SearchBarMeet = () => {
  const navigation = useNavigation(); // Mengambil instance navigation

  return (
    <View style={styles.searchBarContainer}>
      <DrawerToggleButton tintColor="#fff" />

      {/* Centered Meet Text */}
      <View style={styles.centeredContainer}>
        <Text style={styles.Meet}>Meet</Text>
      </View>

      {/* Profile Icon */}
      <View style={styles.profileIconContainer}>
        <Text style={styles.profileText}>P</Text>
      </View>
    </View>
  );
};

// Wrapper untuk layar Home dan Meet dengan Search Bar
const HomeWithSearchBar = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <SearchBar />
      <HomeScreen />
    </SafeAreaView>
  );
};

const MeetWithSearchBar = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <SearchBarMeet />
      <MeetScreen />
    </SafeAreaView>
  );
};

// Bottom Tab Navigator untuk menavigasi antara Home dan Meet
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#2c2c2c" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#aaa",
        headerShown: false, // Menyembunyikan header pada tab navigator
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeWithSearchBar}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/email_active.png")
                  : require("./assets/email.png")
              }
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Meet"
        component={MeetWithSearchBar}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/Meet_active.png")
                  : require("./assets/Meet.png")
              }
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Drawer Navigator dengan BottomTabNavigator di dalamnya
export default function App() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 3500); // Splash screen duration (3.5 seconds)
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isSplash ? (
        <SplashScreen />
      ) : (
        <SafeAreaView style={styles.safeArea}>
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                headerShown: false, // Menyembunyikan header pada drawer navigator
              }}
            >
              <Drawer.Screen name="Main" component={BottomTabNavigator} />
              <Drawer.Screen name="Meet" component={BottomTabNavigator} />
            </Drawer.Navigator>
            <StatusBar style="light" />
          </NavigationContainer>
        </SafeAreaView>
      )}
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Mengubah background menjadi warna gelap
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#2c2c2c", // Menjaga warna gelap pada SafeArea
    paddingTop: 50, // Menambahkan padding atas agar konten tidak terlalu atas
  },
  searchBarContainerss: {
    flexDirection: "row",
    alignItems: "center",
    height: 53,
    width: "100%",
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#444", // Background search bar mirip dengan yang ada di gambar
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Membuat ikon di kiri dan kanan
    padding: 10,
    backgroundColor: "#000", // Background search bar mirip dengan yang ada di gambar
  },
  centeredContainer: {
    flex: 1, // Memastikan bahwa teks berada di tengah dan mengisi ruang yang tersisa
    alignItems: "center",
  },
  Meet: {
    fontSize: 18,
    color: "#fff",
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#444", // Warna background input
    borderRadius: 20,
    paddingLeft: 0,
    color: "#fff", // Warna teks putih
    marginLeft: 0, // Menambahkan margin kiri untuk memberi jarak antara hamburger dan input
    fontSize: 18, // Ukuran teks
  },
  profileIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#555", // Background warna untuk ikon profil
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10, // Memberi jarak antara input pencarian dan ikon profil
  },
  profileText: {
    color: "#fff", // Warna teks putih untuk huruf profil
    fontSize: 18, // Ukuran teks
  },
});
