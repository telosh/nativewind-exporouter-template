import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/Themed/ThemedText";
import { ThemedView } from "@/components/Themed/ThemedView";

export default function Index() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons size={48} name="tailwind" color="#1AB3BA" />
      <ThemedText className="text-2xl font-bold underline">Hello, NativeWind!</ThemedText>
    </ThemedView>
  );
}
