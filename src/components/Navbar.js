import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../constants";
import { Chat, Logo, Menu } from "../constants/icons";

const Navbar = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 36,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 228.08,
          alignSelf: "flex-start",
        }}
      >
        <Menu style={{ marginRight: 14 }} />
        <Logo width="33.59" height="24" />
      </View>
      <View
        style={{
          width: 10,
          height: 10,
          backgroundColor: COLORS.danger,
          borderRadius: 10,
          bottom: 9,
          left: 27,
          zIndex: 1,
        }}
      />
      <Chat style={{ alignSelf: "flex-end" }} />
    </View>
  );
};

export default Navbar;
