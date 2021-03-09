import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS } from "../constants";

const RadioButton = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: COLORS.primary,
          ...FONTS.body3,
          fontWeight: "600",
          fontFamily: "Manrope",
        }}
      >
        Party at Fault?
      </Text>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1.5,
            borderRadius: 8,
            borderColor: COLORS.success,
          }}
        />
        <Text>Self</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1.5,
            borderRadius: 8,
            borderColor: COLORS.success,
            marginRight: 8,
          }}
        />
        <Text>Other Party</Text>
      </View>
    </View>
  );
};

export default RadioButton;
