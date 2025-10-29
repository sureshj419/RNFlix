import { Stack } from "expo-router";
import "./globals.css"
import Search from "@/app/(tabs)/search";

export default function RootLayout() {
  return (
      <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
  </Stack>
  );
}
