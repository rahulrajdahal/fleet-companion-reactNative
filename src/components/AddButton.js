import React from "react";
import { Text, View, Image } from "react-native";
import { COLORS, images, SIZES } from "../constants";

const AddButton = ({ text, image, style }) => {
  return (
    <View
      style={{
        width: 150,
        height: 40,
        backgroundColor: "rgba(18, 130, 57, 0.05)",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: COLORS.success,
        borderRadius: SIZES.borderRadius,
        flexDirection: "row",
        ...style,
      }}
    >
      <Image source={image} style={{ marginRight: 10 }} />
      <Text>{text}</Text>
    </View>
  );
};

export default AddButton;
