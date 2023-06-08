import { View } from "react-native";

export default function BoardLayout() {
  return (
    <View className="divide-y-4 divide-red-800 pointer-events-none absolute justify-center items-center w-full h-full flex-wrap box-border">
      {/* big box row*/}
      {Array(3)
        .fill("")
        .map((_, i) => (
          <View
            key={i}
            className=" w-full basis-1/3 divide-x-4 flex-row divide-red-800  box-border"
          >
            {/* big box Col*/}
            {Array(3)
              .fill("")
              .map((_, i) => (
                <View className="w-full basis-1/3">
                  <View className="divide-y-2 divide-green-800 pointer-events-none absolute justify-center items-center w-full h-full flex-wrap box-border">
                    {/* small box row */}
                    {Array(3)
                      .fill("")
                      .map((_, i) => (
                        <View
                          key={i}
                          className=" w-full basis-1/3 divide-x-2 flex-row divide-green-800  box-border"
                        >
                          {/* small box col */}
                          {Array(3)
                            .fill("")
                            .map((_, i) => (
                              <View className="w-full basis-1/3"></View>
                            ))}
                        </View>
                      ))}
                  </View>
                </View>
              ))}
          </View>
        ))}
    </View>
  );
}
