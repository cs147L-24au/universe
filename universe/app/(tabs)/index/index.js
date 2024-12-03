import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router"; // Use useRouter for navigation
import StudentCard from "../../../components/StudentCard";
import STUDENT_DATA from "../../data/StudentData.json"; // Adjust the path as needed
import Theme from "../../../assets/theme";

export default function RecommendedStudents() {
  const router = useRouter();

  const handlePress = (student) => {
    // Navigate to the details page with student ID and name
    router.push(`/find/details?id=${student.id}`);
  };

  return (
    <View style={styles.safeArea}>
      {/* <Text style={styles.header}>Recommended Students</Text> */}

      <FlatList
        data={STUDENT_DATA}
        renderItem={({ item }) => (
          <StudentCard profile={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",

    // paddingTop: 20,
  },
  header: {
    fontSize: Theme.sizes.textHeading,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    marginVertical: 20,
  },
  flatList: {
    paddingBottom: 80,
    paddingHorizontal: 30,
    gap: 30,
  },
});
