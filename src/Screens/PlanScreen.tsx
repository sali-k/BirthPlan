import { useNavigation, RouteProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { save } from "../Store";
import { TextArea } from "../components/TextArea";

type PlanScreenRouteProps = RouteProp<RootStackParamList, "BirthPlan">;
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
