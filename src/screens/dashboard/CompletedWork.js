import React from "react";
import { View } from "react-native";
import { WorkCard } from "../../components";
import { COLORS } from "../../constants";

const CompletedWork = ({ modalVisible }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: modalVisible ? "rgba(2, 14, 38, 0.15)" : COLORS.white,
      }}
    >
      <WorkCard status="completed" />
    </View>
  );
};

export default CompletedWork;
