import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import Theme from "../assets/theme";

export default function ProfileCard() {
  const profileImage = require("../assets/images/avatar.png"); // Static hardcoded image

  return (
    <View style={styles.card}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.title}>John Doe</Text>
      <Text style={styles.subtitle}> joined 2 years ago</Text>
      <Text style={styles.body}>
        Passionate about creating impactful help for young idiots who don't know better
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Learn More" onPress={() => console.log("Learn More Pressed")} color={Theme.colors.primary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.lightPurple,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 1,
    elevation: 3,
    alignItems: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Outfit",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Outfit",
    marginBottom: 10,
  },
  body: {
    fontSize: 14,
    color: "#333",
    fontFamily: "Outfit",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    alignSelf: "flex-end",
  },
});
