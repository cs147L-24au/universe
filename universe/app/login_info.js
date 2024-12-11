import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginInfo({ onBack, onLogin }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButtonContainer} onPress={onBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Enter Your Login Information</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={onLogin}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 10,
  },
  backButtonContainer: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: "#E2E8F0",
    borderRadius: 5,
  },
  backButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Outfit-Bold",
  },
  title: {
    fontSize: 24,
    fontFamily: "Outfit-Bold",
    marginBottom: 20,
    marginTop: 60,
  },
  input: {
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    fontFamily: "Outfit",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#345DA7",
    textDecorationLine: "underline",
    marginBottom: 20,
    // alignSelf: "center",
    // marginRight: "10%",
    fontFamily: "Outfit",
  },
  submitButton: {
    backgroundColor: "#345DA7",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    // width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },
});
