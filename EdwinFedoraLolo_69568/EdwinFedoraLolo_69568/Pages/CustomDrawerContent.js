import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // Import MaterialIcons

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Gmail</Text>
      </View>

      {/* Scrollable Drawer Content */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Section: All Inbox */}
        <TouchableOpacity style={styles.drawerItemAllInbox}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="move-to-inbox" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>All Inbox</Text>
          </View>
        </TouchableOpacity>

        {/* Section: Primary */}
        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="inbox" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Primary</Text>
          </View>
          <Text style={styles.notificationBadge}>99+</Text>
        </TouchableOpacity>

        {/* Section: Promotions */}
        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="local-offer" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Promotions</Text>
          </View>
          <Text style={[styles.notificationBadge, styles.greenBadge]}>
            953 new
          </Text>
        </TouchableOpacity>

        {/* Section: Social */}
        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="group" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Social</Text>
          </View>
          <Text style={[styles.notificationBadge, styles.blueBadge]}>
            44 new
          </Text>
        </TouchableOpacity>

        {/* Section: Updates */}
        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="update" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Updates</Text>
          </View>
          <Text style={[styles.notificationBadge, styles.orangeBadge]}>
            152 new
          </Text>
        </TouchableOpacity>

        <Text style={styles.recentLabel}>Recent labels</Text>
        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="label-important" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Unwanted</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.recentLabel}>All labels</Text>

        {/* Spacer */}
        {/* <View style={styles.spacer} /> */}

        {/* Other Sections */}
        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="star" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Starred</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="label-important" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Important</Text>
          </View>
          <Text style={styles.notificationBadge}>116</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="send" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Sent</Text>
          </View>
          <Text style={styles.notificationBadge}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="schedule" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Scheduled</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="outbox" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Outbox</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="drafts" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Draft</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="mail" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>All mail</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="report" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Spam</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="delete" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Trash</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="note" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Notes</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.recentLabel}>Google Apps</Text>
        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="calendar-today" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Calendar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="contacts" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Contacts</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.spacer} />

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="settings" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <View style={styles.drawerItemRow}>
            <MaterialIcons name="help" size={24} color="#fff" />
            <Text style={styles.drawerItemText}>Help & feedback</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#000", // Dark background like Gmail header
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#2c2c2c",
  },
  drawerItemAllInbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Align vertically center
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Align vertically center
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerItemRow: {
    flexDirection: "row",
    alignItems: "center", // Align text and icon horizontally
  },
  drawerItemText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10, // Margin between icon and text
  },
  recentLabel: {
    paddingLeft: 20,
    marginVertical: 10,
    color: "#fff",
  },
  notificationBadge: {
    color: "#fff",
    backgroundColor: "#555",
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
    borderTopColor: "#444",
  },
});

export default CustomDrawerContent;
