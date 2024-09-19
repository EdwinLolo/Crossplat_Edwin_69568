import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import userData from "./data.json";
import styles from "./appStyle.styles.js";

export default function App() {
  return (
    <ScrollView>
      {userData.map((users) => {
        return (
          <View style={styles.container} key={users.name}>
            <View style={styles.card}>
              <Image style={styles.avatar} source={{ uri: users.photo_url }} />
              <View style={styles.boldText}>
                <Text style={styles.boldText}>{users.name}</Text>
                <Text>{users.email}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
