import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  Button,
} from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import firebase from "firebase";
import { ChatItem } from "../ChatItem";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
//
import { loadAll, removeBplanInfoAsync } from "../Store";
import { FAB, List, BottomNavigation } from "react-native-paper";
import moment from "moment";

type HomeScreenRouteProp = RouteProp<AppNavigatorParamList, "Home">;
type Props = {
  route: HomeScreenRouteProp;
};

export function HomeScreen(props: Props) {
  const currentUser = props.route.params.user;
  const navigation = useNavigation();
  const back = () => {
    navigation.goBack();
  };
  const [plans, setPlans] = useState<B_Plan[]>([]);

  // useEffectは最初にページが読み込まれた時に呼び出される
  useEffect(() => {
    // asyncで非同期で読み込みとstate更新を定義
    const initialize = async () => {
      // awaitで読み込みが終わるまで待機
      const newMemos = await loadAll();
      setPlans(newMemos);
    };
    // 画面が戻ってきた時に動作するようにnavigationの動作に追加
    navigation.addListener("focus", initialize);
  });

  // Compose画面に移動する関数を用意
  const toPlan = () => {
    navigation.navigate("BirthPlan");
  };

  // 画像リストをストレージから読み込み、更新する
  const updateBplanInfoListAsync = async () => {
    const newBplanInfoList = await loadAll();
    setPlans(newBplanInfoList.reverse());
  };

  // 画像情報の削除処理 + 画面更新
  const removeBplanInfoAndUpdateAsync = async (bplanInfo: B_Plan) => {
    await removeBplanInfoAsync(bplanInfo);
    updateBplanInfoListAsync();
  };

  // 写真を長押ししたときの処理
  const handleLongPressBplan = (item: B_Plan) => {
    Alert.alert(item.text, "このバースプランの編集または削除ができます。", [
      {
        text: "キャンセル",
        style: "cancel",
      },
      {
        text: "バースプラン編集",
        onPress: () => {
          navigation.navigate("Edit", { bPlan: item });
        },
      },
      {
        text: "削除",
        onPress: () => {
          removeBplanInfoAndUpdateAsync(item);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* <Text>{currentUser.email}</Text> */}
      <View style={styles.title}>
        <Text style={styles.titleText}>My BirthPlan一覧</Text>
      </View>
      <Text style={styles.textMiddle}>
        My BirthPlanを長押しすると、編集と削除が可能です。
      </Text>
      <FlatList
        data={plans}
        renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => handleLongPressBplan(item)}>
            <List.Item
              style={styles.item}
              title={item.text}
              titleNumberOfLines={5}
              description={`作成日時：${moment(item.createdAt).format(
                "yyyy-MM-DD ddd HH:mm"
              )}`}
              descriptionStyle={styles.description}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FAB
        style={styles.addButton}
        icon="file-document-edit-outline"
        onPress={toPlan}
      />
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
  title: {
    backgroundColor: "#F08080",
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
    marginTop: 20,
    marginBottom: 10,
  },
  titleText: {
    // paddingRight: 20,
    // paddingLeft: 20,
    minWidth: "90%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  item: {
    minWidth: "90%",
    flexDirection: "column",
    borderWidth: 3,
    borderColor: "#FF5192",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  description: {
    flex: 1,
    textAlign: "right",
  },
  addButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "#fff",
    backgroundColor: "#FF5192",
  },
  textMiddle: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#666666",
    marginBottom: 10,
    marginTop: 10,
  },
});
