import React from "react";
import { Text, View } from "react-native";
import { Navbar } from "../../components";
import { COLORS } from "../../constants";

const Settings = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 24 }}
    >
      <Navbar />
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
