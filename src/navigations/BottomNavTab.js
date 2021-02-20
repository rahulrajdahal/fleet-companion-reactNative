import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard, Expense, Profile, Report } from "../screens";
import { COLORS, FONTS } from "../constants";
import {
  DashboardIcon,
  ReportIcon,
  ExpenseIcon,
  UserIcon,
} from "../constants/icons";
import { DashboardStackScreen } from ".";

const Tab = createBottomTabNavigator();

const BottomNavTab = () => {
  const tabOptions = {
    inactiveTintColor: COLORS.success400,
    labelStyle: {
      fontFamily: "Manrope",
      fontWeight: "600",
      fontSize: 10,
      lineHeight: 10,
      textTransform: "capitalize",
      color: COLORS.success900,
    },
    style: {
      maxHeight: 85,
      height: "100%",
      backgroundColor: COLORS.white,
      paddingTop: 8,
      paddingBottom: 32,
      paddingLeft: 30,
      paddingRight: 30,
      elevation: 0,
    },
  };

  return (
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen
        name="DashboardStackScreen"
        component={DashboardStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <DashboardIcon
              style={{ color: focused ? COLORS.success900 : COLORS.success400 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarIcon: ({ focused }) => (
            <ReportIcon
              style={{ color: focused ? COLORS.success900 : COLORS.success400 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Expense"
        component={Expense}
        options={{
          tabBarIcon: ({ focused }) => (
            <ExpenseIcon
              style={{ color: focused ? COLORS.success900 : COLORS.success400 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <UserIcon
              style={{ color: focused ? COLORS.success900 : COLORS.success400 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavTab;