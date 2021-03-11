import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

const Tab = createMaterialTopTabNavigator();

const SettingsTopTab = () => {
  return <Tab.Navigator initialRouteName="General"></Tab.Navigator>;
};

export default SettingsTopTab;
