import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../screens/Profile";

import FeedRoutes from "./feed.routes";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Feed" component={FeedRoutes} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
