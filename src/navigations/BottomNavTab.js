import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import {
  DashboardIcon,
  ReportIcon,
  ExpenseIcon,
  UserIcon,
} from "../constants/icons";
import { DashboardStackScreen, ReportStackScreen } from ".";
import ExpenseStackScreen from "./ExpenseStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";

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
        name="Dashboard"
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
        component={ReportStackScreen}
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
        component={ExpenseStackScreen}
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
        component={ProfileStackScreen}
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
