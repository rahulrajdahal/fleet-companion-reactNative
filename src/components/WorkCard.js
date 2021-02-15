import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const WorkCard = () => {
  return (
    <View
      style={{
        width: 327,
        height: 132,
        backgroundColor: COLORS.warning200,
        borderRadius: SIZES.borderRadius,
        marginTop: 16,
      }}
    >
      <View
        style={{
          height: "100%",
          width: 10,
          backgroundColor: COLORS.warning400,
          borderTopStartRadius: 10,
          borderBottomStartRadius: 10,
          alignSelf: "flex-start",
        }}
      />
      <View style={{ position: "absolute", left: 20, top: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{ marginRight: 37, color: COLORS.text700, ...FONTS.body3 }}
          >
            Job ID
          </Text>
          <Text style={{ color: COLORS.text900, ...FONTS.body3 }}>420</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 21,
          right: 20,
          bottom: 102,
        }}
      >
        <View
          style={{
            width: 8,
            height: 8,
            backgroundColor: "#E68A02",
            borderRadius: SIZES.borderRadius,
            marginRight: 4,
          }}
        />
        <Text style={{ color: "#E68A02" }}>In Progress</Text>
      </View>
    </View>
  );
};

export default WorkCard;
