import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Ensure headers are visible for navigation
        headerStyle: {
          backgroundColor: "white", // Customize the header background color
        },
        headerTintColor: "black", // Arrow and text color
        headerTitleStyle: {
          fontFamily: "Outfit-Bold",
          color: "black",
          fontSize: 20,
          fontWeight: "bold",
        },
        headerBackTitle: "", // Explicitly set back title to an empty string
      }}
    >
      {/* Main Screen */}
      <Stack.Screen
        name="index"
        options={{
          title: "Recommended Students",
          headerTitleAlign: "center",
          // headerShown: false,
        }}
      />

      {/* Details Screen */}
      <Stack.Screen
        name="details"
        options={{
          title: "Student Details", // Title for the Details screen
          headerTitleAlign: "center",
          headerShown: true, // Show header for the main screen
          headerBackTitle: "Back", // Explicitly remove back button text
          // headerBackTitleVisible: false, // Ensure text is hidden
          headerBackTitleStyle: {
            fontFamily: "Outfit",
          },
        }}
      />
      <Stack.Screen
        name="message"
        options={{
          title: "Message Student", // Title for the Details screen
          headerTitleAlign: "center",
          headerShown: true, // Show header for the main screen
          headerBackTitle: "Back", // Explicitly remove back button text
          // headerBackTitleVisible: false, // Ensure text is hidden
          headerBackTitleStyle: {
            fontFamily: "Outfit",
          },
        }}
      />
      <Stack.Screen
        name="success"
        options={{
          title: "Request Sent", // Title for the Details screen
          headerTitleAlign: "center",
          headerShown: true, // Show header for the main screen
          headerBackTitle: "Back", // Explicitly remove back button text
          // headerBackTitleVisible: false, // Ensure text is hidden
          headerBackTitleStyle: {
            fontFamily: "Outfit",
          },
        }}
      />
    </Stack>
  );
}
