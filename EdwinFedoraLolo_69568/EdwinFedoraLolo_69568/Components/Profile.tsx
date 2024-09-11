import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Profile = ({ nama, value }: { nama: string; value: number }) => {
  return (
    <View style={styles.profileContainer}>
      {/* <Text>Profile</Text> */}
      <Text>{nama ? nama : ""}</Text>
      <Text>{value ? value : ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Profile;
