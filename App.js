import React from "react";
import { Image, View, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "./src/screens/Feed";

import logo from "./assets/logo.png";
import camera from "./assets/camera.png";
import igtv from "./assets/igtv.png";
import send from "./assets/send.png";

function LogoTitle() {
  return <Image style={{ width: 95, height: 27 }} source={logo} />;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{
          headerStyle: { backgroundColor: "#FFF" },
          headerTintColor: "#333",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitle: props => <LogoTitle {...props} />,
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
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => alert("Here opens the igtv page!")}
              >
                <Image style={{ width: 18, height: 19 }} source={igtv} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert("Here opens the send page!")}
              >
                <Image
                  style={{ width: 21, height: 18, marginLeft: 15 }}
                  source={send}
                />
              </TouchableOpacity>
            </View>
          )
        }}
      >
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
