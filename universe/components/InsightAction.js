import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function InsightAction({ priority, action, recommendation }) {
  const router = useRouter();
  const handleSendPress = (insight) => {
    // console.log("Navigating to insightDetail with:", insight); // Debug the data
    router.push({
      pathname: "/insights/insightSend", // Adjust the path
      //   params: {
      //     priority: insight.priority,
      //     action: insight.action,
      //   },
    });
  };
  return (
    <View style={styles.container}>
      {/* Back Button
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => console.log("Go Back")}
      >
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity> */}

      {/* Priority and Action Header */}
      <View style={styles.priorityCard}>
        <Text style={styles.priority}>{priority}</Text>
        <Text style={styles.action}>{action}</Text>
      </View>

      {/* Recommended Actions */}
      <Text style={styles.recommendationHeader}>Recommended Actions</Text>
      <View style={styles.recommendationCard}>
        <Text style={styles.recommendationTitle}>{recommendation.title}</Text>
        <Text style={styles.recommendationText}>{recommendation.details}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleSendPress()}>
          <Text style={styles.buttonText}>
            Send to student
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>See next action</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 18,
    color: "#345DA7",
    marginRight: 5,
  },
  backText: {
    fontSize: 16,
    color: "#345DA7",
    fontWeight: "bold",
  },
  priorityCard: {
    backgroundColor: "#304674",
    borderRadius: 15,
    padding: 20,
    marginBottom: 40,
    marginTop: 20,
    alignItems: "center",
  },
  priority: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  action: {
    fontSize: 16,
    color: "#EEE",
    textAlign: "center",
  },
  recommendationHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C2C54",
    marginBottom: 10,
    textAlign: "center",
    marginBottom: 30,
  },
  recommendationCard: {
    backgroundColor: "#DBDFEA", // Keep your provided color
    borderRadius: 10, // Slightly rounded corners for a paper-like effect
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000", // Black shadow for depth
    shadowOpacity: 0.2, // Subtle shadow to lift the card
    shadowRadius: 5, // Soft shadow
    shadowOffset: { width: 3, height: 3 }, // Shadow slightly offset for natural look
    elevation: 4, // Shadow effect for Android
    borderWidth: 1, // Adds a subtle border
    borderColor: "#C8C8D3", // Slightly darker shade for the border
    // transform: [{ rotate: "-3deg" }], // Slight rotation for casual, sticky note effect
  },

  recommendationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C2C54",
    marginBottom: 10,
    textAlign: "center",
  },
  recommendationText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    lineHeight: 22,
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  actionButton: {
    backgroundColor: "#304674",
    borderRadius: 10, // Rounded corners
    paddingVertical: 12,
    paddingHorizontal: 10,
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 0, height: 2 }, // Offset the shadow (x, y)
    shadowOpacity: 0.7, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
