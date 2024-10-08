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
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Pages/Home.js";
import MeetScreen from "./Pages/Meet";
import SplashScreen from "./Pages/Splash";
import CustomDrawerContent from "./Pages/CustomDrawerContent.js";
import SearchScreen from "./Pages/Search.js";

import Microphone from "./assets/microphone-01.png";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SearchBar = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarContainerss}>
        <DrawerToggleButton tintColor="#000" />

        <View style={styles.centeredContainersearch}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.buttonText}>Search in mail</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileIconContainer}>
          <Text style={styles.profileText}>P</Text>
        </View>
      </View>
    </View>
  );
};

const SearchBarMeet = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchBarContainer}>
      <DrawerToggleButton tintColor="#000" />

      <View style={styles.centeredContainer}>
        <Text style={styles.Meet}>Meet</Text>
      </View>

      <View style={styles.profileIconContainer}>
        <Text style={styles.profileText}>P</Text>
      </View>
    </View>
  );
};

const SearchBarSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchBarContainerr}>
      <View style={styles.searchBarContainers}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={18} color="#3F4851" />
        </TouchableOpacity>

        <TextInput
          style={styles.searchInput}
          placeholder="Search in mail"
          placeholderTextColor="#3F4851"
        />

        <View style={styles.profileMicContainer}>
          <Image source={Microphone} />
        </View>
      </View>
    </View>
  );
};

const HomeWithSearchBar = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <SearchBarMeet />
      <MeetScreen />
    </SafeAreaView>
  );
};

const SearchWithSearchBar = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
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

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#E5EEF7" },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#555",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeWithSearchBar}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/email2.png")
                  : require("./assets/email.png")
              }
              style={{ width: size, height: size }}
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

export default function App() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isSplash ? (
        <SplashScreen />
      ) : (
        <SafeAreaView style={styles.safeArea}>
          <NavigationContainer>
            <Drawer.Navigator
              drawerContent={(props) => <CustomDrawerContent {...props} />}
              screenOptions={{
                headerShown: false,
              }}
            >
              <Drawer.Screen name="Main" component={BottomTabNavigator} />
              <Drawer.Screen name="Meet" component={BottomTabNavigator} />
              <Drawer.Screen name="Search" component={SearchWithSearchBar} />
            </Drawer.Navigator>
            <StatusBar style="dark" />
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
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#F5FAFE",
    paddingTop: 50,
  },
  searchBarContainers: {
    flexDirection: "row",
    alignItems: "center",
    height: 53,
    width: "100%",
    padding: 10,
    backgroundColor: "#E1EAF3",
    borderBottomWidth: 1,
    borderBottomColor: "#C7CED8",
  },
  searchBarContainerss: {
    flexDirection: "row",
    alignItems: "center",
    height: 53,
    width: "100%",
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#E1EAF3",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#F5FAFE",
  },
  searchBarContainerr: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E1EAF3",
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
  },
  centeredContainersearch: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  Meet: {
    fontSize: 18,
    color: "#000",
  },
  searchInput: {
    flex: 1,
    height: "100%",
    // backgroundColor: "#e0e0e0",
    borderRadius: 20,
    paddingLeft: 30,
    justifyContent: "center",
    fontSize: 18,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    textAlign: "left",
  },
  profileIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  profileMicContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  profileText: {
    color: "#000",
    fontSize: 18,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#CFE6F6",
  },
});
