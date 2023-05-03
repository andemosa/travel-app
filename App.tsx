import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">Open up App.tsx to start working on your</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
