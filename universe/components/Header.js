import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={32} color={"black"} />
      </TouchableOpacity>
      <Text style={styles.title}>{}</Text>
    </View>
  );
};

<Stack.Screen
  name="insideClass/lessons"
  options={({ route }) => ({
    title: route.params?.headerTitle,
    headerTitleAlign: "center",
    headerLeft: () => (
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={32} color={"black"} />
      </TouchableOpacity>
    ),
  })}
/>;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Header;
