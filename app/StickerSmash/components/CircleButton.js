import { Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import color from "../../../libs/colors";

export default function CircleButton({ onPress }) {
  return (
    <View
      style={{
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: color("yellow-500"),
        borderRadius: 42,
        padding: 3,
      }}
    >
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 42,
          backgroundColor: "white",
        }}
        onPress={onPress}
      >
        <MaterialIcons name="add" size={38} color={color("neutral-800")} />
      </Pressable>
    </View>
  );
}
