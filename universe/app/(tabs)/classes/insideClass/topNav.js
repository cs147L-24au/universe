import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LessonsScreen } from "./lessons";
import { StudentsScreen } from "./students";
import { StyleSheet } from "react-native";
import Theme from "../../../../assets/theme";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.textOptions,
        tabBarIndicatorStyle: {
          backgroundColor: Theme.colors.darkBlue,
        },
        tabBarActiveTintColor: Theme.colors.darkBlue,
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tab.Screen
        name="Lessons"
        component={LessonsScreen}
        options={{
          title: "Lessons",
        }}
      />
      <Tab.Screen
        name="Students"
        component={StudentsScreen}
        options={{
          title: "Students",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  textOptions: {
    fontFamily: "Outfit",
    fontSize: 17,
  },
});
