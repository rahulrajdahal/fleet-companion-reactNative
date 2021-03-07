import React from "react";
import { Text, View } from "react-native";
import { DashboardHeader } from "../../components";
import { COLORS } from "../../constants";

const AddSignature = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <DashboardHeader title="Add a Signature" headerRightTitle="Save" />
    </View>
  );
};

export default AddSignature;
