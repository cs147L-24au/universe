import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Theme from "../assets/theme";

export default function ProfileCard() {
  const profileImage = require("../assets/images/profile.png");

  return (
    <View style={styles.card}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.title}>John Doe</Text>
      <Text style={styles.subtitle}>Joined 2 years ago</Text>
      <Text style={styles.body}>
        Passionate about creating impactful help for young students interested
        in the Arts!
      </Text>
      <View style={styles.buttonContainer}>
        {/* <<<<<<< HEAD */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Learn More Pressed")}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        {/* ======= */}
        {/* <Button
          title="Edit profile"
          onPress={() => console.log("Learn More Pressed")}
          color={Theme.colors.primary}
        /> */}
        {/* >>>>>>> 5065994 (Changed font for insight page) */}
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
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
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
    // fontWeight: "bold",
    fontFamily: "Outfit-Bold",
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
  button: {
    backgroundColor: "#8294C4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Outfit-Bold",
    fontSize: 16,
  },
});
