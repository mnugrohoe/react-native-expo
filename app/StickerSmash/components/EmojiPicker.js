import { Modal, View, Text, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import color from "../../../libs/colors";

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View
        style={{
          height: "25%",
          width: "100%",
          backgroundColor: color("neutral-700"),
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          position: "absolute",
          bottom: 0,
        }}
      >
        <View
          style={{
            height: "16%",
            backgroundColor: color("sky-900"),
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
            }}
          >
            Choose a sticker
          </Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="white" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}
