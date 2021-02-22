import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { ArrowLeft } from "../../constants/icons";

const VehicleChecklist = () => {
  function renderHeader() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 24,
        }}
      >
        <ArrowLeft />
        <Text
          style={{
            color: COLORS.text900,
            ...FONTS.body2,
            fontWeight: "bold",
            fontFamily: "Manrope",
          }}
        >
          Vehicle Checklist
        </Text>
        <Text>Create Fault</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
      }}
    >
      {/* renderHeader     */}
      {renderHeader()}

      <Text>VehicleChecklist</Text>
    </View>
  );
};

export default VehicleChecklist;
