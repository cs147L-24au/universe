import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { useGlobalSearchParams } from "expo-router";
import STUDENT_DATA from "../../data/StudentData.json"; // Adjust path if necessary

export default function SuccessScreen() {
  const router = useRouter();

  const { id } = useGlobalSearchParams(); // Retrieve the student ID from query params
  const student = STUDENT_DATA.find((item) => item.id.toString() === id);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/success.png")} // Replace with your success image
        style={styles.image}
      />
      <Text style={styles.title}>Woo hoo!!</Text>
      <Text style={styles.subtitle}>
        Congrats! We have successfully sent your request.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace(`/`)} // Redirect back to "Find" screen
      >
        <Text style={styles.buttonText}>Find More Students</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
    marginBottom: 80,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Outfit-Bold',
    color: "#000",
    marginBottom: 10,
  },
  image: {
    width: 200, // Adjust to fit your design
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
    fontFamily: 'Outfit',
  },
  button: {
    backgroundColor: "#304674",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: 'Outfit-SemiBold'
  },
});
