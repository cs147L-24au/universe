import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Platform, View, Text, Button, StyleSheet } from "react-native";

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
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Find",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: "Classes",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Students",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
