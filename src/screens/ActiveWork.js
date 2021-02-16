import React from "react";
import { View, Text } from "react-native";
import { WorkCard } from "../components";
import { COLORS } from "../constants";

const ActiveWork = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <WorkCard />
      <WorkCard inProgress />
      <WorkCard />
    </View>
  );
};

export default ActiveWork;
