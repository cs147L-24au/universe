import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignupInfo({ onBack, onLogin }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonContainer} onPress={onBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Create Your Account:</Text>
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry/>
      <TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={onLogin}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
  },
  submitButton: {
    backgroundColor: "#345DA7",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
