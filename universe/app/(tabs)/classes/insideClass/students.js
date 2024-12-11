import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import Profile from "../../insights/insightProfile";
import { useRouter, useLocalSearchParams, Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import EditButton from "../../../../components/EditButton";
import { useData } from "../DataContext";

export function StudentsScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const [editMode, setEditMode] = useState(false); // Track edit mode state
  const { names, deleteName, addName } = useData();
  const { classroomID, headerTitle } = useLocalSearchParams();
  // const [selectedName, setSelectedName] = useState(null); // State for selected name
  const [searchQuery, setSearchQuery] = useState(""); // Search query

  {
    /* Not sure if we should be able to navigate from this page to the individual students pages */
  }

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.name !== id));
    deleteName(id);
    /*
    const newData = {
      id: Date.now().toString(),
      name: id,
      selected: false,
      inClass: false,
    };
    addName(newData);
    */
  };

  const showAlert = (name) => {
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
          onPress: () => handleDelete(name),
          style: "destructive", // iOS only - makes the button red
        },
      ],
      { cancelable: true } // Android only - allows tap outside to dismiss
    );
  };

  const InsightCard = ({ name }) => (
    <View style={styles.card}>
      <Image
        source={require("../../../../assets/images/boy1.png")} // Replace with actual avatar image
        style={styles.avatar}
      />
      <Text style={styles.cardName}>{name}</Text>
      {editMode && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => showAlert(name)}
          activeOpacity={0.7}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const filteredNames = names.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [data, setData] = useState(filteredNames);

  const navigateToLessons = () => {
    router.push({
      pathname: "classes/insideClass/lessons",
      params: { headerTitle, classroomID },
    });
  };

  const handleEditPress = () => {
    setEditMode((prev) => !prev); // Toggle edit mode
  };

  const renderItem = ({ item }) => {
    if (item.id === -1 && editMode) {
      return (
        <Link
          href="classes/insideClass/newStudentModal"
          style={styles.createNewCard}
        >
          <View style={styles.createPlusContainer}>
            <Text style={styles.addNewText}>+</Text>
          </View>
        </Link>
      );
    } else if (item.id === -1 || !item.inClass) {
      return;
    } else {
      return <InsightCard name={item.name} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      {/* <Text style={styles.headerText}>Students</Text> */}

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search student"
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Icon name="search" size={24} color="#999" style={styles.searchIcon} />
      </View>

      {/* Grid of Students */}
      <View style={styles.inner}>
        <FlatList
          data={names}
          keyExtractor={(item) => item.name}
          numColumns={2} // Display two cards per row
          renderItem={renderItem}
          contentContainerStyle={styles.grid}
        />
      </View>

      <EditButton onPress={handleEditPress} isEditMode={editMode} />
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
    // borderWidth: 1,
    // borderColor: "red",
    // paddingTop: 20,
  },
  inner: { flex: 1 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F5",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E4E4E7",
    margin: 16,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    fontSize: 16,
    fontFamily: "Outfit",
  },
  searchIcon: {
    marginLeft: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "black",
    fontFamily: "Outfit-Bold",
    // fontWeight: '700',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1e3a8a",
  },
  tabButtonText: {
    fontSize: 16,
    fontFamily: "Outfit",
    color: "#666",
  },
  tabButtonTextMain: {
    fontSize: 16,
    fontFamily: "Outfit-Bold",
    color: "#666",
  },
  activeTabText: {
    color: "#1e3a8a",
  },
  addNewText: {
    fontFamily: "Outfit",
    fontSize: 100,
  },
  header: {
    flexDirection: "row", // Horizontal layout
    justifyContent: "space-around", // Evenly distribute buttons
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  recentText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Outfit",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#888",
    marginLeft: 10,
  },
  grid: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingBottom: 80,
  },
  createNewCard: {
    backgroundColor: "#BEBEBE",
    width: width * 0.42,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15, // Horizontal margin for consistent spacing
    marginVertical: 15, // Vertical margin for consistent spacing
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  createPlusContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#DBDFEA",
    width: width * 0.42,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15, // Horizontal margin for consistent spacing
    marginVertical: 15, // Vertical margin for consistent spacing
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
    fontFamily: "Outfit-Bold",
  },
  cardDetails: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
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
    // fontWeight: "bold",
    fontSize: 12,
    fontFamily: "Outfit-Bold",
  },
});
