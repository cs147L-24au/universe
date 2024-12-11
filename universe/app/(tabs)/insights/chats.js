import React from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const chats = [
  {
    id: "1",
    name: "Sarah W.",
    lastMessage: "I'd love to work with you.",
    time: "14:32",
    unreadCount: 1,
  },
  {
    id: "2",
    name: "John L.",
    lastMessage: "Let's schedule our first meeting!",
    time: "13:20",
    unreadCount: 1,
  },
  {
    id: "3",
    name: "Liam O.",
    lastMessage: "Thanks for the feedback!",
    time: "11:45",
    unreadCount: 1,
  },
  {
    id: "4",
    name: "Jack P.",
    lastMessage: "Sounds great!",
    time: "10:15",
    unreadCount: 0,
  },
  {
    id: "5",
    name: "Gill S.",
    lastMessage: "Looking forward to it!",
    time: "09:05",
    unreadCount: 3,
  },
  {
    id: "6",
    name: "Samuel L.",
    lastMessage: "See you soon!",
    time: "Yesterday",
    unreadCount: 0,
  },
  {
    id: "7",
    name: "Doug T.",
    lastMessage: "Got it, thanks!",
    time: "Yesterday",
    unreadCount: 0,
  },
  {
    id: "8",
    name: "Jude P.",
    lastMessage: "Let me know your thoughts.",
    time: "Yesterday",
    unreadCount: 1,
  },
];

export default function Chats() {
  const router = useRouter();

  const handleChatPress = (chat) => {
    router.push({
      pathname: "insights/chatDetail",
      params: { id: chat.id, name: chat.name },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.header}>Messages</Text> */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatCard}
            onPress={() => handleChatPress(item)}
          >
            <Image
              source={require("../../../assets/images/boy1.png")} // Replace with an actual avatar image
              style={styles.avatar}
            />
            <View style={styles.chatContent}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.time}>{item.time}</Text>
              {item.unreadCount > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCount}>{item.unreadCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20, // Added horizontal padding
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#2C2C54",
    fontFamily: "Outfit-Bold",
  },
  chatCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E7",
    paddingHorizontal: 20, // Added internal horizontal padding for chat card
    borderRadius: 8, // Optional: Rounded corners for better spacing aesthetics
    marginHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatContent: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    fontFamily: "Outfit-Bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "#888",
    fontFamily: "Outfit",
  },
  chatInfo: {
    alignItems: "flex-end",
  },
  time: {
    fontSize: 12,
    color: "#888",
    marginBottom: 5,
    fontFamily: "Outfit",
  },
  unreadBadge: {
    backgroundColor: "#EB4D3D",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  unreadCount: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});
