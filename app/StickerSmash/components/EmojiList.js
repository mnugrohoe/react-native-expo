import { useState } from "react";
import { FlatList, Image, Platform, Pressable } from "react-native";
import emojis from "../../../assets/emojis";

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState(emojis);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={{
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image
              source={item}
              key={index}
              style={{
                width: 100,
                height: 100,
                marginRight: 20,
                objectFit: "contain",
              }}
            />
          </Pressable>
        );
      }}
    />
  );
}
