import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ActiveWork, CompletedWork } from "../screens";
import { COLORS, FONTS } from "../constants";
import { Active } from "../constants/icons";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ modalVisible }) => {
  const tabBarOptions = {
    style: {
      elevation: 0,
      backgroundColor: modalVisible ? "rgba(2, 14, 38, 0.15)" : COLORS.white,
    },
    activeTintColor: COLORS.text800,
    labelStyle: { ...FONTS.h6, textTransform: "capitalize" },
    inactiveTintColor: COLORS.text500,
    showIcon: true,
    iconStyle: { top: 34, left: 73 },
    indicatorStyle: {
      backgroundColor: modalVisible ? "rgba(2, 14, 38, 0.15)" : COLORS.white,
    },
  };

  return (
    <Tab.Navigator initialRouteName="ActiveWork" tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="ActiveWork"
        children={() => <ActiveWork modalVisible={modalVisible} />}
        options={{
          tabBarLabel: "Active Work",
          tabBarIcon: ({ focused }) => (focused ? <Active /> : null),
        }}
      />
      <Tab.Screen
        name="CompletedWork"
        children={() => <CompletedWork modalVisible={modalVisible} />}
        options={{
          tabBarLabel: "Completed",
          tabBarIcon: ({ focused }) => (focused ? <Active /> : null),
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
