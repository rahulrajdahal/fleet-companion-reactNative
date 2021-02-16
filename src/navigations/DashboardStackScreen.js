import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Assessment, Dashboard } from "../screens";

const DashboardStack = createStackNavigator();

const DashboardStackScreen = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />

      <DashboardStack.Screen name="Assessment" component={Assessment} />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackScreen;
