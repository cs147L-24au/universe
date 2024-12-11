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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";

const names = [
  // { name: "Sarah W.", isNew: true },
  { name: "John L.", isNew: true },
  { name: "Liam O.", isNew: true },
  { name: "Sarah W.", isNew: false },
  { name: "Jack P.", isNew: false },
  { name: "Gill S.", isNew: false },
  { name: "Samuel L.", isNew: false },
  { name: "Doug T.", isNew: false },
  { name: "Jude P.", isNew: false },
];

const InsightCard = ({ name, onPress, isNew }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(name)}>
    <Image
      source={require("../../../assets/images/boy1.png")} // Replace with actual avatar image
      style={styles.avatar}
    />
    <Text style={styles.cardName}>{name}</Text>
    <Text style={styles.cardDetails}>In: Extracurricular Activities</Text>
    {isNew && (
      <View style={styles.newBadge}>
        <Text style={styles.newText}>NEW</Text>
      </View>
    )}
  </TouchableOpacity>
);

export default function Insights() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(""); // Search query

  const handlePress = (name) => {
    router.push({
      pathname: "insights/insightProfile",
      params: { name },
    });
  };

  const handleChatPress = () => {
    router.push("insights/chats");
  };

  const filteredNames = names.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search student"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <Icon
            name="search"
            size={24}
            color="#999"
            style={styles.searchIcon}
          />
        </View>

        <TouchableOpacity
          onPress={handleChatPress}
          style={styles.chatIconContainer}
        >
          <FontAwesome name="comment" size={30} color={"#304674"} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredNames}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={({ item }) => (
          <InsightCard
            name={item.name}
            onPress={handlePress}
            isNew={item.isNew}
          />
        )}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    // borderWidth: 1,
    // borderColor: "red",
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#F0F0F5",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E4E4E7",
    fontFamily: "Outfit",
  },
  chatIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingBottom: 80,
  },
  card: {
    flex: 1,
    backgroundColor: "#DBDFEA",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F5",
    width: "85%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E4E4E7",
    marginTop: 8,
    marginRight: 15,
    marginLeft: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    fontSize: 16,
    fontFamily: "Outfit",
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
    fontFamily: "Outfit-Bold",
  },
  cardDetails: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    fontFamily: "Outfit",
  },
  newBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#EB4D3D",
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  newText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    fontFamily: "Outfit-Bold",
  },
});
