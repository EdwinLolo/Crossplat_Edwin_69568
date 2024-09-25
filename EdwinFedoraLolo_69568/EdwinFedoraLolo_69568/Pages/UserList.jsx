import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import userData from "../data.json";

const UserList = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {userData.map((users) => {
        return (
          <View style={styles.userList} key={users.name}>
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Profile", {
                  userName: users.name,
                  userPhoto: users.photo_url,
                })
              }
            >
              <Image
                source={{
                  uri: users.photo_url,
                }}
                style={styles.avatar}
                imageStyle={{ borderRadius: 50 }}
              />

              <View style={styles.textContainer}>
                <Text style={styles.boldText}>{users.name}</Text>
                <Text style={styles.emailText}>{users.email}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10, // Adds padding to the overall scroll container
  },
  userList: {
    marginBottom: 20, // Adds spacing between each user card
  },
  card: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3, // Adds shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3, // Adds shadow for iOS
    padding: 10,
  },
  avatar: {
    width: 100, // Size of the avatar
    height: 100,
    justifyContent: "flex-end", // Aligns the text at the bottom of the image
    borderRadius: 50, // Makes the image circular
    overflow: "hidden",
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black background for text visibility
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  boldText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  emailText: {
    color: "#ccc",
    fontSize: 12,
  },
});

export default UserList;
