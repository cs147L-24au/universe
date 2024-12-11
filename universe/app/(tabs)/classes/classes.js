import React, { createContext, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
  Alert,
} from "react-native";
import { useRouter } from "expo-router"; // Use useRouter for navigation
import EditButton from "../../../components/EditButton";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { useData } from "./DataContext";

const ClassButton = ({ title, onPress, showDelete, onDelete }) => (
  <View style={styles.classButtonContainer}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.classButton}
      activeOpacity={0.7}
    >
      <View style={styles.buttonContainer}>
        <Image
          source={require("../../../assets/images/blue.png")}
          style={styles.planetImage}
          resizeMode="contain"
        />
        <View style={styles.textOverlay}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
    {showDelete && (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onDelete}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    )}
  </View>
);

const ClassesInterface = () => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false); // Track edit mode state
  // const [data, setData] = useState(ClassroomData); // Manage the classroom data
  const navigation = useNavigation();
  const { classes, deleteClass } = useData();

  const handleClassPress = (item) => {
    router.push({
      pathname: "classes/insideClass/topNav",
      params: { headerTitle: item.name, classroomID: item.dataID },
    });
  };

  const handleEditPress = () => {
    setEditMode((prev) => !prev); // Toggle edit mode
  };

  const handleAddNew = () => {
    navigation.navigate("newClassModal");
  };

  /*
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id)); // Remove item by ID
  };
  */

  const showAlert = (id) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => deleteClass(id),
          style: "destructive", // iOS only - makes the button red
        },
      ],
      { cancelable: true } // Android only - allows tap outside to dismiss
    );
  };

  const renderItem = ({ item }) => {
    if (item.id === -1 && editMode) {
      return (
        <TouchableOpacity
          style={styles.classButton}
          activeOpacity={0.7}
          onPress={handleAddNew}
        >
          <View style={styles.buttonContainer}>
            <Image
              source={require("../../../assets/images/blue.png")}
              style={styles.addPlanetImage}
              resizeMode="contain"
            />
            {/* Overlay container for centered text */}
            <View style={styles.textOverlay}>
              <Text style={styles.addNewText}>+</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else if (item.id === -1) {
      return;
    } else {
      return (
        <ClassButton
          title={item.name}
          onPress={() => handleClassPress(item)}
          showDelete={editMode} // Show delete button only in edit mode
          onDelete={() => showAlert(item.id)} // Handle delete action
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridContainer}>
        <FlatList
          data={classes}
          contentContainerStyle={{ gap: VERTICAL_SPACING }}
          columnWrapperStyle={{ gap: HORIZONTAL_SPACING }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>

      <EditButton
        onPress={handleEditPress}
        isEditMode={editMode}
        isClasses={true}
      />
    </SafeAreaView>
  );
};

const { width } = Dimensions.get("window");
const BUTTON_SIZE = width * 0.35;
const HORIZONTAL_SPACING = width * 0.12;
const VERTICAL_SPACING = HORIZONTAL_SPACING;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gridContainer: {
    flex: 1,
    margin: width * 0.08,
    paddingTop: VERTICAL_SPACING * 0.3,
  },
  classButtonContainer: {
    alignItems: "center",
  },
  classButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  planetImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  addNewText: {
    fontFamily: "Outfit",
    fontSize: 100,
  },
  addPlanetImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    tintColor: "#BEBEBE",
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    padding: 20,
    fontFamily: "Outfit",
  },
  deleteButton: {
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "#EB4D3D",
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#EB4D3D",
    fontFamily: "Outfit-Bold",
    // fontWeight: "bold",
    fontSize: 12,
  },
});

export default ClassesInterface;
