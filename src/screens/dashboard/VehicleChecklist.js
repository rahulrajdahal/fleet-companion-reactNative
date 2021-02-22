import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { DashboardHeader } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { ArrowLeft } from "../../constants/icons";

const VehicleChecklist = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <DashboardHeader title="Vehicle Checklist" headerRight />
      <View
        style={{
          paddingHorizontal: 24,
        }}
      >
        <Text>VehicleChecklist</Text>
      </View>
    </View>
  );
};

export default VehicleChecklist;
