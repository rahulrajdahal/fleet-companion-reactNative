import React from "react";
import { Text, View } from "react-native";
import { WorkCard } from "../components";
import { COLORS } from "../constants";

const CompletedWork = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <WorkCard status="completed" />
    </View>
  );
};

export default CompletedWork;
