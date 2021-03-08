import React from "react";
import { Text, View } from "react-native";
import { DashboardHeader } from "../../components";
import { COLORS, SIZES } from "../../constants";

const WorkDetails = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <DashboardHeader title="Work Details" />

      <View
        style={{
          paddingHorizontal: 24,
          width: 327,
          height: 552,
          borderRadius: SIZES.borderRadius * 2,
          borderWidth: 1,
          borderColor: COLORS.text100,
          alignSelf: "center",
          marginTop: 32,
          marginBottom: 31,
        }}
      >
        <Text>WorkDetails</Text>
      </View>
    </View>
  );
};

export default WorkDetails;
