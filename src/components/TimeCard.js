import React from "react";
import { View, Text } from "react-native";
import { SIZES, COLORS, FONTS } from "../constants";

const TimeCard = ({ backgroundColor, textColor, caption, body }) => {
  return (
    <View
      style={{
        width: 156,
        height: 80,
        backgroundColor: backgroundColor,
        borderRadius: SIZES.borderRadius,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 20,
      }}
    >
      <Text style={{ color: COLORS.text700, ...FONTS.caption }}>{caption}</Text>
      <Text style={{ marginTop: 8, color: textColor, ...FONTS.h6 }}>
        {body}
      </Text>
    </View>
  );
};

export default TimeCard;
