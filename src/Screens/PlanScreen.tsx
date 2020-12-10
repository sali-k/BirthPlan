import { useNavigation, RouteProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { save } from "../Store";

type PlanScreenRouteProps = RouteProp<RootStackParamList, "Plan">;
type Props = {
  route: PlanScreenRouteProps;
};

export function PlanScreen(props: Props) {
  const [text, setText] = React.useState("");
  // 画面遷移の定義
  const navigation = useNavigation();

  const toBack = () => {
    navigation.goBack();
  };

  // 保存ボタンを押した時の関数
  const onSave = () => {
    save(text, Date.now());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="<例>"
        multiline
        onChangeText={(text) => setText(text)}
        style={styles.text}
      />
      <Button onPress={onSave} mode="contained">
        保存
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBEDA",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 8,
  },
});
