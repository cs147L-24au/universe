import React, { useContext, useState } from "react";
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
import { useGlobalSearchParams, useRouter } from "expo-router";
import StudentCardDetailed from "../../../components/StudentCard"; // Adjust path if necessary
import { StudentContext } from "../../StudentContext"; // Import StudentContext

export default function MessageScreen() {
  const router = useRouter();
  const { id } = useGlobalSearchParams(); // Retrieve the student ID from query params
  const { students, markStudentAsMessaged } = useContext(StudentContext); // Use context
  const student = students.find((item) => item.id.toString() === id);

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    markStudentAsMessaged(student.id); // Mark student as messaged
    router.push(`/success?id=${student.id}`);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <StudentCardDetailed profile={student} />
          <Text style={styles.messageLabel}>Your Message:</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce yourself..."
            placeholderTextColor="#AAA"
            fontFamily="Outfit"
            multiline={true}
            value={message}
            onChangeText={setMessage}
            returnKeyType="done"
            onSubmitEditing={dismissKeyboard}
            textAlignVertical="top"
          />
          <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
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
    height: 150,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#304674",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Outfit-SemiBold",
  },
});
