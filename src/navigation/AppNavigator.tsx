import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { HomeScreen } from "../Screens/HomeScreen";
import { IdeaScreen } from "../Screens/IdeaScreen";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const HomeRoute = () => <Text>Home</Text>;
const IdeasRoute = () => <Text>Ideas</Text>;
const UsersRoute = () => <Text>Users</Text>;

type AppNavigatorRouteProps = RouteProp<RootStackParamList, "AppNavigator">;
type Props = {
  route: AppNavigatorRouteProps;
};

const MyComponent = (props: Props) => {
  const currentUser = props.route.params.user;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Home", title: "Home", icon: "home-outline" },
    { key: "Ideas", title: "Ideas", icon: "heart-outline" },
    { key: "Users", title: "Users", icon: "account-supervisor" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: HomeScreen,
    Ideas: IdeaScreen,
    Users: UsersRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      // style={styles.ButtonNav}
    />
  );
};

export default MyComponent;
