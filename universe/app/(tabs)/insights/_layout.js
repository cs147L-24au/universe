import { Stack } from "expo-router/stack";

export default function Layout() {
  console.log("Rendering Insights Stack Layout");
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide headers globally
      }}
    >
      <Stack.Screen
        name="insights"
        options={{
          title: "Students", // Title for the index screen
        }}
      />
      <Stack.Screen
        name="insightProfile"
        options={{
          title: "AI Insights on Student", // Title for the details screen
          headerShown: true, // Show header for the details screen
          headerTitleAlign: "center",
          
        }}
      />
      <Stack.Screen
        name="insightDetail"
        options={{
          // presentation: "modal",
          title: "AI Insights on Student", // Title for the new post screen
          headerShown: true, // Show header for the new post screen
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="insightAction"
        options={{
          // presentation: "modal",
          title: "AI Insights on Student", // Title for the new post screen
          headerShown: true, // Show header for the new post screen
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="insightSend"
        options={{
          presentation: "transparentModal", // Modal presentation with transparent background
          headerShown: false, // Hide the header
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
