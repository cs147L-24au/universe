import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Theme from "../assets/theme";
import ImageAssets from "../assets/ImageAssets";

export default function StudentCard({ profile, onPress }) {
  if (!profile) {
    // Render nothing or fallback UI when profile is undefined
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No student information available</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.topText}>
        <Text style={styles.studentName}>{profile.name}</Text>
        <View style={styles.similarContainer}>
          <Text style={styles.similarText}>Most similar student:</Text>
          <Text style={styles.similarText}>{profile.similarStudent}</Text>
        </View>
      </View>
      <Image
        source={require("../assets/images/girl1.png")} // Adjust this dynamically
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
      </View>
    </TouchableOpacity>
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
    marginBottom: 10,
  },
  profileImage: {
    width: 200,
    height: 200,
    // borderRadius:,
    alignSelf: "center",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "column",
    gap: 8, // Consistent spacing between text rows
  },
  studentName: {
    fontSize: 22,
    // fontWeight: "bold",
    fontFamily: "Outfit-Bold",
    color: "#333",
  },
  similarContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  similarText: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Outfit",
  },
  details: {
    fontSize: 16,
    fontFamily: "Outfit",
    lineHeight: 20, // Consistent line spacing
    color: "#333",
  },
  label: {
    fontSize: 16,
    // fontWeight: "bold",
    fontFamily: "Outfit-Bold",
    color: "#000",
  },
});
