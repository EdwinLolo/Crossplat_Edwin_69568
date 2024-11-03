import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import { updatePost as updatePostOnServer } from "./Services/axios";
import { StackNavigationProp } from "@react-navigation/stack";

type FormsScreenRouteProp = RouteProp<RootStackParamList, "Forms">;
type FormsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Forms"
>;

const Forms = () => {
  const route = useRoute<FormsScreenRouteProp>();
  const navigation = useNavigation<FormsScreenNavigationProp>();

  const { post, updatePost } = route.params;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = async () => {
    try {
      const responsePost = await updatePostOnServer(post.id, { title, body });

      updatePost(responsePost);

      Alert.alert("Success", "Post updated successfully", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home"),
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to update post");
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={{
          marginBottom: 16,
          padding: 8,
          borderColor: "#ddd",
          borderWidth: 1,
          borderRadius: 4,
        }}
      />
      <TextInput
        value={body}
        onChangeText={setBody}
        placeholder="Body"
        style={{
          marginBottom: 16,
          padding: 8,
          borderColor: "#ddd",
          borderWidth: 1,
          borderRadius: 4,
        }}
        multiline
      />
      <Button title="Update Post" onPress={handleUpdate} />
    </View>
  );
};

export default Forms;
