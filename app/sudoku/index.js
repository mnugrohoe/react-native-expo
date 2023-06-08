import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Sudoku() {
  const [board, setBoard] = useState([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ]);
  // const [board, setBoard] = useState([
  //   ["0-0", "0-1", "0-2", "0-3", "0-4", "0-5", "0-6", "0-7", "0-8"],
  //   ["1-0", "1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-8"],
  //   ["2-0", "2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7", "2-8"],
  //   ["3-0", "3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8"],
  //   ["4-0", "4-1", "4-2", "4-3", "4-4", "4-5", "4-6", "4-7", "4-8"],
  //   ["5-0", "5-1", "5-2", "5-3", "5-4", "5-5", "5-6", "5-7", "5-8"],
  //   ["6-0", "6-1", "6-2", "6-3", "6-4", "6-5", "6-6", "6-7", "6-8"],
  //   ["7-0", "7-1", "7-2", "7-3", "7-4", "7-5", "7-6", "7-7", "7-8"],
  //   ["8-0", "8-1", "8-2", "8-3", "8-4", "8-5", "8-6", "8-7", "8-8"],
  // ]);
  const [activeNum, setActiveNum] = useState(null);
  const [activeCell, setActiveCell] = useState({ row: null, col: null });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
      }}
    >
      <View className="w-full aspect-square">
        <View className="divide-y-4 divide-red-800 pointer-events-none justify-center items-center  flex-wrap box-border">
          {Array(3)
            .fill("")
            .map((_, i) => (
              // big box row render
              <View
                key={i}
                className="basis-1/3 divide-x-4 flex-row divide-red-800  box-border"
              >
                {Array(3)
                  .fill("")
                  .map((_, j) => (
                    // big box Col render
                    <View
                      key={j}
                      className="basis-1/3 justify-center items-center divide-y-2 divide-sky-100 pointer-events-none flex-wrap box-border"
                    >
                      {Array(3)
                        .fill("")
                        .map((_, ii) => (
                          // small box row render
                          <View
                            key={ii}
                            className="basis-1/3 divide-x-2 flex-row divide-sky-100 box-border"
                          >
                            {Array(3)
                              .fill("")
                              .map((_, jj) => {
                                const rowIndex = 3 * i + ii;
                                const colIndex = 3 * j + jj;
                                const cell = board[rowIndex][colIndex];

                                return (
                                  // small box Col render
                                  <View key={jj} className="basis-1/3">
                                    {/* render cell */}
                                    <Pressable
                                      onPress={() => {
                                        setActiveNum(cell);
                                        setActiveCell([rowIndex, colIndex]);
                                      }}
                                      style={({ pressed }) => ({
                                        backgroundColor:
                                          (activeCell.row === rowIndex &&
                                            activeCell.col === colIndex) ||
                                          pressed
                                            ? "royalblue"
                                            : activeNum === cell
                                            ? "green"
                                            : "white",
                                        justifyContent: "center",
                                        width: "100%",
                                        height: "100%",
                                        alignItems: "center",
                                      })}
                                    >
                                      {({ pressed }) => (
                                        <Text
                                          style={{
                                            color:
                                              pressed || activeNum === cell
                                                ? "white"
                                                : "black",
                                            fontSize: 24,
                                          }}
                                        >
                                          {cell}
                                        </Text>
                                      )}
                                    </Pressable>
                                  </View>
                                );
                              })}
                          </View>
                        ))}
                    </View>
                  ))}
              </View>
            ))}
        </View>
      </View>
      <View className="flex-row w-full gap-x-2 gap-y-4 flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "X"].map((n, i, a) => (
          <StyledPressable
            key={i}
            onPress={() => {
              setActiveNum(Number(n) ? n : null);
            }}
            // style={({ pressed }) => ({
            //   flex: 1,
            //   justifyContent: "center",
            //   flexBasis: "16,66667%",
            //   alignItems: "center",
            //   borderWidth: 1,
            //   aspectRatio: 1,
            //   position: "relative",
            //   backgroundColor: pressed ? "green" : "gray",
            // })}
            className={`flex-1 justify-center items-center border aspect-square relative basis-1/6  active:bg-sky-200`}
          >
            <Text className="text-4xl">{n}</Text>
            <Text
              className={`absolute top-0 right-0 -translate-x-1 -translate-y-2 rounded-full border bg-white px-1.5 box-border border-neutral-300 text-neutral-500 text-xs aspect-square ${
                i === a.length - 1 ? "hidden" : ""
              }`}
            >
              {9 - board.flat().filter((num) => num === n).length}
            </Text>
          </StyledPressable>
        ))}
      </View>
    </View>
  );
}
