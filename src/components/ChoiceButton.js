import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../constants";
import { Check } from "../constants/icons";

const ChoiceButton = ({ disagree, onPress, text, style }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: 131,
        borderWidth: 1.5,
        borderColor: disagree ? COLORS.danger : COLORS.success,
        borderRadius: 20,
        padding: 8,
        ...style,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 24,
          height: 24,
          backgroundColor: disagree ? COLORS.danger : COLORS.success,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
        }}
      >
        <Check />
      </View>
      <Text
        style={{
          color: disagree ? COLORS.danger : COLORS.success,
          ...FONTS.body2,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ChoiceButton;
