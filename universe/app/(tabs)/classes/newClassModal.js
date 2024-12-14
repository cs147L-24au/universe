import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useData } from "./DataContext";
import { useRouter } from "expo-router";
import Theme from "../../../assets/theme";

const NewClass = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();
  const { classes, addClass, setLessons } = useData();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      title: "Add Classroom",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  const handleSubmit = () => {
    const newID = Date.now().toString();
    const newData = {
      id: Number(newID),
      name: title,
    };
    const newLessonElement = { id: Number(newID), allData: [] };
    addClass(newData, newLessonElement);
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Subject</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              value={subject}
              onChangeText={setSubject}
            />
          </View>

          {/* Removed the Tags Input Field */}

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              multiline={true}
              numberOfLines={5}
              placeholder=""
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <SafeAreaView style={styles.doneButtonContainer}>
            <TouchableOpacity style={styles.doneButton} onPress={handleSubmit}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    flexGrow: 1, // Ensures scrollable content
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    fontFamily: "Outfit",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    fontFamily: "Outfit",
    backgroundColor: "white",
  },
  descriptionInput: {
    height: 200, // Shortened description box height
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Outfit",
    fontWeight: "600",
  },
  doneButtonContainer: {
    bottom: 0,
    position: "absolute",
    backgroundColor: "white",
    left: 0,
    right: 0,
  },
  doneButton: {
    backgroundColor: Theme.colors.darkBlue,
    margin: 16,
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  doneButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Outfit",
    fontWeight: "600",
  },
});

export default NewClass;
