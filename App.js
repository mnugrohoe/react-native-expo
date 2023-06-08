import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
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
      <Sudoku />
      <StatusBar style="auto" />
    </View>
  );
}
