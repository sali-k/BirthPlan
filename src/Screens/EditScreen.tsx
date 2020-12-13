import { useNavigation, RouteProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { save } from "../Store";
import { TextArea } from "../components/TextArea";

type EditScreenRouteProps = RouteProp<RootStackParamList, "Edit">;
type Props = {
  route: EditScreenRouteProps;
};

export function EditScreen(props: Props) {
  const bPlan = props.route.params.bPlan;
  const [text, setText] = React.useState(bPlan.text);
  // 画面遷移の定義
  const navigation = useNavigation();

  const toBack = () => {
    navigation.goBack();
  };

  // 保存ボタンを押した時の関数
  const onSave = () => {
    console.log(bPlan.createdAt);
    save(text, bPlan.createdAt);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <TextArea
          value={text}
          onChangeText={(value) => setText(value)}
          label="バースプランを入力してください"
          placeholder="<例>【陣痛時】夫にそばにいて欲しい。"
        />
      </View>
      <View style={styles.textbtn}>
        <Button onPress={onSave} mode="contained" style={styles.btn}>
          保存
        </Button>
        <Button onPress={toBack} mode="contained" style={styles.btn}>
          戻る
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBEDA",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    backgroundColor: "#fff",
    margin: "5%",
  },
  textbtn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btn: {
    width: 10,
    backgroundColor: "#F08080",
    margin: "5%",
  },
});
