import { useState } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";

export default function Sudoku() {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const increament = (row, col) => {
    console.log(row, col);
    const updatedBoard = [...board];
    updatedBoard[row][col]++;
    setBoard(updatedBoard);
  };

  const maxWidth = Dimensions.get("window").height * 0.9;
  return (
    <View
      style={{
        flexDirection: "column",
        flexWrap: "nowrap",
        width: "100%",
        maxWidth,
      }}
    >
      {board.map((rows, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          {rows.map((col, colIndex) => (
            <View
              key={colIndex}
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                aspectRatio: 1,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "white",
              }}
            >
              <Pressable
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => increament(rowIndex, colIndex)}
              >
                <Text style={{ color: "white", width: "100%", height: "100%" }}>
                  {col}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
