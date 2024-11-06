import React, { useState } from "react";
import { Button, View, Text, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  const [uri, setUri] = useState("");

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setUri(result.assets[0].uri);
      console.log("Image selected from gallery:", result.assets[0].uri);
    }
  };

  const handleCameraLaunch = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setUri(result.assets[0].uri);
        console.log("Image captured from camera:", result.assets[0].uri);
      }
    } else {
      alert("Camera permission is required to use the camera.");
    }
  };

  const saveImage = async () => {
    if (!uri) {
      Alert.alert("No image", "Please select or capture an image first.");
      return;
    }

    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Please allow media library access to save images."
      );
      return;
    }

    try {
      await MediaLibrary.createAssetAsync(uri);
      Alert.alert("Success", "Image saved to Pictures folder!");
      console.log("Image saved:", uri);
    } catch (error) {
      Alert.alert("Error", "Failed to save image.");
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Edwin Fedora Lolo - 00000069568</Text>
      <Button title="Open Gallery" onPress={openImagePicker} />
      <Button title="Open Camera" onPress={handleCameraLaunch} />
      <Button title="Create File" onPress={saveImage} />
      {uri ? (
        <Image
          source={{ uri }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      ) : null}
    </View>
  );
}
