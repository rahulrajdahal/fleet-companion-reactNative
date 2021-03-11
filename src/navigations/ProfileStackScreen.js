import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import {
  General,
  Notifications,
  Profile,
  Settings,
  Documents,
} from "../screens";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="General"
        component={General}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Documents"
        component={Documents}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
