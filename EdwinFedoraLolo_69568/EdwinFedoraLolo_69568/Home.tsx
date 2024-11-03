import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getPosts } from "./Services/axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  const fetchPosts = async () => {
    try {
      const res = await getPosts();
      if (res.status === 200) {
        setPosts(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNavigateToForm = (post) => {
    navigation.navigate("Forms", { post }););
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleNavigateToForm(item)}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  card: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  body: {
    fontSize: 14,
    color: "#333",
  },
});
