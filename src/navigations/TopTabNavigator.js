import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ActiveWork, CompletedWork } from "../screens";
import { COLORS, FONTS } from "../constants";
import { Active } from "../constants/icons";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ActiveWork"
      tabBarOptions={{
        style: { elevation: 0 },
        activeTintColor: COLORS.text800,
        labelStyle: { ...FONTS.h6, textTransform: "capitalize" },
        inactiveTintColor: COLORS.text500,
        showIcon: true,
        iconStyle: { top: 34, left: 73 },
        indicatorStyle: { backgroundColor: COLORS.white },
      }}
    >
      <Tab.Screen
        name="ActiveWork"
        component={ActiveWork}
        options={{
          tabBarLabel: "Active Work",
          tabBarIcon: ({ focused }) => (focused ? <Active /> : null),
        }}
      />
      <Tab.Screen
        name="CompletedWork"
        component={CompletedWork}
        options={{
          tabBarLabel: "Completed",
          tabBarIcon: ({ focused }) => (focused ? <Active /> : null),
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
