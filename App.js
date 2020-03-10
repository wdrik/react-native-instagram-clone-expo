import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/routes/routes";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />

      <Routes />
    </NavigationContainer>
  );
}
