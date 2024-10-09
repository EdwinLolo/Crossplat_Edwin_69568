import { View, Text, Button, StyleSheet, Image } from "react-native";
import Animated, {
  SlideInLeft,
  SlideInRight,
  SlideInDown,
  SlideInUp, // Import SlideInUp untuk animasi tombol
} from "react-native-reanimated";
import React from "react";

const Profile = ({ navigation, route }) => {
  const { userName, userPhoto } = route.params;

  return (
    <Animated.View
      entering={SlideInLeft.duration(700)}
      style={styles.container}
    >
      <Animated.Image
        entering={SlideInLeft.duration(1000)}
        style={styles.foto}
        source={{ uri: userPhoto }}
      />
      <Animated.Text entering={SlideInLeft.duration(1000)}>
        {userName}&apos;s Profile
      </Animated.Text>

      {/* Tambahkan animasi pada tombol */}
      <Animated.View entering={SlideInUp.duration(1200)}>
        <Button
          title="Go Back"
          onPress={() => navigation.navigate("UserList")}
        />
      </Animated.View>
    </Animated.View>
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
