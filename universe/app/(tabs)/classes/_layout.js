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
          title: "My Classes",
          headerTitleAlign: "center",
          // headerShown: false,
        }}
      />
    </Stack>
  );
}
