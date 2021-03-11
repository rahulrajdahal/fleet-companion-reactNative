import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

const ToggleButton = () => {
  const [active, setActive] = React.useState(false);

  return (
    <TouchableOpacity
      style={{
        width: 60,
        height: 32,
        backgroundColor: active ? COLORS.success100 : COLORS.primary100,
        borderRadius: 16,
        justifyContent: "center",
      }}
      onPress={() => setActive((active) => !active)}
    >
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: active ? COLORS.success : COLORS.primary400,
          borderRadius: 16,
          alignSelf: active ? "flex-end" : "flex-start",
          marginHorizontal: 4,
          elevation: 0.3,
          shadowColor: active
            ? "rgba(18, 130, 57, 0.3)"
            : "rgba(134, 151, 167, 0.3)",
          shadowOffset: 15,
          shadowRadius: 5,
          shadowOpacity: 0.3,
        }}
      />
    </TouchableOpacity>
  );
};

export default ToggleButton;
