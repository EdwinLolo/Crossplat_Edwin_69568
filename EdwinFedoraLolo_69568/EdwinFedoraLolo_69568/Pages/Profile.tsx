import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";

const Profile = ({ navigation, route }) => {
  const { userName, userPhoto } = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.foto} source={{ uri: userPhoto }} />
      {/* <Text>{userPhoto}</Text> */}
      <Text>{userName}&apos;s Profile</Text>
      <Button title="Go Back" onPress={() => navigation.navigate("UserList")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default Profile;
