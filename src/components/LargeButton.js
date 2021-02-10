import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { FONTS, SIZES } from "../constants";

const LargeButton = ({ color, textColor, text, style, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 327,
        height: 48,
        backgroundColor: color,
        borderRadius: SIZES.borderRadius,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <Text style={{ color: textColor, ...FONTS.body3 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LargeButton;
