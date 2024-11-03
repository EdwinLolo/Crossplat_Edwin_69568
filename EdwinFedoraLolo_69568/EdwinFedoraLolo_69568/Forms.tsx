import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { updatePost } from "./Services/axios";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Forms() {
  const route = useRoute();
  const navigation = useNavigation();
  const { post } = route.params;

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = async () => {
    try {
      const res = await updatePost(post.id, { title, body });
      if (res.status === 200) {
        navigation.goBack(); // Return to the Home screen
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={body}
        onChangeText={setBody}
        placeholder="Body"
        multiline
      />
      <Button title="Update Post" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
  },
});
