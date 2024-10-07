import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MeetDetail from "../assets/Meet_detail.png";

const Meet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.newMeetingButton}>
          <Text style={styles.newMeetingText}>New meeting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.joinCodeButton}>
          <Text style={styles.joinCodeText}>Join with a code</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Image source={MeetDetail} style={styles.image} />

        <Text style={styles.title}>Get a link you can share</Text>
        <Text style={styles.description}>
          Tap <Text style={{ fontWeight: "bold" }}>New meeting</Text> to get a
          link you can send to people you want to meet with
        </Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FAFE",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: 25,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  newMeetingButton: {
    backgroundColor: "#0066cc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  newMeetingText: {
    color: "#fff",
    fontSize: 16,
  },
  joinCodeButton: {
    borderColor: "#0066cc",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  joinCodeText: {
    color: "#0066cc",
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 30,
  },
});

export default Meet;
