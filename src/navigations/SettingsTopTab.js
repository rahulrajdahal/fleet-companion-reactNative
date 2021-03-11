import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { COLORS, FONTS } from "../constants";
import { General, Notifications } from "../screens";

const Tab = createMaterialTopTabNavigator();

const SettingsTopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="General"
      tabBarOptions={{
        tabStyle: {
          padding: 0,
          margin: 0,
          alignItems: "flex-start",
          width: 100,
        },
        style: {
          elevation: 0,
          backgroundColor: COLORS.white,
          width: 327,
          marginTop: 32,
        },
        activeTintColor: COLORS.success,
        labelStyle: {
          ...FONTS.body1,
          textTransform: "capitalize",
          fontFamily: "Manrope",
          fontWeight: "600",
          color: COLORS.success,
          textAlign: "left",
          width: 100,
        },
        inactiveTintColor: COLORS.success400,
        indicatorStyle: {
          backgroundColor: COLORS.success,
          maxWidth: 105,
        },
      }}
    >
      <Tab.Screen
        name="General"
        component={General}
        options={{ tabBarLabel: "General" }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ tabBarLabel: "Notifications" }}
      />
    </Tab.Navigator>
  );
};

export default SettingsTopTab;
