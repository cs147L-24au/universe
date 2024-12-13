import React, { useState, useEffect } from "react";
import { useGlobalSearchParams } from "expo-router";
import InsightAction from "../../../components/InsightAction";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC4rq1wonPMu4D1NxRIFG6U1D__JFbuklM"; // Replace with your actual API key

export default function InsightDetailPage() {
  const router = useRouter();
  const { action } = useGlobalSearchParams();
  const { priority } = useGlobalSearchParams();
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendation = async () => {
      if (!action) {
        setError("No action specified.");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const chat = model.startChat();

        const prompt = `Generate a detailed college application recommendation for improving "${action}". 
        Provide a title for the recommendation, the title should just be the action itself, and then the details explaining the recommendation. 
        keep the response within 50 words.
        I want the recommended action to be something really specific and concrete. make sure the action recommended is relevant to "${action}" `;

        const result = await chat.sendMessage(prompt);
        const response = result.response;
        console.log("API Response:", response.text());

        if (response) {
          const text = await response.text();
          const parts = text.split("\n").filter((line) => line.trim());
          const title = parts[0]?.trim() || "No title available";
          const details =
            parts.slice(1).join("\n").trim() || "No details available";

          setInsight({
            priority,
            recommendation: { title, details },
          });
        }
      } catch (err) {
        setError(err.message);
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendation();
  }, [action]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#345DA7" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  if (!insight) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>
          No insight available for the action: "{action}"
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <InsightAction
        priority={insight.priority}
        action={action}
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
  errorText: {
    fontSize: 18,
    color: "#FF0000",
    textAlign: "center",
    marginTop: 20,
  },
});
