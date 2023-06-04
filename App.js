import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Sudoku from "./app/sudoku";
import StickerSmash from "./app/StickerSmash";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StickerSmash />
      <StatusBar style="auto" />
    </View>
  );
}
