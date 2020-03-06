import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Feed from "../screens/Feed";

import logo from "../../assets/logo.png";
import camera from "../../assets/camera.png";
import send from "../../assets/send.png";

const Stack = createStackNavigator();

export default function FeedRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerStyle: { backgroundColor: "#FFF" },
        headerTintColor: "#333",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerTitle: () => <Image style={styles.logo} source={logo} />,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => alert("Here opens the camera page!")}
          >
            <Image
              style={{ width: 19, height: 18, marginLeft: 10 }}
              source={camera}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => alert("Here opens the send page!")}>
            <Image style={styles.discordIcon} source={send} />
          </TouchableOpacity>
        )
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 95,
    height: 27
  },
  discordIcon: {
    width: 21,
    height: 18,
    marginRight: 10
  }
});
