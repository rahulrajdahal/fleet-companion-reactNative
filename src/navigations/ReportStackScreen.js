import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Fault, Incident, Report } from "../screens";

const ReportStack = createStackNavigator();

const ReportStackScreen = () => {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen
        name="Report"
        component={Report}
        options={{ headerShown: false }}
      />

      <ReportStack.Screen
        name="Incident"
        component={Incident}
        options={{ headerShown: false }}
      />

      <ReportStack.Screen
        name="Fault"
        component={Fault}
        options={{ headerShown: false }}
      />
    </ReportStack.Navigator>
  );
};

export default ReportStackScreen;
