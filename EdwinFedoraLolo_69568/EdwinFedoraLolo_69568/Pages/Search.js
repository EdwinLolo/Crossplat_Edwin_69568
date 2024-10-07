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
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
          icon={() => <Icon name="arrow-drop-down" size={16} color="#000" />}
        >
          Labels
        </Button>
        <Button
          mode="outlined"
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
          style={styles.button}
          icon={() => <Icon name="arrow-drop-down" size={16} color="#000" />}
        >
          From
        </Button>
        <Button
          mode="outlined"
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
          style={styles.button}
          icon={() => <Icon name="arrow-drop-down" size={16} color="#000" />}
        >
          To
        </Button>
        <Button
          mode="outlined"
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
          style={styles.button}
          icon={() => <Icon name="arrow-drop-down" size={16} color="#000" />}
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
      <MaterialIcons name="update" size={24} color="#000" />
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
    backgroundColor: "#f9f9f9",
    padding: 15,
  },
  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    marginRight: 10,
  },
  searchText: {
    color: "#000",
    fontSize: 16,
  },
  scrollView: {
    maxHeight: 50,
  },
  containerButtonRow: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
  },
  button: {
    borderRadius: 8,
    borderColor: "#bbb",
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    height: 40,
  },
  buttonContent: {
    height: 40,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 14,
  },
});

export default RecentSearchScreen;
