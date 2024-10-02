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
import HomeScreen from "./Pages/Home.js";
import MeetScreen from "./Pages/Meet";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Komponen Search Bar yang baru
const SearchBar = () => {
  const navigation = useNavigation(); // Mengambil instance navigation

  return (
    <View style={styles.searchBarContainer}>
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
      <SearchBar />
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
      <Tab.Screen name="Home" component={HomeWithSearchBar} />
      <Tab.Screen name="Meet" component={MeetWithSearchBar} />
    </Tab.Navigator>
  );
};

// Drawer Navigator dengan BottomTabNavigator di dalamnya
export default function App() {
  return (
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
    backgroundColor: "#121212", // Menjaga warna gelap pada SafeArea
    paddingTop: 50, // Menambahkan padding atas agar konten tidak terlalu atas
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#2c2c2c", // Background search bar mirip dengan yang ada di gambar
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#444", // Warna background input
    borderRadius: 20,
    paddingLeft: 15,
    color: "#fff", // Warna teks putih
    marginLeft: 10, // Menambahkan margin kiri untuk memberi jarak antara hamburger dan input
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
