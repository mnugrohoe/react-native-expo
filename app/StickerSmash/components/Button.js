import { Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import color from "../../../libs/colors";

const Button = ({ label, theme, onPress }) => (
  <View
    style={{
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
      ...(theme === "primary"
        ? {
            borderWidth: 4,
            borderColor: color("yellow-500"),
            borderRadius: 18,
          }
        : {}),
    }}
  >
    <Pressable
      style={{
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        ...(theme === "primary" ? { backgroundColor: "white" } : {}),
      }}
      onPress={onPress}
    >
      {theme === "primary" && (
        <FontAwesome
          name="picture-o"
          size={18}
          color={color("neutral-800")}
          style={{ paddingRight: 8 }}
        />
      )}
      <Text
        style={{
          color: theme === "primary" ? color("neutral-800") : "white",
          fontSize: 16,
        }}
      >
        {label}
      </Text>
    </Pressable>
  </View>
);

export default Button;
