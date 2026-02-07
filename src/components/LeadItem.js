import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const LeadItem = ({ lead }) => {
  const handleCall = () => {
    if (lead.phone) {
      Linking.openURL(`tel:${lead.phone}`);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {lead.firstName[0]}
          {lead.lastName[0]}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>
          {lead.firstName} {lead.lastName}
        </Text>
        <Text style={styles.email}>{lead.email}</Text>
        <Text style={styles.phone}>
          {lead.phone || "No phone available"}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, !lead.phone && styles.disabled]}
        onPress={handleCall}
        disabled={!lead.phone}
      >
        <Text style={styles.buttonText}>Call</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeadItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  email: {
    fontSize: 13,
    color: "#666",
  },
  phone: {
    fontSize: 13,
    color: "#444",
    marginTop: 2,
  },
  button: {
    backgroundColor: "#10B981",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
