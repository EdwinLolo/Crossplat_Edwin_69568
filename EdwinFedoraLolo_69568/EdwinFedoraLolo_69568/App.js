import React, { useState } from "react";
import { Button, View, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [uri, setUri] = useState("");

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUri(result.uri);
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

      if (!result.canceled) {
        setUri(result.uri);
      }
    } else {
      alert("Camera permission is required to use the camera.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Camera and Gallery Access</Text>
      <Button title="Open Gallery" onPress={openImagePicker} />
      <Button title="Open Camera" onPress={handleCameraLaunch} />
      {uri ? (
        <Image
          source={{ uri }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      ) : null}
    </View>
  );
}
