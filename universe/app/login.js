import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ onLogin, onSignUp }) {
  const [isStudent, setIsStudent] = useState(null); // Local state for profile selection

  return (
    <LinearGradient
      colors={["#304674", "#8294C4"]} // Gradient colors
      locations={[0.45, 1.0]} // Gradient stops
      start={{ x: 0, y: 0 }} // Start point
      end={{ x: 0, y: 1 }} // End point
      style={styles.container}
    >
      <Image
        source={require("../assets/images/logo.png")} // Ensure the path to your logo is correct
        style={styles.logo}
      />

      {isStudent === null ? (
        <>
          <Text style={styles.title}>Choose Your Profile!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => setIsStudent(false)}
            >
              <Text style={styles.customButtonText}>Counselor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => setIsStudent(true)}
            >
              <Text style={styles.customButtonText}>Student</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.title}>
            Welcome {isStudent ? "Student" : "Counselor"}!
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.customButton} onPress={onLogin}>
              <Text style={styles.customButtonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customButton} onPress={onSignUp}>
              <Text style={styles.customButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  customButton: {
    backgroundColor: "#E2E8F0",
    padding: 15,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    marginBottom: 10,
  },
  customButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
