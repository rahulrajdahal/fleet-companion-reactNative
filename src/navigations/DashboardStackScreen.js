import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PageOne,
  Dashboard,
  PageTwo,
  PageThree,
  VehicleSelection,
  VehicleChecklist,
  ConfirmChecklist,
  SignatureScreen,
  WorkDetails,
  OnWork,
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
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="PageTwo"
        component={PageTwo}
        options={{
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="PageThree"
        component={PageThree}
        options={{
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="VehicleSelection"
        component={VehicleSelection}
        options={{
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="VehicleChecklist"
        component={VehicleChecklist}
        options={{
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="ConfirmChecklist"
        component={ConfirmChecklist}
        options={{
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="SignatureScreen"
        component={SignatureScreen}
        options={{
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="WorkDetails"
        component={WorkDetails}
        options={{
          headerShown: false,
        }}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackScreen;
