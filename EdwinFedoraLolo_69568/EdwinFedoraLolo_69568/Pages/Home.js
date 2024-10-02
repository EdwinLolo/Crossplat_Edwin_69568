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
    iconBackgroundColor: "#4caf50", // Warna hijau untuk ikon
  },
  {
    id: "2",
    sender: "Updates",
    subject: "Shopee — Kak, Kiriman Anda sedang dalam perjalanan",
    time: "Sep 30",
    iconBackgroundColor: "#ff9800", // Warna oranye untuk ikon
  },
  {
    id: "3",
    sender: "Google",
    subject: "Security alert for edwinfedora",
    time: "Sep 30",
    iconBackgroundColor: "#fbc02d", // Warna kuning untuk ikon
  },
  {
    id: "4",
    sender: "Google Play",
    subject: "Your Google Play Order Receipt",
    time: "Sep 29",
    iconBackgroundColor: "#00bcd4", // Warna biru untuk ikon
  },
  {
    id: "5",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
  },
  {
    id: "6",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
  },
  {
    id: "7",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
  },
  {
    id: "8",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
  },
  {
    id: "9",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
  },
  {
    id: "10",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
  },
  {
    id: "11",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
  },
  {
    id: "12",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
  },
  {
    id: "13",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
  },
  {
    id: "14",
    sender: "Opera Software",
    subject: "New sign-in to your Opera account",
    time: "Sep 25",
    iconBackgroundColor: "#757575", // Warna abu-abu untuk ikon
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
      <FontAwesome name="star-o" size={20} color="#fff" />
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

// Style untuk komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Warna latar belakang gelap
    padding: 10,
    paddingTop: 0, // Menghapus padding atas
  },
  emailItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#333", // Garis pemisah antar email
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
    color: "#fff", // Warna teks untuk ikon
    fontSize: 18,
    fontWeight: "bold",
  },
  emailDetails: {
    flex: 1, // Memastikan bagian detail email mengambil sisa ruang
  },
  senderText: {
    color: "#fff", // Warna nama pengirim
    fontSize: 16,
    fontWeight: "bold",
  },
  subjectText: {
    color: "#bbb", // Warna isi email singkat
    fontSize: 14,
    marginTop: 2,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  timeText: {
    color: "#bbb", // Warna teks waktu
    fontSize: 12,
    marginBottom: 5,
  },
  primary: {
    color: "#fff", // Warna teks untuk judul
    fontSize: 16,
    marginLeft: 15,
    marginTop: 10,
  },
});

export default Home;
