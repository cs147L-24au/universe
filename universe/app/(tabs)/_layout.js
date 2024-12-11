import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Platform, View, Text, Button, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import LoginScreen from "../login";
import LoginInfo from "../login_info";
import SignupInfo from "../signup_info";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Theme from "@/assets/theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local state to simulate login
  const [showLoginInfo, setShowLoginInfo] = useState(""); // State for navigating between screens

  if (!isLoggedIn) {
    if (showLoginInfo === "login_info") {
      return (
        <LoginInfo
          onBack={() => setShowLoginInfo("login")}
          onLogin={() => setIsLoggedIn(true)}
        />
      );
    } else if (showLoginInfo === "signup_info") {
      return (
        <SignupInfo
          onBack={() => setShowLoginInfo("login")}
          onLogin={() => setIsLoggedIn(true)}
        />
      );
    } else {
      return (
        <LoginScreen
          onLogin={() => {
            setShowLoginInfo("login_info");
          }}
          onSignUp={() => {
            setShowLoginInfo("signup_info");
          }}
        />
      );
    }
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarActiveTintColor: "#304674", // Active tab icon color
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
        tabBarLabelStyle: {
          fontFamily: "Outfit-SemiBold", // Replace with your desired font family
          fontSize: 12, // Optional: Customize font size
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Find",
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome size={size} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: "Classes",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome size={size} name="book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Students",
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome size={size} name="group" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome size={size} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
