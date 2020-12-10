import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import "./src/Fire";
// react native paper ライブラリ
import { Provider as PaperProvider } from "react-native-paper";
// Screens
import {
  SignupScreen,
  SigninScreen,
  HomeScreen,
  PlanScreen,
} from "./src/Screens/Screens";
import AppNavigator from "./src/navigation/AppNavigator";

const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignupScreen}
            // 画面のタイトルがついている部分（ヘッダー）を非表示にする
            options={{ headerShown: false }}
          />
          <Stack.Screen name="AppNavigator" component={AppNavigator} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Plan" component={PlanScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
