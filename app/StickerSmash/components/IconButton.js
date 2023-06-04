import { Pressable, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={24} color="white" />
      <Text
        style={{
          color: "white",
          marginTop: 12,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
