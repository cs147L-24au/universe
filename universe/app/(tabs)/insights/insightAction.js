import React from "react";
import InsightAction from "../../../components/InsightAction";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function InsightDetailPage() {
  const router = useRouter();

  // Hardcoded insight details
  const insight = {
    priority: "High Priority",
    action: "Improve extracurricular activities",
    recommendation: {
      title: "Join the debate team",
      details: `Sarah has very good writing skills but relatively weak in speaking. \n
This experience could make her a more well-rounded applicant, highlighting her capacity to engage with diverse topics and excel outside her primary interests.`,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity> */}

      {/* Render the InsightAction component */}
      <InsightAction
        priority={insight.priority}
        action={insight.action}
        recommendation={insight.recommendation}
      />
    </SafeAreaView>
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
  backButtonText: {
    fontSize: 16,
    color: "#345DA7",
    fontWeight: "bold",
  },
});
