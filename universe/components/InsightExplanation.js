import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const insightDetails = {
  "Improve extracurricular activities": {
    priority: "High Priority",
    explanation: `Students who got into Sarah's target school have 3 extracurricular activities on average. Sarah currently has 1 extracurricular activity.`,
    importance: `Extracurricular activities enhance college applications by showcasing a student's interests, leadership, and commitment beyond academics.`,
  },
  "Refine Personal Statement": {
    priority: "Medium Priority",
    explanation: `Admissions officers value personal statements that are authentic and well-written. Sarah's statement needs refinement to better communicate her unique story.`,
    importance: `A compelling personal statement can differentiate Sarah from other applicants and highlight her strengths.`,
  },
  "Improve interview skills": {
    priority: "Low Priority",
    explanation: `Interview performance can be improved by practicing responses to common questions and demonstrating confidence.`,
    importance: `Strong interview skills can help Sarah leave a positive impression on admissions committees.`,
  },
};

export default function InsightExplanation({ action }) {
  const details = insightDetails[action];
  const router = useRouter();

  if (!details) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Explanation Found</Text>
        <Text style={styles.subtitle}>
          The explanation for "{action}" does not exist.
        </Text>
      </View>
    );
  }

  const handleActionPress = (insight) => {
    // console.log("Navigating to insightDetail with:", insight); // Debug the data
    router.push({
      pathname: "/insights/insightAction", // Adjust the path
      //   params: {
      //     priority: insight.priority,
      //     action: insight.action,
      //   },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.pieContainer}>
        <Image
          source={require("../assets/images/newspider.png")} // Replace with actual avatar image
          style={styles.pie}
        />
      </View>
      {/* Priority Header */}
      <View style={styles.priorityCard}>
        <Text style={styles.priority}>{details.priority}</Text>
        <Text style={styles.action}>{action}</Text>
      </View>

      {/* Explanation Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailsHeader}>Explanation</Text>
        <View style={styles.textBox}>
          <Text style={styles.detailsText}>{details.explanation}</Text>
          <Text style={styles.detailsText}>{details.importance}</Text>
        </View>
        <TouchableOpacity
          style={styles.recommendedButton}
          onPress={() => handleActionPress()}
        >
          <Text style={styles.recommendedText}>See recommended actions</Text>
        </TouchableOpacity>
      </View>

      {/* Recommended Actions
      <TouchableOpacity
        style={styles.recommendedButton}
        onPress={() => handleActionPress()}
      >
        <Text style={styles.recommendedText}>See recommended actions</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  priorityCard: {
    backgroundColor: "#304674",
    borderRadius: 15,
    padding: 20,
    marginBottom: 40,
    alignItems: "center",
  },
  priority: {
    fontSize: 18,
    // fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
    fontFamily: "Outfit-Bold",
  },
  action: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Outfit",
  },
  detailsSection: {
    backgroundColor: "#DBDFEA",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    flexDirection: "column",
    alignItems: "center",
  },
  detailsHeader: {
    fontSize: 18,
    // fontWeight: "bold",
    color: "#2C2C54",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Outfit-Bold",
  },
  detailsText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    marginBottom: 15, // Space between paragraphs
    textAlign: "justify", // Optional: Justify text for better paragraph alignment
    fontFamily: "Outfit",
  },
  recommendedButton: {
    backgroundColor: "#304674",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    // borderWidth: 1,
    // borderColor: 'red',
    // width: 300,
  },
  recommendedText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Outfit",
  },
  pie: {
    width: 200,
    height: 200,
    // borderRadius: 100,
    marginBottom: 30,
  },
  pieContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    borderRadius: 10,
    margin: 15,
  },
});
