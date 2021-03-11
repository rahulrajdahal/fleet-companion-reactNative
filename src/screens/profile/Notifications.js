import React from "react";
import { Text, View } from "react-native";
import { ToggleButton } from "../../components";
import { COLORS } from "../../constants";

const Notifications = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Text>Notifications</Text>

      <ToggleButton />
    </View>
  );
};

export default Notifications;
