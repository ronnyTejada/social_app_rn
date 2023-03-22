import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Dashboard from "../screens/dashboard";
import Profile from "../screens/profile";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName="/"
    >
      <Stack.Screen name="/" component={Dashboard} />

      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation