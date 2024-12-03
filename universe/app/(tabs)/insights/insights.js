import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import Profile from "./insightProfile";
import { useRouter } from "expo-router";

const names = [
  { name: "Sarah W." },
  { name: "John L." },
  { name: "Liam O." },
  { name: "Jack P." },
  { name: "Gill S." },
  { name: "Samuel L." },
  { name: "Doug T." },
  { name: "Jude P." },
];

const InsightCard = ({ name, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(name)}>
    <Image
      source={require("../../../assets/images/avatar.png")} // Replace with actual avatar image
      style={styles.avatar}
    />
    <Text style={styles.cardName}>{name}</Text>
    <Text style={styles.cardDetails}>In: Extracurricular Activities</Text>
  </TouchableOpacity>
);

export default function Insights() {
  const router = useRouter();
  const [selectedName, setSelectedName] = useState(null); // State for selected name
  const [searchQuery, setSearchQuery] = useState(""); // Search query

  const handlePress = (name) => {
    // Navigate to the profile page with the name parameter
    // console.log("Navigating to profile with name:", name);
    router.push({
      pathname: "insights/insightProfile",
      params: { name }, // Pass the name parameter
    });
  };

  const handleCloseProfile = () => {
    setSelectedName(null);
  };

  const filteredNames = names.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {!selectedName ? (
        <>
          {/* Header */}
          <Text style={styles.headerText}>Students</Text>

          {/* Search Bar */}
          <TextInput
            style={styles.searchBar}
            placeholder="Search Student"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />

          {/* Recent and Layout Options */}
          <View style={styles.topRow}>
            <Text style={styles.recentText}>Recent</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Text style={styles.icon}>≡</Text> {/* List View Icon */}
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.icon}>▢</Text> {/* Grid View Icon */}
              </TouchableOpacity>
            </View>
          </View>

          {/* Grid of Insights */}
          <FlatList
            data={filteredNames}
            keyExtractor={(item) => item.name}
            numColumns={2} // Display two cards per row
            renderItem={({ item }) => (
              <InsightCard name={item.name} onPress={handlePress} />
            )}
            contentContainerStyle={styles.grid}
          />
        </>
      ) : (
        <Profile name={selectedName} onClose={handleCloseProfile} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "black",
    fontFamily: "Outfit-Bold",
    // fontWeight: '700',
  },
  searchBar: {
    backgroundColor: "#F0F0F5",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E4E4E7",
    marginHorizontal: 20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  recentText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#888",
    marginLeft: 10,
  },
  grid: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  card: {
    flex: 1,
    backgroundColor: "#DBDFEA",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15, // Horizontal margin for consistent spacing
    marginVertical: 15, // Vertical margin for consistent spacing
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});
