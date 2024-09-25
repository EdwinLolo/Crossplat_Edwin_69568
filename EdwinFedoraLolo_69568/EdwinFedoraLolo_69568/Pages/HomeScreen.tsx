import { View, Text, Button } from "react-native";
import React from "react";
import styles from "../appStyle.styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Navigation List</Text>
      <Button title="Email" onPress={() => navigation.navigate("Email")} />
      <Button
        title="User List"
        onPress={() => navigation.navigate("UserList")}
      />
    </View>
  );
};

export default HomeScreen;
