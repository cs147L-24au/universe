import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC4rq1wonPMu4D1NxRIFG6U1D__JFbuklM"; // Replace with your actual API key

export default function InsightAction({ priority, action, recommendation }) {
  const router = useRouter();
  const [currentRecommendation, setCurrentRecommendation] =
    useState(recommendation);
  const [loading, setLoading] = useState(false);

  const handleSendPress = () => {
    router.push({
      pathname: "/insights/insightSend",
    });
  };

  const fetchNextRecommendation = async () => {
    setLoading(true); // Start loading
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const chat = model.startChat();

      const prompt = `Generate a detailed college application recommendation for improving "${action}". 
      Provide a title for the recommendation, the title should just be the action itself, and then the details explaining the recommendation. 
      Keep the response within 50 words. I want the recommended action to be something really specific 
      and concrete. Make sure the action recommended is relevant to "${action}".`;

      const result = await chat.sendMessage(prompt);
      const response = result.response;

      console.log("API Response:", response.text());

      if (response) {
        const text = await response.text();
        const parts = text.split("\n").filter((line) => line.trim());
        const title = parts[0]?.trim() || "No title available";
        const details =
          parts.slice(1).join("\n").trim() || "No details available";

        setCurrentRecommendation({ title, details }); // Update with new recommendation
      }
    } catch (err) {
      console.error("Error fetching next recommendation:", err);
      Alert.alert(
        "Error",
        "Failed to fetch a new recommendation. Please try again."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <View style={styles.container}>
      {/* Priority and Action Header */}
      <View style={styles.priorityCard}>
        <Text style={styles.priority}>{priority}</Text>
        <Text style={styles.action}>{action}</Text>
      </View>

      {/* Recommended Actions */}
      <Text style={styles.recommendationHeader}>Recommended Actions</Text>
      <View style={styles.recommendationCard}>
        <Text style={styles.recommendationTitle}>
          {loading ? "Loading..." : currentRecommendation.title}
        </Text>
        <Text style={styles.recommendationText}>
          {loading
            ? "Please wait while we fetch the next action..."
            : currentRecommendation.details}
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton} onPress={handleSendPress}>
          <Text style={styles.buttonText}>Send to student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={fetchNextRecommendation}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>See next action</Text>
          )}
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
    color: "#FFF",
    marginBottom: 10,
    fontFamily: "Outfit-Bold",
  },
  action: {
    fontSize: 16,
    color: "#EEE",
    textAlign: "center",
    fontFamily: "Outfit",
  },
  recommendationHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "Outfit-Bold",
  },
  recommendationCard: {
    backgroundColor: "#DBDFEA",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    elevation: 4,
    borderWidth: 1,
    borderColor: "#C8C8D3",
  },
  recommendationTitle: {
    fontSize: 16,
    fontFamily: "Outfit-Bold",
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
    fontFamily: "Outfit",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  actionButton: {
    backgroundColor: "#304674",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Outfit-Bold",
  },
});
