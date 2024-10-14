import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../Components/ThemeContext"; // Import the theme context

const Profile = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use the theme context
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => setLanguage(language === "EN" ? "ID" : "EN");

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>
        Profile
      </Text>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require("../assets/Vincent.jpeg")} // Replace with your image URL or local image
        />
        <Text style={[styles.name, isDarkMode && styles.darkText]}>
          Edwin Fedora Lolo
        </Text>
        <Text style={[styles.id, isDarkMode && styles.darkText]}>
          00000069568
        </Text>
        <Text style={[styles.dob, isDarkMode && styles.darkText]}>
          08 July 2004
        </Text>
      </View>

      <View style={styles.settingsContainer}>
        <View style={styles.settingItem}>
          <Text style={[styles.settingText, isDarkMode && styles.darkText]}>
            Change Language
          </Text>
          <TouchableOpacity onPress={toggleLanguage}>
            <Text style={[styles.language, isDarkMode && styles.darkText]}>
              {language}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingItem}>
          <Text style={[styles.settingText, isDarkMode && styles.darkText]}>
            Dark Mode
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDarkMode}
            value={isDarkMode}
          />
        </View>
      </View>

      <Text style={[styles.version, isDarkMode && styles.darkText]}>
        App Version 1.2024.09.05
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    paddingHorizontal: 20,
    alignItems: "center",
    // justifyContent: "center",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 130,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#000",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  id: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  dob: {
    fontSize: 14,
    color: "#777",
  },
  settingsContainer: {
    width: "100%",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  settingText: {
    fontSize: 16,
    color: "#000",
  },
  language: {
    fontSize: 16,
    color: "#007AFF",
  },
  version: {
    fontSize: 14,
    color: "#999",
    position: "absolute",
    bottom: 20,
  },
  darkText: {
    color: "#fff",
  },
});

export default Profile;
