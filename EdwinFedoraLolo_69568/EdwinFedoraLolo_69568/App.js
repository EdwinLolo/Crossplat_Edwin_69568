import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import DataBohongan from "./DataLAB";

export default function App() {
  console.log(DataBohongan);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.judul}>Tugas Week 2</Text>
      </View>
      {DataBohongan.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image source={{ uri: item.photo_url }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    backgroundColor: "skyblue",
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  judul: {
    fontSize: 20,
    color: "white",
  },

  item: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
});
