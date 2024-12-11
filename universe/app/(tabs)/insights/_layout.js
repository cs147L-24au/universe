import { Stack } from "expo-router/stack";

export default function Layout() {
  console.log("Rendering Insights Stack Layout");
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
      <Stack.Screen
        name="insights"
        options={{
          title: "Students", // Title for the index screen
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="insightProfile"
        options={{
          title: "AI Insights on Student", // Title for the details screen
          headerShown: true, // Show header for the details screen
          headerTitleAlign: "center",
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontFamily: "Outfit",
          },
        }}
      />
      <Stack.Screen
        name="insightDetail"
        options={{
          title: "AI Insights on Student",
          headerShown: true,
          headerTitleAlign: "center",
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontFamily: "Outfit",
          },
        }}
      />
      <Stack.Screen
        name="insightAction"
        options={{
          title: "AI Insights on Student",
          headerShown: true,
          headerTitleAlign: "center",
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontFamily: "Outfit",
          },
        }}
      />
      <Stack.Screen
        name="insightSend"
        options={{
          presentation: "transparentModal", // Modal presentation with transparent background
          headerShown: false, // Hide the header
        }}
      />
      <Stack.Screen
        name="chats"
        options={{
          title: "Chats", // Title for the Chats page
          headerTitleAlign: "center",
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontFamily: "Outfit",
          },
        }}
      />
    </Stack>
  );
}
