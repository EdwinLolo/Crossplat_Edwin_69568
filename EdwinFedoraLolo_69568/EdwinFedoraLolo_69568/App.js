import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FAB } from "react-native-paper";

import HomeScreen from "./Pages/Home.js";
import MeetScreen from "./Pages/Meet";
import SplashScreen from "./Pages/Splash";
import CustomDrawerContent from "./Pages/CustomDrawerContent.js"; // Import the custom drawer
import SearchScreen from "./Pages/Search.js";

import Microphone from "./assets/microphone_putih.png";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Komponen Search Bar yang baru
const SearchBar = () => {
  const navigation = useNavigation(); // Mengambil instance navigation

  const handlePress = () => {
    // Navigate to the target screen, replace 'TargetScreen' with your actual screen name
    navigation.navigate("Search");
  };

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarContainerss}>
        {/* Drawer Hamburger Icon */}
        <DrawerToggleButton tintColor="#fff" />

        {/* Search Input */}
        {/* <TextInput
          style={styles.searchInput}
          placeholder="Search in mail"
          placeholderTextColor="#ccc"
        /> */}
        <View style={styles.centeredContainersearch}>
          {/* Custom Button with left-aligned text and navigation on press */}
          <TouchableOpacity style={styles.searchInput} onPress={handlePress}>
            <Text style={styles.buttonText}>Search in mail</Text>
          </TouchableOpacity>
        </View>

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

const SearchBarSearch = () => {
  const navigation = useNavigation(); // Mengambil instance navigation

  return (
    <View style={styles.searchBarContainerr}>
      <View style={styles.searchBarContainers}>
        {/* Drawer Hamburger Icon */}
        {/* <DrawerToggleButton tintColor="#fff" /> */}
        <Button title="Back" onPress={() => navigation.navigate("Home")} />

        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search in mail"
          placeholderTextColor="#ccc"
        />
        {/* <View style={styles.centeredContainersearch}>
          <TouchableOpacity style={styles.searchInput} onPress={handlePress}>
            <Text style={styles.buttonText}>Search in mail</Text>
          </TouchableOpacity>
        </View> */}

        {/* Profile Icon */}
        <View style={styles.profileIconContainer}>
          {/* Anda bisa mengganti ini dengan Image jika memiliki gambar profil */}
          <Image source={Microphone} style={styles.profileIconContainer} />

          {/* <Text style={styles.profileText}>P</Text> */}
        </View>
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
      <FAB
        icon="pencil"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
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

const SearchWithSearchBar = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <SearchBarSearch />
      <SearchScreen />
      <FAB
        icon="pencil"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
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
              drawerContent={(props) => <CustomDrawerContent {...props} />} // Apply custom drawer content
              screenOptions={{
                headerShown: false, // Hide header
              }}
            >
              <Drawer.Screen name="Main" component={BottomTabNavigator} />
              <Drawer.Screen name="Meet" component={BottomTabNavigator} />
              <Drawer.Screen name="Search" component={SearchWithSearchBar} />
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
  searchBarContainers: {
    flexDirection: "row",
    alignItems: "center",
    height: 53,
    width: "100%",
    padding: 10,
    // borderRadius: 40,
    backgroundColor: "#444", // Background search bar mirip dengan yang ada di gambar
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
  searchBarContainerr: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Membuat ikon di kiri dan kanan
    backgroundColor: "#000", // Background search bar mirip dengan yang ada di gambar
  },
  centeredContainer: {
    flex: 1, // Memastikan bahwa teks berada di tengah dan mengisi ruang yang tersisa
    alignItems: "center",
  },
  centeredContainersearch: {
    flex: 1, // Ensures the text is centered and fills the available space
    justifyContent: "center",
    height: "100%",
  },
  Meet: {
    fontSize: 18,
    color: "#fff",
  },
  searchInput: {
    flex: 1,
    height: "100%",
    backgroundColor: "#444", // Background color of the button
    borderRadius: 20,
    paddingLeft: 10, // Adjust padding to move the text to the left
    justifyContent: "center", // Center the text vertically
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 18, // Font size
    textAlign: "left", // Align text to the left
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
