import * as React from "react";
import { Feather, AntDesign, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { HomeScreen } from "../Screens/HomeScreen";
import { UserScreen } from "../Screens/UserScreen";
import { ChatScreen } from "../Screens/ChatScreen";
import { HelpScreen } from "../Screens/HelpScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RouteProp } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator<AppNavigatorParamList>();

type AppNavigatorRouteProp = RouteProp<RootStackParamList, "AppNavigator">;
type Props = {
  route: AppNavigatorRouteProp;
};

export default function AppNavigator(props: Props) {
  const currentUser = props.route.params.user;
  return (
    <Tab.Navigator
      activeColor="#FFFF00"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: "#FF5192" }}
      initialRouteName={"User"}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ user: currentUser }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        initialParams={{ user: currentUser }}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color }) => (
            <Feather name="heart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        initialParams={{ user: currentUser }}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <AntDesign name="wechat" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ color }) => (
            <Fontisto name="nursing-home" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
