// import * as React from "react";
// import { Feather, AntDesign, FontAwesome5, Fontisto } from "@expo/vector-icons";
// import { HomeScreen } from "../Screens/HomeScreen";
// import { EditScreen } from "../Screens/EditScreen";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { RouteProp } from "@react-navigation/native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { View } from "react-native";

// const Stack = createStackNavigator<HomeNavigatorParamList>();

// type HomeNavigatorRouteProp = RouteProp<
//   HomeNavigatorParamList,
//   "HomeNavigator"
// >;
// type Props = {
//   route: HomeNavigatorRouteProp;
// };

// export default function AppNavigator(props: Props) {
//   const currentUser = props.route.params.user;
//   const bPlan = props.route.params.bPlan;
//   return (
//     <View>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Edit" component={EditScreen} />
//     </View>
//   );
// }
