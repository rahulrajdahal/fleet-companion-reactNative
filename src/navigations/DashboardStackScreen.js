import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PageOne, Dashboard, PageTwo, PageThree } from "../screens";

const DashboardStack = createStackNavigator();

const DashboardStackScreen = () => {
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
        options={{ headerTitle: "Assessment" }}
      />
      <DashboardStack.Screen
        name="PageTwo"
        component={PageTwo}
        options={{ headerTitle: "Assessment" }}
      />
      <DashboardStack.Screen
        name="PageThree"
        component={PageThree}
        options={{ headerTitle: "Assessment" }}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackScreen;
