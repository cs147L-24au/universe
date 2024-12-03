import { useGlobalSearchParams } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import InsightExplanation from "../../../components/InsightExplanation";
import { useRouter } from "expo-router";

export default function InsightDetail() {
  const { priority, action } = useGlobalSearchParams();
  const router = useRouter();

  console.log("Received parameters:", { priority, action }); // Debugging

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity> */}

      {/* Profile Content */}
      <InsightExplanation action={action} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
  backButton: {
    position: "absolute", // Position it absolutely in the container
    top: 45, // Space from the top
    left: 15, // Space from the left
    flexDirection: "row", // Align arrow and text in a row
    alignItems: "center", // Vertically center the arrow and text
    zIndex: 1, // Ensure it's above other elements
  },
  backButtonText: {
    color: "#345DA7", // Subtle blue for the text
    fontSize: 16, // Reasonable font size
    fontWeight: "500", // Medium font weight
    marginLeft: 5, // Add a little space between the arrow and the text
  },
  backArrow: {
    fontSize: 18, // Slightly larger arrow
    color: "#345DA7", // Match the arrow color to the text
  },
});
