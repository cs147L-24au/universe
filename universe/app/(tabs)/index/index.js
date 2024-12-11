import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import StudentCard from "../../../components/StudentCard"; // Adjust path if necessary
import { StudentContext } from "../../StudentContext"; // Import StudentContext
import { useRouter } from "expo-router";

export default function FeedPage() {
  const router = useRouter();
  const { students, messagedStudents } = useContext(StudentContext);

  const filteredStudents = students.filter(
    (student) => !messagedStudents.includes(student.id)
  );

  const handlePress = (student) => {
    // Navigate to the details page with student ID and name
    router.push(`/details?id=${student.id}`);
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <StudentCard
            profile={item}
            onPress={() =>
              handlePress(item)
            }
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  listContent: {
    padding: 20,
  },
});
