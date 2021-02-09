import React from "react";
import { View, Text } from "react-native";
import { FONTS, SIZES } from "../constants";

const LargeButton = ({ color, textColor, text }) => {
  return (
    <View
      style={{
        width: 327,
        height: 48,
        backgroundColor: color,
        borderRadius: SIZES.borderRadius,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: textColor, ...FONTS.body3 }}>{text}</Text>
    </View>
  );
};

export default LargeButton;
