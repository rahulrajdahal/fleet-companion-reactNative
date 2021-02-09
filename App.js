import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/screens";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
