import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import Animated, {
  SlideInLeft,
  SlideInRight,
  SlideInDown,
} from "react-native-reanimated";

import userData from "../data.json";

const UserList = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {userData.map((users, index) => {
        const baseDuration = 500;
        const animationDelay = index * 200;

        return (
          <Animated.View
            entering={SlideInLeft.duration(baseDuration + animationDelay)}
            style={styles.userList}
            key={users.name}
          >
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
              />

              <Animated.View
                entering={SlideInDown.duration(700 + animationDelay)} // durasi dinamis
                style={styles.textContainer}
              >
                <Animated.Text
                  entering={SlideInRight.duration(1000 + animationDelay)} // durasi dinamis
                  style={styles.boldText}
                >
                  {users.name}
                </Animated.Text>
                <Animated.Text
                  entering={SlideInRight.duration(1000 + animationDelay)} // durasi dinamis
                  style={styles.emailText}
                >
                  {users.email}
                </Animated.Text>
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
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
