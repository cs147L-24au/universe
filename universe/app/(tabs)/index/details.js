import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useGlobalSearchParams } from "expo-router";
import StudentCardDetailed from "../../../components/StudentCardDetailed"; // Adjust path if necessary
import STUDENT_DATA from "../../data/StudentData.json"; // Adjust path if necessary
import { useRouter } from "expo-router";

export default function StudentDetails() {
  const router = useRouter();

  const { id, name } = useGlobalSearchParams(); // Retrieve the student ID from query params
  const student = STUDENT_DATA.find((item) => item.id.toString() === id);
  // const student = STUDENT_DATA.find((item) => item.id === Number(id));

  console.log(student);

  if (!student) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.errorText}>Student not found!</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>Student Details</Text> */}
      <View style={styles.cardContainer}>
        {/* Reuse StudentCard to display student details */}
        <StudentCardDetailed profile={student} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`/message?id=${student.id}`)}
      >
        <Text style={styles.buttonText}>Message {student.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 30,
    marginBottom: 80,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
    color: "black",
  },
  cardContainer: {
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    color: "black",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#304674",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Outfit-SemiBold",
    fontSize: 16,
  },
});
