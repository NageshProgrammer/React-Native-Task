import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from "react-native";
import LeadCard from "../components/LeadCard";

const LeadsScreen = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.users);
        setFilteredLeads(data.users);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = leads.filter((lead) =>
      `${lead.firstName} ${lead.lastName}`
        .toLowerCase()
        .includes(text.toLowerCase())
    );
    setFilteredLeads(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CRM Leads</Text>

      <TextInput
        placeholder="Search leads..."
        value={search}
        onChangeText={handleSearch}
        style={styles.search}
      />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : filteredLeads.length === 0 ? (
        <Text style={styles.noResults}>No leads found</Text>
      ) : (
        <FlatList
          data={filteredLeads}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <LeadCard lead={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default LeadsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  search: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
  noResults: {
    textAlign: "center",
    marginTop: 30,
    color: "#666",
  },
});
