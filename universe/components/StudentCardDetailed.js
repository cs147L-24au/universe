import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Theme from "../assets/theme";
import ImageAssets from "../assets/ImageAssets";

export default function StudentCard({ profile }) {
  return (
    <View style={styles.card}>
      <View style={styles.topText}>
        <Text style={styles.studentName}>{profile.name}</Text>
        <View style={styles.similarContainer}>
          <Text style={styles.similarText}>Most similar student:</Text>
          <Text style={styles.similarText}>{profile.similarStudent}</Text>
        </View>
      </View>
      <Image
        source={require("../assets/images/girl1.png")} // Adjust this to dynamically load images
        style={styles.profileImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.details}>
          <Text style={styles.label}>Academic Interests: </Text>
          {profile.academicInterests}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.label}>College targets: </Text>
          {profile.collegeTargets}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.label}>Seeking help on: </Text>
          {profile.seekingHelpOn}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.label}>Want a mentor who is: </Text>
          {profile.wantAMentorWhoIs}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: Theme.colors.lightPurple,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 1,
    elevation: 3,
  },
  topText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: "column",
    gap: 10, // Add consistent spacing between text rows
  },
  studentName: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },
  similarContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  similarText: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Outfit",
    textAlign: "right", // Align text to the right
  },
  details: {
    fontSize: 16,
    fontFamily: "Outfit",
    lineHeight: 22, // Ensure consistent line spacing
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Outfit",
    color: "#000",
  },
});
