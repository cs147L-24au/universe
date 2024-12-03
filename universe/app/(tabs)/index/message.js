import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useGlobalSearchParams } from "expo-router";
import StudentCardDetailed from "../../../components/StudentCard"; // Adjust path if necessary
import STUDENT_DATA from "../../data/StudentData.json"; // Adjust path if necessary
import { useRouter } from "expo-router";

export default function MessageScreen() {
  const router = useRouter();

  const { id } = useGlobalSearchParams(); // Retrieve the student ID from query params
  const student = STUDENT_DATA.find((item) => item.id.toString() === id);

  console.log("Student ID from params:", id); // Debug ID
  console.log("Student found:", student); // Debug the student object

  if (!student) {
    console.warn("No student found for the given ID:", id);
  }

  const [message, setMessage] = useState("");

  // Dismiss keyboard on return or outside touch
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Reset navigation stack when switching tabs or navigating back to "find/index"
  useEffect(() => {
    const unsubscribe = router.events?.addListener("focus", (event) => {
      if (event?.routeName === "find") {
        router.replace("/find/index"); // Reset stack to ensure clean navigation
      }
    });

    return () => {
      unsubscribe?.(); // Cleanup listener when component unmounts
    };
  }, [router]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <StudentCardDetailed profile={student} />
          <Text style={styles.messageLabel}>Your Message:</Text>
          <TextInput
            style={styles.input}
            placeholder={`Introduce yourself, your student's potential classmates and class structure!`}
            placeholderTextColor="#AAA"
            multiline={true}
            value={message}
            onChangeText={setMessage}
            returnKeyType="done"
            onSubmitEditing={dismissKeyboard}
            textAlignVertical="top" // Start text at the top of the input box
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              try {
                // router.push("/find/success"); // Ensure the route matches your structure
                router.push(`/find/success?id=${student.id}`);
              } catch (error) {
                console.error("Navigation Error:", error);
              }
            }}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  messageLabel: {
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: "#000",
    textAlignVertical: "top",
    width: "100%",
    height: 150, // Fixed height for the input box
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#304674",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    // alignSelf: "stretch",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Outfit-SemiBold",
  },
});
