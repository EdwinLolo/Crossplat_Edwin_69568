import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Gmail</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <TouchableOpacity style={styles.drawerItemAllInbox}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="move-to-inbox" size={24} color="#000" />
            <Text style={styles.drawerItemText}>All Inbox</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="inbox" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Primary</Text>
          </View>
          <Text style={styles.notificationBadge}>99+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="local-offer" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Promotions</Text>
          </View>
          <Text style={[styles.notificationBadge, styles.greenBadge]}>
            953 new
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="group" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Social</Text>
          </View>
          <Text style={[styles.notificationBadge, styles.blueBadge]}>
            44 new
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="update" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Updates</Text>
          </View>
          <Text style={[styles.notificationBadge, styles.orangeBadge]}>
            152 new
          </Text>
        </TouchableOpacity>

        <Text style={styles.recentLabel}>Recent labels</Text>
        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="label-important" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Unwanted</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.recentLabel}>All labels</Text>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="star" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Starred</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="label-important" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Important</Text>
          </View>
          <Text style={styles.notificationBadge}>116</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="send" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Sent</Text>
          </View>
          <Text style={styles.notificationBadge}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="schedule" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Scheduled</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="outbox" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Outbox</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="drafts" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Draft</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="mail" size={24} color="#000" />
            <Text style={styles.drawerItemText}>All mail</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="report" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Spam</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="delete" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Trash</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="note" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Notes</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.recentLabel}>Google Apps</Text>
        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="calendar-today" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Calendar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="contacts" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Contacts</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.spacer} />

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="settings" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="help" size={24} color="#000" />
            <Text style={styles.drawerItemText}>Help & feedback</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: "#DDEEF6",
    flex: 1,
  },
  headerContainer: {
    // backgroundColor: "#f2f2f2",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ADBAC2",
  },
  headerText: {
    color: "#FF0000",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#DDEEF6",
  },
  drawerItemAllInbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ADBAC2",
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerItemRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  drawerItemText: {
    color: "#000",
    fontSize: 18,
    marginLeft: 10,
  },
  recentLabel: {
    paddingLeft: 20,
    marginVertical: 10,
    color: "#555",
  },
  notificationBadge: {
    color: "#041929",
    // backgroundColor: "#555",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  greenBadge: {
    backgroundColor: "#4CAF50",
  },
  blueBadge: {
    backgroundColor: "#2196F3",
  },
  orangeBadge: {
    backgroundColor: "#FF9800",
  },
  spacer: {
    borderTopWidth: 1,
    borderTopColor: "#ADBAC2",
  },
});

export default CustomDrawerContent;
