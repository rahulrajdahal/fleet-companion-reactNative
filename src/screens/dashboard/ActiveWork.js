import React from "react";
import { View } from "react-native";
import { WorkCard } from "../../components";
import { COLORS } from "../../constants";

const ActiveWork = ({ modalVisible }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: modalVisible ? "rgba(2, 14, 38, 0.15)" : COLORS.white,
      }}
    >
      <WorkCard />
      <WorkCard status="inProgress" />
      <WorkCard status="scheduled" />
    </View>
  );
};

export default ActiveWork;
