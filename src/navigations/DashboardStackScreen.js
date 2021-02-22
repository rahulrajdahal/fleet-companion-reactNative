import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PageOne,
  Dashboard,
  PageTwo,
  PageThree,
  VehicleSelection,
  VehicleChecklist,
} from "../screens";
import { COLORS, FONTS } from "../constants";
import { View, Text } from "react-native";

const DashboardStack = createStackNavigator();

const DashboardStackScreen = () => {
  const headerTitleStyle = {
    ...FONTS.body2,
    fontFamily: "Manrope",
    color: COLORS.text900,
    fontWeight: "bold",
  };

  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />

      <DashboardStack.Screen
        name="PageOne"
        component={PageOne}
        options={{
          headerTitle: "Assessment",
          headerTitleStyle: headerTitleStyle,
        }}
      />
      <DashboardStack.Screen
        name="PageTwo"
        component={PageTwo}
        options={{
          headerTitle: "Assessment",
          headerTitleStyle: headerTitleStyle,
        }}
      />
      <DashboardStack.Screen
        name="PageThree"
        component={PageThree}
        options={{
          headerTitle: "Assessment",
          headerTitleStyle: headerTitleStyle,
        }}
      />
      <DashboardStack.Screen
        name="VehicleSelection"
        component={VehicleSelection}
        options={{
          headerTitle: "Vehicle Selection",
          headerTitleStyle: headerTitleStyle,
        }}
      />

      <DashboardStack.Screen
        name="VehicleChecklist"
        component={VehicleChecklist}
        options={{
          headerShown: false,
        }}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackScreen;
