import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons";

const recentSearches = [
  { id: "1", search: "database" },
  { id: "2", search: "career preparation" },
  { id: "3", search: "21 september 2024" },
  { id: "4", search: "aditiawan" },
];

const ButtonRow = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      <View style={styles.containerButtonRow}>
        <Button
          mode="outlined"
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
          style={styles.button}
          icon={() => <Icon name="arrow-drop-down" size={16} color="#000" />} // Icon color updated to black
        >
          Labels
        </Button>
        <Button
          mode="outlined"
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
          style={styles.button}
          icon={() => <Icon name="arrow-drop-down" size={16} color="#000" />} // Icon color updated to black
        >
          From
        </Button>
        <Button
          mode="outlined"
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
          style={styles.button}
          icon={() => <Icon name="arrow-drop-down" size={16} color="#000" />} // Icon color updated to black
        >
          To
        </Button>
        <Button
          mode="outlined"
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
          style={styles.button}
          icon={() => <Icon name="arrow-drop-down" size={16} color="#000" />} // Icon color updated to black
        >
          Attachments
        </Button>
      </View>
    </ScrollView>
  );
};

const RecentSearchScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.searchItem}>
      <Ionicons
        name="time-outline"
        size={18}
        color="#000" // Updated icon color to black
        style={styles.icon}
      />
      <Text style={styles.searchText}>{item.search}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ButtonRow />
      <FlatList
        data={recentSearches}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // Light background color
    padding: 15,
  },
  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", // Light border color for separation
  },
  icon: {
    marginRight: 10,
  },
  searchText: {
    color: "#000", // Black color for the search text
    fontSize: 16,
  },
  scrollView: {
    maxHeight: 60, // Set a fixed height or maxHeight to avoid expanding too much
  },
  containerButtonRow: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9", // Light background for button row
  },
  button: {
    borderRadius: 8, // Rounded corners
    borderColor: "#bbb", // Light border color
    borderWidth: 1,
    marginHorizontal: 10, // Increase spacing between buttons
    marginVertical: 5,
    height: 50, // Adjust the height of the button
  },
  buttonContent: {
    height: 50, // Adjust the height of the button
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "#000", // Black text color
    fontSize: 14,
  },
});

export default RecentSearchScreen;
