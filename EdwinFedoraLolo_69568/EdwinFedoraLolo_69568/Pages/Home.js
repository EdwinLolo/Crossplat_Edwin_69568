import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Data sementara
const emails = [
  {
    id: "1",
    sender: "Promotions",
    subject: "AirAsia rewards — Redeem your points",
    time: "Sep 30",
    iconBackgroundColor: "#4caf50",
  },
  {
    id: "2",
    sender: "Updates",
    subject: "Shopee — Kak, Kiriman Anda sedang dalam perjalanan",
    time: "Sep 30",
    iconBackgroundColor: "#ff9800",
  },
  {
    id: "3",
    sender: "Google",
    subject: "Security alert for edwinfedora",
    time: "Sep 30",
    iconBackgroundColor: "#fbc02d",
  },
  {
    id: "4",
    sender: "Google Play",
    subject: "Your Google Play Order Receipt",
    time: "Sep 29",
    iconBackgroundColor: "#00bcd4",
  },
  {
    id: "5",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575",
  },
  {
    id: "6",
    sender: "Udemy",
    subject: "Complete Python Bootcamp: Go from zero to hero",
    time: "Sep 24",
    iconBackgroundColor: "#f44336",
  },
  {
    id: "7",
    sender: "Google",
    subject: "Security alert for edwinfedora",
    time: "Sep 23",
    iconBackgroundColor: "#fbc02d",
  },
  {
    id: "8",
    sender: "Google Play",
    subject: "Your Google Play Order Receipt",
    time: "Sep 22",
    iconBackgroundColor: "#00bcd4",
  },
  {
    id: "9",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 20",
    iconBackgroundColor: "#757575",
  },
  {
    id: "10",
    sender: "Udemy",
    subject: "Complete Python Bootcamp: Go from zero to hero",
    time: "Sep 19",
    iconBackgroundColor: "#f44336",
  },
  {
    id: "11",
    sender: "Google",
    subject: "Security alert for edwinfedora",
    time: "Sep 18",
    iconBackgroundColor: "#fbc02d",
  },
  {
    id: "12",
    sender: "Google Play",
    subject: "Your Google Play Order Receipt",
    time: "Sep 17",
    iconBackgroundColor: "#00bcd4",
  },
  {
    id: "13",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 15",
    iconBackgroundColor: "#757575",
  },
  {
    id: "14",
    sender: "Udemy",
    subject: "Complete Python Bootcamp: Go from zero to hero",
    time: "Sep 14",
    iconBackgroundColor: "#f44336",
  },
  {
    id: "15",
    sender: "Google",
    subject: "Security alert for edwinfedora",
    time: "Sep 13",
    iconBackgroundColor: "#fbc02d",
  },
  {
    id: "16",
    sender: "Google Play",
    subject: "Your Google Play Order Receipt",
    time: "Sep 12",
    iconBackgroundColor: "#00bcd4",
  },
  {
    id: "17",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 10",
    iconBackgroundColor: "#757575",
  },
  {
    id: "18",
    sender: "Udemy",
    subject: "Complete Python Bootcamp: Go from zero to hero",
    time: "Sep 9",
    iconBackgroundColor: "#f44336",
  },
  {
    id: "19",
    sender: "Google",
    subject: "Security alert for edwinfedora",
    time: "Sep 8",
    iconBackgroundColor: "#fbc02d",
  },
];

// Komponen untuk render setiap item email
const EmailItem = ({ item }) => (
  <View style={styles.emailItem}>
    <View
      style={[
        styles.iconContainer,
        { backgroundColor: item.iconBackgroundColor },
      ]}
    >
      <Text style={styles.iconText}>{item.sender.charAt(0)}</Text>
    </View>
    <View style={styles.emailDetails}>
      <Text style={styles.senderText}>{item.sender}</Text>
      <Text style={styles.subjectText}>{item.subject}</Text>
    </View>
    <View style={styles.rightSection}>
      <Text style={styles.timeText}>{item.time}</Text>
      <FontAwesome name="star-o" size={20} color="#000" />
    </View>
  </View>
);

const Home = () => {
  return (
    <>
      <Text style={styles.primary}>Primary</Text>
      <FlatList
        data={emails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EmailItem item={item} />}
        style={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
    paddingTop: 0,
  },
  emailItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  iconText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  emailDetails: {
    flex: 1,
  },
  senderText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  subjectText: {
    color: "#555",
    fontSize: 14,
    marginTop: 2,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  timeText: {
    color: "#777",
    fontSize: 12,
    marginBottom: 5,
  },
  primary: {
    color: "#000",
    fontSize: 16,
    marginLeft: 15,
    marginTop: 10,
  },
});

export default Home;
